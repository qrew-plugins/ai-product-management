# Slicing a scope

A slice is the thinnest piece of the improvement that someone could use on its own. Slices are built one after another; batches (step 03) are cut from slices.

## Good slices
- Go end to end: real data in, something a user can see or use out. A slice that is "just the data layer" is not a slice.
- Fit in one or a few batches.
- Have acceptance criteria a test or a person can check: "Job margin shows for every job invoiced last month, and matches the accounting report within $1."
- For anything people look at, include look-and-feel criteria from the approved mockup (which chart, which status tile, what's on the master board), not only functional ones.
- Check every acceptance criterion and new invariant against the pinned banks in the profile (accessibility, usability, SOPs). Add bank criteria the slice obviously needs (for example contrast, keyboard use and target size for a screen), cite them by ID, and never contradict a bank without a decision row.
- Name the decisions they rest on (D-IDs). If a slice rests on an open question, it waits or a decision is made to build around it.

## Order
1. The slice that delivers the most value on its own goes first.
2. Then slices that unlock others.
3. Polish and nice-to-haves last.

Use the project plan's MoSCoW labels (Must, Should, Could, Won't this time) when the owner thinks in those terms. Won't-this-time items go in the profile's Out of scope with a decision ID.

## Who finishes it
Mark each slice:
- **Claude can finish once approved:** the work and its checks are fully specified.
- **Needs a person:** a taste or judgment call, a live test on real data, an outside party, or a write to a system of record.

## Scope doc template (`scope/<improvement>.md`)

```md
# <Improvement>: scope
Date · Decisions: Dxx–Dyy · Open questions: Qxx

## Goal
One paragraph, owner's words.

## Slices
### SL1: <name>  (Must · Claude can finish once approved)
- What the user can do when it ships
- Acceptance criteria (numbered, checkable)
- Rests on: D..
- Blocked by: Q.. or none

### SL2 ...

## Out of scope
- Item (Dxx)
```
