# Record templates

## Run summary (`runs/<date>-<batch>/SUMMARY.md`)

```md
# <Batch ID> · <name> · shipped <date> as <version or link>

**From:** slice / briefs · **Rests on:** D.. · **Approved:** D..

## What shipped
- One line per user-visible change, in glossary terms

## Acceptance criteria
| # | Criterion | Result | Evidence |
|---|---|---|---|

## Checks
- Layout and accessibility: <counts vs last run, explained>
- Contract: <connector, write, permission, library counts vs last version; invariants checked>

## Independent review
<N> findings, all reproduced / <n> not reproduced (why). Each: ID · severity · what · fix · re-checked with the reviewer's test (path).
<or: "Self-review only (small change): <why>">

## Not checked
- What couldn't run and why (for example, a live test waiting on a named record)

## Open
- Q.. / follow-ups
```

## Log line (`log.md`)

`- YYYY-MM-DD · B04 <name> · shipped <what> (<version>) · open: Q07, live test pending`

## Status (`_index.md`)

Keep the top six lines and the Steps table current: Current step, Next step, Next batch, Last shipped, Last audit, Blocking questions. The status map reads its marks from the Steps table. Add a row to the Batches table with a link to the run summary.

## Handoff (`handoffs/<date>-<topic>.md`)

```md
# Handoff: <topic>
Written <date> by <who/Claude session> for <who or what comes next>.

## Where things stand
- Status: see _index.md. Last shipped: <batch, link>.
- Live version: <link>

## Read first
- Paths, in order, with one line on why each matters

## Open, and who it waits on
- Q.. · owner · blocks ..

## What a fresh reader would get wrong
- Terms that mean something specific here (see CONTEXT.md)
- Decisions that look reversible but aren't (D.., adr/..)
- Permissions and gates: what needs a yes before acting

## Next step
- Skill: pm-<step> · First action: ...
```

## Phase record (`records/<YYYY-MM-DD>-<NN>-<step>.md`)

```md
# <Project>: <NN> <Step> record
Date(s): <start> to <end> · Written <date> · Status: done | shortened | skipped
People: <who took part, roles in their words> · Approved by: <name> (Dxx)

## Goal of this phase
One or two sentences.

## What was done
3–8 bullets, plain words.

## What it produced
- <file path>: <what it is>

## Decisions made
| ID | Decision | Approved by |
|---|---|---|

## Open questions raised
| ID | Question | Blocks | Who can answer |
|---|---|---|---|

## Shortened or skipped
What, why, and the decision row that records it (or "Nothing").

## Next
The next step, what it needs, and who starts it.
```
