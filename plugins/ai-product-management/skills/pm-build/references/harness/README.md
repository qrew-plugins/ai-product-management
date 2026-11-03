# Page check harness

For any product rendered in a browser: dashboards, report pages, web pages and apps, including single-file HTML pages.

## Set up once per machine
```bash
mkdir -p ~/pm-harness
cp <plugin folder>/skills/pm-build/references/harness/check-page.js ~/pm-harness/
cd ~/pm-harness
npm init -y >/dev/null && npm i playwright axe-core
npx playwright install chromium   # skip if Chromium is already installed for Playwright
```

## Run
```bash
node ~/pm-harness/check-page.js <file-or-url> apm/runs/<date>-<batch>/page-check
# options: WIDTHS=1366,390,320 SCHEMES=light,dark WAIT_MS=1500 FULL_PAGE=1 (0 = viewport only)
```

It writes a screenshot per color scheme and width, `report.json` and `report.md` (overflow, axe-core violations mapped to WCAG tags, small-target candidates, console errors).

## Check the setup
```bash
cd ~/pm-harness && node -e "require('axe-core');require('playwright').chromium.launch().then(b=>b.close())" && echo harness ok
```

## Pages that need live data
Don't point the harness at live data. Save a copy of the page that reads a sample file or fixture, and check that. Live checks happen only on the test record named in the profile, or one the live-test approver names at the time.

## Comparing runs
Keep each run's `report.json`. In step 4 of the build loop, compare violation counts, small-target counts and overflow with the previous batch's run, and explain any increase.
