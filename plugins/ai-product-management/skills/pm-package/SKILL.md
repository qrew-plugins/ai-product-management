---
name: pm-package
description: Step 06 of the AI Product Management workflow. Use when a team has repeated the same workflow enough to make it reusable, or says "turn this into a skill", "package how we did this", "make this repeatable for the team", or "write a skill from this project". Drafts reusable skills from a project's own records, keeping project specifics in a profile so the skill works for the next project.
---

# Step 06: Package

When a way of working has proven itself across batches or projects, turn it into a skill the team can reuse. The project's records are the raw material: decisions show the rules, run summaries show the steps, and reviewer findings show the mistakes to guard against.

## Phase briefing (always first)

Before the first question or action in this step, brief the person, following `../../PHASE-BRIEFING.md` (at the plugin root). It covers the full and short versions, the check-in, and what to do when someone asks to go shorter. For this step:
- **Goal:** Turn a workflow that has proven itself into a reusable skill.
- **What you'll ask:** The workflow's name in your words, what triggers it and what it produces, a review of the steps found in your records, and feedback on the draft and its test prompts.
- **Typical time:** 15–30 min, with one revision round.
- **What they'll have at the end:** A draft skill with test prompts, ready for your team to try.

Wait for a yes before starting, unless the person already asked to start this step; then go straight into the first question ("The briefing" in `../../PHASE-BRIEFING.md`). Open with the one-line status. During the step, give a progress check-in with the status map about every 30 minutes of working time (see "Progress check-ins" in `../../PHASE-BRIEFING.md`). When the step finishes, write its phase record automatically (see "Phase record" in the same file). If someone asks to skip or shorten this step, push back once, offer to keep going, come back later, or go shorter with the skipped items recorded, and then respect their choice. Approval gates never shorten.

## When it's ready

Package only a workflow that has run at least twice with the same steps, or that the owner names as the team's standard. One-off work stays in the project.

## Steps

1. **Name the workflow** in the team's words and confirm what triggers it and what it produces.
2. **Collect evidence** from `apm/`: the run summaries where it ran, the decisions that shaped it, the reviewer findings it kept hitting, and any runbook the team wrote. Cite file paths in your notes.
3. **Separate the general from the specific.** Steps, checks and gates are general and go in the skill. Names, tools, systems, record IDs and thresholds are specific and go in a profile the skill reads, the way `apm/PROFILE.md` works.
4. **Draft the skill** using `references/skill-outline.md`. Write instructions for Claude in the imperative. Put long reference material in a `references/` folder.
5. **Write two or three test prompts** a teammate would really type, with what a good result looks like for each. If a skill-testing tool is available, run them; otherwise walk through one by hand and note the result.
6. **Review with the owner.** Show the draft and the test results. Ask what's wrong; expect one revision.
7. **Record:** add a decision row naming the new skill and where it lives, and a `log.md` line.

## Gates in this step

- The owner approves the skill before anyone else is told to use it.
- No customer or business records, credentials or personal data in a skill or its references.
- Write the skill in your own words. Don't copy third-party text into a skill unless its license allows it and the owner approves.
