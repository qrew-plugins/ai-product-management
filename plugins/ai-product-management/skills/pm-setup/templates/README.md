# {{PROJECT}}: project workspace

Created {{DATE}} with the AI Product Management workflow. Every step reads and writes here.

| Path | What it holds | Written by |
|---|---|---|
| `_index.md` | Current status, next step, next batch, time used against the time limit | Every step |
| `log.md` | One line per session or batch, newest last | Every step |
| `PROFILE.md` | The project's people, jobs, tools, rules, gates and banks | `pm-setup`, then any step that learns something durable |
| `CONTEXT.md` | Glossary: the project's own words and what they mean | `pm-ground`, `pm-scope` |
| `decisions.csv` | Numbered decisions. Changed only by adding a new row that supersedes the old one; the old row's status becomes `superseded` | `pm-scope`, any step |
| `open-questions.csv` | Questions only a person can answer, and what each blocks | Any step |
| `journey.md` | How the work happens today, stage by stage | `pm-ground` |
| `scope/` | Scope documents, one per slice; `mockups/` holds approved look-and-feel mockups | `pm-scope` |
| `adr/` | Decision notes for choices that are hard to reverse | `pm-scope` |
| `plan/` | Batch plan, project plan, change orders, risks (RAID) | `pm-build` |
| `audit/` | Findings ledger and out-of-scope notes | `pm-audit` |
| `runs/` | One folder per batch (and per audit: `<date>-audit`) with its summary and evidence | `pm-build`, `pm-audit`, `pm-record` |
| `handoffs/` | Session handoff documents, each ending with plain steps to resume | `pm-record` |
| `conversation-logs/` | One log per session: each question and answer in words, plus what was decided and changed | `pm-record` |
| `records/` | Phase records, written automatically when each phase finishes; never edited afterwards | Every step |
| `banks/` | Pinned reference material the skills cite | `pm-setup` |
| `sources/` | Material showing what exists today (docs, screenshots, exports, code), with `_inventory.md` and `_summary.md` | `pm-setup`, any step that receives new material |

Rules: never delete a file here. Supersede a decision with a new row and mark the old one `superseded`. Move anything obsolete into a folder named `_archive/`.
