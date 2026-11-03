# AI Product Management

A method, packaged as skills, for turning a business question into a working product with Claude: a dashboard, report, app, spreadsheet model or automation. The people who know the work explain it in their own words. Claude writes the product-management records and builds the product in small batches. A person approves every step that matters.

Made by QREW Technologies. Free to use under the MIT License. It runs on your own Claude account; plugins need a paid Claude plan (Pro, Max, Team or Enterprise).

## Who runs it

Whoever owns the problem: an owner, an operations or office manager, an analyst, a consultant, or a team working with a partner. No product-management title needed. The project profile records who approves what.

## The workflow

| Step | Skill | What happens | What you get |
|---|---|---|---|
| Start | `pm-start` | Asks whether you're starting fresh or improving something that exists, and whether to build a clickable prototype in Claude first or go straight to the MVP; or finds where a project stands and suggests the next step | A short status |
| 00 Setup | `pm-setup` | Creates the project folder, profile and reference banks; picks a test setup. When improving something that exists, gathers your docs, screenshots, exports and code about it | `apm/` workspace, `sources/` |
| 01 Ground | `pm-ground` | Interviews the problem owner about the real work, using real material | Journey doc, improvement list, proposed build order |
| 02 Scope | `pm-scope` | Settles the decision tree one question at a time | Numbered decisions, open questions, glossary, decision notes, approved look-and-feel mockup, scope slices |
| 03 Build | `pm-build` | Plans thin batches, then builds each approved one through an eight-step loop with independent review | The product, QA evidence |
| 04 Audit | `pm-audit` | Checks what the build produced, with evidence and an independent verifier, once there's something people can use, after fix batches and before release | Findings ledger, fix briefs, fix batches |
| 05 Record | `pm-record` | Closes each batch and session | Run summary, log, status, handoff |
| 06 Package | `pm-package` | Turns a proven workflow into a reusable skill | Draft skill |

Every phase ends with a phase record, written automatically to `apm/records/` (or a folder you choose) for record keeping. Build and Record repeat for every batch. Audit runs once the build produces something people can use, again after fix batches, and before release; its approved findings go back to Build. A batch that needs a new decision goes back to Scope for that one question first.

## What to expect

This method asks a lot of questions on purpose: crawl, then walk, then sprint. Every step opens with a short briefing: what it's for, what you'll be asked, how long it usually takes and what you'll have at the end. Then it checks that now is a good time. A full first pass from setup to the first scope often takes 1–2 hours across one or more sessions. Each build batch then takes about 20–45 minutes of your time.

If you ask to go faster, Claude pushes back once and gives you three choices: keep going, come back later, or go shorter. If you go shorter, whatever was skipped is recorded as open questions. You always decide. The approval gates below never shorten. Details are in `PHASE-BRIEFING.md`.

### About cost

> **On a Claude subscription (Pro, Max, Team or Enterprise seat), using this plugin doesn't cost extra money.** You pay your plan price either way. Long sessions, especially building, use more of your plan's usage limits.

At the start, Claude asks whether you want cost updates at all. Say no and it won't mention cost again unless you ask. Say yes and it only brings up cost for a reason: to help you plan sessions around your plan's limits, to give a budget range if you pay by usage, or because you asked. Any figure is an API-equivalent estimate: what the same usage would cost at Anthropic's published API prices, worked out from QREW's own test runs and pricing found on the web at the time. It's an estimate, not a quote. Check Anthropic's current pricing and your own plan before relying on it.

## Where a person decides

1. Approve each batch before it's built.
2. Approve every new connector, tool, permission or data source.
3. Name the record any live test runs against.
4. Approve each delete or write to a system of record.
5. Answer open questions; Claude never fills them with guesses.
6. Ask "why is this here?" at any time; every change traces to a numbered decision.

## Reference banks included

- WCAG 2.2 Level AA accessibility criteria, pinned from the W3C Recommendation.
- Ten usability heuristics (Nielsen Norman Group), with plain-language auditing notes.
- Record formats for decisions, open questions, glossary, decision notes, findings, briefs, batch plans, project plans, change orders, risks, run summaries and handoffs.
- A page-check harness (`pm-build/references/harness/`) for browser-based products: screenshots at desktop and phone widths in light and dark, axe-core accessibility checks, overflow, small targets and console errors. Needs Node with Playwright and axe-core.

Your own banks (a company grounding document, SOPs, standards) are added during setup.

## Install

- **Claude desktop or claude.ai:** Customize → Plugins → Add → add a marketplace from a repository → `qrew-plugins/ai-product-management` → Install AI Product Management.
- **Claude Code:** `/plugin marketplace add qrew-plugins/ai-product-management`, then `/plugin install ai-product-management@qrew-kits`.
- **From a file:** Customize → Plugins → upload the `.plugin` file.

## Getting started

Connect a folder for the project, then say "start a product project". See `CONNECTORS.md` for optional connectors.

## Version

0.3.2: asks at the start whether to build a clickable prototype in Claude first or go straight to the MVP. Setup records the code, tools, platforms and integrations that already exist or are required; Ground maps how information moves between tools today; Scope settles the build platform, integrations and who maintains it.

0.3.1: every finished phase writes a phase record automatically to `apm/records/` (or a folder the owner names), with a Records table in `_index.md`.

0.3.0: Audit moves after Build (first usable screen, after each fix batch, before release). Adds a status map for every "where are we?" and every new session, 30-minute progress check-ins, a required look-and-feel step with an approved mockup in Scope (dashboards default to charts; apps get questions on intent and feeling), opt-in cost updates, phase briefings, a solo setup shortcut, a session close checklist, and plain-language definitions of the workflow's terms.

0.2.0: asks the starting point first (starting fresh, or improving what exists); for an existing app or workflow, setup gathers source material and Ground starts from it. Adds a plugin icon.

0.1.0: first release of the full workflow.

## License

MIT. See `LICENSE`.
