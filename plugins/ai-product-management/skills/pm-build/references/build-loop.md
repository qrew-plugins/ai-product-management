# The build loop

## The eight steps

| # | Step | Done when | Evidence saved to `runs/<date>-<batch>/` |
|---|---|---|---|
| 1 | Scope pass | Every change maps to an active decision or an approved brief | List of decision IDs touched |
| 2 | Exact edits | Only named parts changed; previous version kept | Edit script or change list; previous version |
| 3 | Acceptance tests | Each criterion has a passing check | Test output per criterion |
| 4 | Layout and accessibility | No new accessibility failures; layout holds at every width checked | Harness report, screenshots, comparison with last run |
| 5 | Contract check | No unapproved connectors, writes, permissions, libraries or styles; invariants hold | Before/after counts, invariant checklist |
| 6 | Independent review | Reviewer returned reproduced findings, or none | Reviewer report and its tests |
| 7 | Fix and re-check | Confirmed findings fixed; reviewer's tests pass | Fix list, re-run output |
| 8 | Publish | Owner-visible version updated | Version or link |

## Test setup by product type

Choose one in `pm-setup` and record it in the profile.

**Dashboard, report page, web page or app (anything rendered in a browser)**
- Harness: `harness/check-page.js`, installed once at `~/pm-harness/` (see `harness/README.md`). Renders the page at 1366, 390 and 320 px wide (320 is the WCAG reflow width), in light and dark color schemes, saves full-page screenshots, runs axe-core, and reports horizontal overflow, small targets and console errors.
- Acceptance tests: small scripts that load the page and check the specific behavior (a number, a filter, an empty state), or a sample input with the expected output.
- Feed the page sample data or a fixture; run against live data only on the test record named in the profile, or one the live-test approver names at the time.

**Spreadsheet model**
- Recalculate and scan for errors (#REF!, #DIV/0!, #VALUE!, #N/A).
- Check each acceptance criterion with a known sample input and expected output.
- Check totals tie out to the source report for the same period.
- Check that formulas, not pasted values, sit where the model expects them.

**Automation or script**
- Run against fixtures first (normal, empty, malformed, duplicate input).
- Run in a dry-run or read-only mode before any write.
- Confirm idempotency: running twice doesn't double the effect.
- Log every write it would make. Each live run Claude starts during the build needs a yes from the delete/write-back approver. After go-live, scheduled runs follow the go-live decision.

**Other product types**
- Agree the checks with the batch approver during setup and record them in the profile's Test setup line. Each acceptance criterion still needs a check that can pass or fail.

**Document or written deliverable**
- Check against the scope's acceptance criteria and the glossary.
- Every fact traces to a source; numbers re-checked.
- Read at the target format (print, PDF, phone) before calling it done.

## Contract check, in practice

Compare the new version with the previous one:
- Count connector or API calls, write calls, timers and external libraries. Any increase must be named in the batch.
- For protected parts named in the profile's invariants, confirm they are unchanged (byte-compare functions or formulas where possible).
- Confirm new colors or styles come from the existing palette unless the batch approved new ones.
