# Findings ledger and build briefs

## Ledger (`apm/audit/LEDGER.md`)

Top of file: a table of all findings (ID, one line, state, severity). Below it, one entry per finding:

```md
### F-007 · <one-line problem, in glossary terms>
- **State:** needs-triage | needs-info | ready-for-claude | ready-for-person | wontfix | in-build | verified-fixed | regressed
- **Severity:** Blocker | High | Medium | Low
- **Evidence:** measured | code | observed | judgment — <tool output, source reference or screenshot path>
- **Standard:** WCAG SC x.y.z (Level) from the pinned bank, or "heuristic: <name> (#n)"
- **Change type:** style | layout | content | behavior | data-or-access
- **Found:** <date> · **Last seen:** <date>
- Brief below (ready-for-* only)
```

End of file: "Dropped by verifier" (ID, one line, why it was disproved).

### Severity
- **Blocker:** a job in the profile can't be completed, or data could be lost or written wrongly.
- **High:** a Level A or AA failure on a main job, or a misleading number or state.
- **Medium:** friction on a frequent job. Highest rating for a judgment-only finding.
- **Low:** polish. Highest rating for AAA items.

### States
- `ready-for-claude`: `style`, `layout` or `content` fixes, and `behavior` fixes that only correct the product's own logic (a broken filter, a wrong sort). Each has checkable acceptance criteria.
- `ready-for-person`: every `data-or-access` change, any `behavior` change that alters a user's flow or the product's structure, and taste calls.
- `wontfix`: write the reason in `audit/out-of-scope/<topic>.md`.
- After a build: `in-build`, then `verified-fixed` or `regressed`.

## Build brief

Briefs describe behavior and name the parts to change by name (style tokens, functions, selectors, sheet ranges, fields), not by line number. Line numbers go stale.

```md
**Summary:** what changes, in one line
**Now:** what happens today, with evidence
**Wanted:** what should happen, including edge cases, empty and error states, light and dark schemes, phone width
**Parts to change:** names, and why each
**Must not change:** invariants and neighbors this fix must leave alone
**Acceptance criteria:**
1. checkable statement
2. ...
**Rests on:** decision IDs, if any
```

## Batches

- At most 5 briefs per batch.
- Same change type in a batch.
- No two briefs in a batch touch the same part.
- `ready-for-person` items are listed separately as decisions for the owner, one line each.

## Audit summary (`runs/<date>-audit/SUMMARY.md`)

```md
# Audit of <what> · <date>
Trigger: first usable screen | after fix batch Bxx | pre-release | asked by <name>
- New: F-.. · Regressed: F-.. · Verified fixed: F-.. · Dropped by the verifier: n
- Checked against: mockup <path>, look-and-feel decisions D.., banks <names>
- Proposed next batch: F-.., F-.. · Decisions for people: ...
- Not checked, and why
```
