# {{PROJECT}}: project profile

Last updated {{DATE}}. The skills read this file first. Keep it current; when something here changes, add a decision row that says so.

## Problem
<!-- One sentence, in the owner's words. -->
- **How we'll know it worked:** <!-- From Ground. Path A: "What you're hoping for" (a first guess). Path B: outcomes in place + ones to improve on. -->

## People
| Role (their words) | Name | Part they play | Approves |
|---|---|---|---|
| Problem owner | | Runs the workflow, answers questions | All gates unless listed below |

## Users and jobs
| Job | Who does it | How often | What "done" looks like |
|---|---|---|---|

## Product
- **Starting point:** <!-- A. Starting fresh / B. Improving what exists (asked by pm-start) -->
- **Version names:** <!-- starting point B only: what the version in use today is called, and what the new one will be called -->
- **Time limit:** <!-- hours of the owner's own time, from setup to a first working version (asked by pm-start). Every step fits the plan to it -->
- **Path:** <!-- Full / Lighter (asked by pm-start). Lighter-path caps: PHASE-BRIEFING.md, "The lighter path" -->
- **Type:** <!-- dashboard or report / web page or app / spreadsheet model / automation or script / document / other -->
- **Where it lives and how it is published:**
- **Test setup:** <!-- from pm-build references/build-loop.md -->
- **Test record for live tests:** <!-- named by the owner; none until named -->
- **Phase records folder:** apm/records/ <!-- default; can be a shared folder the owner names. A record is written automatically when each phase finishes -->
- **Build path:** <!-- A. Prototype first (clickable Claude artifact, then MVP) / B. Straight to the MVP (asked by pm-start) -->
- **Build platform:** <!-- decided in 02 Scope (decision ID); on build path A it can wait until after the prototype -->
- **Cost updates:** <!-- yes / no (asked by pm-start). No or blank: never mention cost unless asked -->
- **How Claude is paid for:** <!-- only when cost updates = yes: subscription (Pro / Max / Team / Enterprise seat) / usage-based or API / not sure -->

## Numbers
<!-- From 01 Ground, only when the product shows or calculates numbers. Build checks its numbers against the known figures before building more screens. -->

### How the numbers are defined
| Number | Unit | How it's worked out | Period, cutoff and time zone (and whether a period is labelled by its start or end date) | Comes from | Source that wins if two disagree |
|---|---|---|---|---|---|

### Known figures to check against
| Figure | Value | Period | Source | Confirmed by |
|---|---|---|---|---|

## Tools and resources
| Resource | What it is (code, repo, platform, account, integration) | Allowed for this build? | Notes |
|---|---|---|---|
<!-- From setup: what already exists or is required, and what's off-limits. New tools and integrations are decided in Scope and need gate 2 (access) before first use. -->

## Systems and data
| System or source | What we use from it | Access for this project | Connector |
|---|---|---|---|
<!-- Default access: read-only. A write to a system of record is planned in an approved batch and then needs a yes for each write (gate 4). -->

## Gates
| Gate | Who approves | Notes |
|---|---|---|
| Batch approval | Problem owner | |
| New access (connector, tool, permission, data source) | Problem owner | |
| Live test on real data | Problem owner | Only on the test record above; any other record is named at the time |
| Delete or write-back (including publishing over something in use) | Problem owner | A yes for each action, even inside an approved batch |
| Open questions | Whoever the question names | |
| "Why is this here?" | Anyone | Claude answers with the decision ID and date |

## Invariants (must not break)
<!-- Numbered. Each one is checked in every build batch. Example: "I1. Totals match the source system's report for the same period." -->

## Platform-owned exclusions
<!-- Issues that belong to the hosting platform or a vendor, not the product (for example, a wrapper page the product can't change). Audits exclude these. One line each, with how it was confirmed. -->

## Banks
| Bank | Source | Pinned | Used by |
|---|---|---|---|

## Out of scope
<!-- Things decided not to do, with the decision ID. -->
