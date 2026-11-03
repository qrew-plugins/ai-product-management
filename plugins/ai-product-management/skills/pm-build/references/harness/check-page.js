#!/usr/bin/env node
// check-page.js: render a browser-based product and collect evidence for the build loop and audits.
// Usage: node ~/pm-harness/check-page.js <file-or-url> <out-dir>
// Env:   WIDTHS=1366,390,320  SCHEMES=light,dark  WAIT_MS=1500  FULL_PAGE=1 (0 = viewport only)
// Needs: playwright (with Chromium) and axe-core installed in ~/pm-harness (see README.md there).
// Output: <out-dir>/<scheme>-<width>.png, report.json, report.md
'use strict';
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

function need(mod) {
  try { return require(mod); } catch (e) {
    console.error(`Missing "${mod}". Set up the harness in ~/pm-harness (see the harness README): cd ~/pm-harness && npm i playwright axe-core`);
    process.exit(2);
  }
}

(async () => {
  const [target, outDir] = process.argv.slice(2);
  if (!target || !outDir) { console.error('Usage: node check-page.js <file-or-url> <out-dir>'); process.exit(1); }
  const { chromium } = need('playwright');
  const axeSource = fs.readFileSync(need('axe-core') && require.resolve('axe-core/axe.min.js'), 'utf8');
  const widths = (process.env.WIDTHS || '1366,390,320').split(',').map(Number);
  const schemes = (process.env.SCHEMES || 'light,dark').split(',');
  const waitMs = Number(process.env.WAIT_MS || 1500);
  const fullPage = process.env.FULL_PAGE !== '0';
  const url = /^https?:|^file:/.test(target) ? target : pathToFileURL(path.resolve(target)).href;
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const runs = [];
  for (const scheme of schemes) {
    for (const width of widths) {
      const ctx = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: scheme, bypassCSP: true });
      const page = await ctx.newPage();
      const consoleErrors = [];
      page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()); });
      page.on('pageerror', e => consoleErrors.push(String(e)));
      await page.goto(url, { waitUntil: 'load' });
      await page.waitForTimeout(waitMs);

      const layout = await page.evaluate(() => {
        const overflowPx = document.documentElement.scrollWidth - window.innerWidth;
        const sel = 'a[href],button,input,select,textarea,[role="button"],[role="tab"],[role="link"],[tabindex]:not([tabindex="-1"])';
        const small = [];
        for (const el of document.querySelectorAll(sel)) {
          const r = el.getBoundingClientRect();
          const st = getComputedStyle(el);
          if (!r.width || !r.height || st.visibility === 'hidden' || st.display === 'none') continue;
          if (r.width < 24 || r.height < 24) {
            const label = (el.getAttribute('aria-label') || el.textContent || el.getAttribute('name') || el.tagName).trim().slice(0, 40);
            small.push({ tag: el.tagName.toLowerCase(), label, w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.x), y: Math.round(r.y) });
          }
        }
        return { overflowPx, smallTargets: small };
      });

      await page.addScriptTag({ content: axeSource });
      const axe = await page.evaluate(async () => {
        const res = await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] } });
        return res.violations.map(v => ({ id: v.id, impact: v.impact, help: v.help, tags: v.tags.filter(t => /^wcag\d/.test(t)), nodes: v.nodes.length, targets: v.nodes.slice(0, 5).map(n => n.target.join(' ')) }));
      });

      const shot = `${scheme}-${width}.png`;
      await page.screenshot({ path: path.join(outDir, shot), fullPage });
      runs.push({ scheme, width, screenshot: shot, overflowPx: layout.overflowPx, smallTargets: layout.smallTargets, axe, consoleErrors });
      await ctx.close();
    }
  }
  await browser.close();

  const report = { target: url, checkedAt: new Date().toISOString(), runs };
  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));

  const lines = [`# Page check`, ``, `Target: ${url}`, `Checked: ${report.checkedAt}`, ``,
    `| Scheme | Width | Overflow px | axe violations | Small-target candidates | Console errors | Screenshot |`,
    `|---|---|---|---|---|---|---|`];
  for (const r of runs) lines.push(`| ${r.scheme} | ${r.width} | ${r.overflowPx} | ${r.axe.reduce((n, v) => n + v.nodes, 0)} (${r.axe.length} rules) | ${r.smallTargets.length} | ${r.consoleErrors.length} | ${r.screenshot} |`);
  const rules = new Map();
  for (const r of runs) for (const v of r.axe) rules.set(v.id, v);
  if (rules.size) {
    lines.push('', '## axe rules that failed (any run)', '');
    for (const v of rules.values()) lines.push(`- **${v.id}** (${v.impact}) ${v.help} · ${v.tags.join(', ')} · e.g. \`${v.targets[0] || ''}\``);
  }
  lines.push('', 'Small targets are candidates only: apply the WCAG 2.5.8 spacing and other exceptions before reporting a failure.');
  fs.writeFileSync(path.join(outDir, 'report.md'), lines.join('\n') + '\n');
  console.log(lines.slice(5, 7 + runs.length).join('\n'));
})().catch(e => { console.error(e); process.exit(1); });
