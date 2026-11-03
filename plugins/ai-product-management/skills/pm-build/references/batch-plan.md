# Batch plan, project plan, change orders and risks

All files live in `apm/plan/`.

## Batch plan (`plan/batches.md`)

```md
# Batch plan
## B04 · <name> · Status: proposed | approved (Dxx) | built | shipped
- **From:** slice SL2 of scope/<improvement>.md, or ledger F-003, F-005
- **Rests on:** D12, D14
- **Changes:** parts by name
- **Must not change:** invariants I1, I3; neighbors by name
- **Acceptance criteria:**
  1. ...
- **Needs a person for:** live test on <record> / none
- **Blocked by:** Q07 / none
```

Size: a batch should be reviewable in one sitting. If acceptance criteria run past about eight, split it.

## Project plan (`plan/project-plan.csv`), when the owner tracks one

`id,item,type,priority,depends_on,start,finish,hours_budget,hours_actual,progress,release,decision_id`

- `type`: summary, task or checkpoint (a dated marker with no work).
- `priority`: Must, Should, Could, Won't this time.
- A summary row's hours are its budget; going over is tracked, not hidden.
- Working days are Mon–Fri unless the owner says otherwise (record it in the profile); dependencies are finish-to-start unless noted.

## Change orders (`plan/changes.csv`)

`id,date,requested_by,change,reason,impact_scope,impact_hours,impact_dates,status,decision_id`

Any change to an approved scope, budget or date is a change order. Status: `proposed`, `approved`, `declined`. An approved change gets a decision row.

## Risks, assumptions, issues, dependencies (`plan/raid.csv`)

`id,type,date,description,owner,likelihood,impact,response,status`

`type` is risk, assumption, issue or dependency. Review open rows when planning each batch.
