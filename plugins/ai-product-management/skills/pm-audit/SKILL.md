---
name: pm-audit
description: Step 04 of the AI Product Management workflow, after Build. Use when the build has produced something people can use (the first usable screen or page), after a fix batch, before release, or when someone asks to "audit it", "review the UX", "check accessibility", "QA the design", or "re-audit after the last build". Gathers evidence, verifies every finding with an independent verifier, checks each fix against the project's invariants, and writes a findings ledger with build briefs grouped into batches. Never edits the product.
---

# Step 04: Audit

Check what the build produced, with evidence, before it counts as done. The auditor never edits the product. Its output is a ledger of verified findings and briefs that `pm-build` can pick up.

**Never before Build.** If `apm/_index.md` shows no shipped batch yet, don't audit. Say so, show the status map, and route: on a starting-point B project, problems in what exists today go into `apm/sources/` and Ground or Scope, not into an audit. Offer `pm-start` to pick the right step.

Run it when the build first produces something people can use (the first usable screen or page), after every fix batch (re-audit), and before release. A product with nothing for people to look at (for example a script or a scheduled job) can skip it: record the skip and the reason as a decision row, never skip silently. On the lighter path, the audit is optional: offer it once, when the first usable screen or page ships, as a plain question ("Would you like Claude to check what's been built for problems with usability and accessibility before going further?"); a no is recorded as a decision row (skipped by choice).

## Phase briefing (always first)

Before the first question or action in this step, brief the person, following `../../PHASE-BRIEFING.md` (at the plugin root). It covers the full and short versions, the check-in, and what to do when someone asks to go shorter. For this step:
- **Goal:** Check what the build produced, with evidence, before it counts as done.
- **What you'll ask:** Few questions: access to the product and where it is used. Claude does the checking; you review the verified findings and decide which become work.
- **Typical time:** 15–30 min of your time to review findings. The checking itself runs separately.
- **What they'll have at the end:** A ledger of verified findings and build briefs for the ones you approve.

Wait for a yes before starting, unless the person already asked to start this step; then go straight into the first question ("The briefing" in `../../PHASE-BRIEFING.md`). Open with the one-line status. During the step, give a progress check-in with the status map about every 30 minutes of working time (see "Progress check-ins" in `../../PHASE-BRIEFING.md`). When the step finishes, write its phase record automatically (see "Phase record" in the same file). If someone asks to skip or shorten this step, push back once, offer to keep going, come back later, or go shorter with the skipped items recorded, and then respect their choice. Approval gates never shorten.

## 0. Load

Read, in order: `apm/PROFILE.md` (jobs, invariants, product type, test setup), `apm/CONTEXT.md`, active rows of `apm/decisions.csv`, the scope doc(s) in `apm/scope/` and the approved mockup in `apm/scope/mockups/`, `apm/_index.md` and the latest run summary, `apm/audit/LEDGER.md` if it exists, everything in `apm/adr/` and `apm/audit/out-of-scope/`, and the banks listed in the profile.

Then read the live product itself (its source, its published page, or the file). If what you find contradicts the profile (a tab, a data source, a connector the profile doesn't mention), update the profile first, add a decision row recording the change, and tell the user what changed. Profiles and handoffs go stale; the product is the truth.

## 1. Gather evidence

Use the test setup recorded in the profile. The setups are described in this plugin's `skills/pm-build/references/build-loop.md` (from this skill's folder: `../pm-build/references/build-loop.md`), section "Test setup by product type". Save evidence in `apm/runs/<date>-audit/`; if that folder exists, add `-2`, `-3` and so on.
- **Browser-rendered products:** run `node ~/pm-harness/check-page.js <product> <this audit's runs folder>/page-check`. If `~/pm-harness` isn't set up, follow `../pm-build/references/harness/README.md` first. It checks 1366, 390 and 320 px widths in light and dark, and saves screenshots, an accessibility report (axe-core) and layout checks. Read the screenshots.
- **Other products:** walk each job from the profile using the checks for that product type, and save what you observe.

Check each state a user can meet: loading, empty, error, missing data or connector, stale data, a failed save.

## 2. Find candidates

Go job by job. Look for: a screen that doesn't match the approved look-and-feel mockup (`apm/scope/mockups/`, decision rows), a job that can't be finished, misleading numbers or states, friction on frequent jobs, unclear hierarchy, keyboard and focus problems, and anything the accessibility report flags. Write every candidate in the glossary's terms.

Drop candidates that match `out-of-scope/`, a decision note, or a decision row. Mention a dropped one only if the friction looks serious enough to reopen the decision; then raise it as an open question.

## 3. Verify (what makes the audit trustworthy)

Every candidate needs evidence of one kind:
- **measured:** tool output; any number re-computed independently.
- **code:** the exact function, selector, formula or setting, confirmed by searching the source.
- **observed:** a screenshot or recorded output, with its path.
- **judgment:** a heuristic call. Allowed, labeled as judgment, and never rated above Medium.

Cite standards only from the banks pinned in the profile's Banks table (the copies in `apm/banks/`; if none are pinned, pin `references/wcag-reference.md` and `references/usability-heuristics.md` first). Never cite a criterion from memory.

Then launch an independent verifier subagent with the brief in `references/verifier-brief.md`. Its job is to disprove each candidate. Drop what it disproves and list those under "Dropped by verifier". Mark what it can't settle as `needs-info`.

## 4. Check the fix against the invariants

Tag each surviving finding with the smallest change that fixes it: `style`, `layout`, `content`, `behavior`, or `data-or-access`. Check the fix against the profile's invariants. A fix that would break one goes to the batch approver as a decision, with the conflict stated; never quietly weaken the fix. List what each fix must not change.

## 5. Triage and write briefs

Use `references/ledger-and-briefs.md` for states, severity and the brief format. Group the briefs that Claude can finish into batches of at most 5, same change type, no shared parts. List the ones needing a person separately, one line each.

## 6. Report and stop

Update `apm/audit/LEDGER.md`, write `SUMMARY.md` in this audit's runs folder, add a `log.md` line and update `_index.md`. Set the next step: 02 Scope if the audit raised decisions only people can make; 03 Build for the proposed fix batch if there is one; if nothing survived verification, the next planned batch in 03 Build, or after a pre-release audit, publishing (03 Build, step 8) and then 05 Record. Update the Steps table and **Last audit** in `_index.md`. Tell the user briefly: what's new, what regressed, what's fixed, the proposed next batch, and the decisions only they can make. Don't build. Batches go to `pm-build` only after the batch approver named in `PROFILE.md` approves them.

## Re-audit after a build

Repeat steps 0 and 1. Then run two checks in parallel with separate subagents: **Spec** (did the build meet each brief's acceptance criteria?) and **Contract** (did it break an invariant or change anything outside the briefs?). Report them separately and move each brief to `verified-fixed` or `regressed`.

## Rules

- Accessibility target is WCAG 2.2 Level AA. AAA items are advice only and never above Low.
- Taste is never a Blocker. "Looks dated" is not a finding; "the main action for job 2 takes four clicks" is.
- Never mark as ready for Claude a fix that adds a library, a new connector or permission, a data-model change, or a write to a system of record. Those need a person.
- When the owner rejects a finding for a lasting reason, record it in `out-of-scope/` and offer a decision note.
