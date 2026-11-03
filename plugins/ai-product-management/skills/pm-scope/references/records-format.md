# Record formats

All records live in `apm/`. CSV files use a header row, standard quoting (RFC 4180: wrap a value in double quotes if it contains a comma, a double quote or a line break, and write a double quote inside it as two), and YYYY-MM-DD dates.

## decisions.csv

`id,date,area,decision,why,decided_by,source,supersedes,status`

- `id`: D01, D02 … in order. Never reused.
- `area`: the improvement, slice or topic, in the project's words.
- `decision`: one sentence, testable where possible.
- `why`: the reason given, in the decider's words.
- `decided_by`: a name or role from the profile.
- `source`: where it was decided (session date, meeting, document).
- `supersedes`: the ID this replaces, or blank.
- `status`: `active` or `superseded`. When a new row supersedes an old one, change only the old row's `status` to `superseded`. That is the one edit allowed.

Rules: one decision per row. Never delete a row. A build may only rely on `active` rows.

## open-questions.csv

`id,date,question,why_it_matters,blocks,owner,status,answer,decision_id`

- `id`: Q01, Q02 …
- `blocks`: the slice or batch that can't proceed without the answer, or `nothing yet`.
- `owner`: who can answer it.
- `status`: `open`, `answered`, or `parked` (consciously deferred, with a note in `answer`).
- When answered, write the answer, add the matching decision row, and put its ID in `decision_id`.

Before planning a batch, filter `blocks` for the batch ID and for the slice it comes from. Answer those first, or record a decision to build around them.

## CONTEXT.md (glossary)

One row per term: term, what it means, what it is not to be confused with, status (`adopted` or `proposed`), decision ID if a decision fixed it. Proposed terms are not used in documents until adopted.

## Decision notes (adr/)

For choices that are expensive to reverse. File name: `NNNN-short-title.md`.

```md
# NNNN: <title>
Date: YYYY-MM-DD · Decision: Dxx · Status: accepted | replaced by NNNN

## Context
What forced the choice, in the project's terms.

## Decision
What was chosen.

## Options considered
Each option with its main cost.

## Consequences
What this makes easier, what it makes harder, what would trigger revisiting it.
```

Audit and build steps must not propose undoing a decision note without raising it to the owner as a question first.
