# Accessibility bank: WCAG 2.2 (pinned)

The audit cites accessibility standards only from this file. Source: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation, 12 December 2024 edition: https://www.w3.org/TR/WCAG22/ . Rows were checked against that source on 2026-10-26. To add a criterion, read its W3C "Understanding" page and add a row with the link. Don't add rows from memory.

Target: **Level AA** (which includes Level A). AAA criteria are advice only.

| SC | Name | Level | Requirement (paraphrased) | Notes for auditors |
|---|---|---|---|---|
| 1.1.1 | Non-text Content | A | Images, icons and charts that carry meaning have a text alternative | Decorative images are exempt |
| 1.3.1 | Info and Relationships | A | Structure shown visually (headings, lists, tables, labels) is also in the markup | Tables need header cells |
| 1.3.4 | Orientation | AA | Content isn't locked to portrait or landscape unless one orientation is essential | Check phone width in both orientations. Essential examples from W3C: a bank check, a piano app, slides for a projector. Checked against w3.org/WAI/WCAG22/Understanding/orientation.html on 2026-11-03 |
| 1.4.1 | Use of Color | A | Color is not the only way information is shown | Status chips need text or an icon too |
| 1.4.3 | Contrast (Minimum) | AA | Text at least 4.5:1 against its background; large text at least 3:1 | Large: 24px regular or about 18.7px bold. Disabled and decorative text exempt |
| 1.4.4 | Resize Text | AA | Text can be zoomed to 200% without losing content or function | |
| 1.4.10 | Reflow | AA | Content works at 320 CSS px wide without scrolling in two directions | Data tables, maps and diagrams may scroll |
| 1.4.11 | Non-text Contrast | AA | Control boundaries, states, focus indicators and meaningful graphics at least 3:1 against neighbors | Use this, not 1.4.3, for chart bars, dots and borders |
| 1.4.12 | Text Spacing | AA | Nothing breaks when users increase line, paragraph, letter and word spacing | Watch fixed-height boxes |
| 1.4.13 | Content on Hover or Focus | AA | Tooltips and popovers can be dismissed, hovered and stay until dismissed | |
| 2.1.1 | Keyboard | A | Everything works with a keyboard | |
| 2.4.3 | Focus Order | A | Focus moves in an order that keeps meaning | Drawers and dialogs are the usual problem |
| 2.4.6 | Headings and Labels | AA | Headings and labels describe their topic or purpose | |
| 2.4.7 | Focus Visible | AA | Keyboard focus is visible | |
| 2.4.11 | Focus Not Obscured (Minimum) | AA | A focused item is not completely hidden by other content | Sticky headers and drawers |
| 2.5.8 | Target Size (Minimum) | AA | Pointer targets at least 24×24 CSS px | Exceptions: enough spacing (a 24px circle on each small target doesn't overlap another target or circle), an equivalent control elsewhere, inline in text, browser default, essential. Check spacing before calling a failure |
| 3.3.1 | Error Identification | A | Input errors are identified and described in text | |
| 3.3.2 | Labels or Instructions | A | Inputs have labels or instructions | |
| 4.1.2 | Name, Role, Value | A | Controls expose a name, role and state to assistive technology | Tabs need a selected state; toggles need a pressed state |
| 4.1.3 | Status Messages | AA | Status messages (saved, loading, errors) are announced without moving focus | |

Advice only (AAA): 2.5.5 Target Size (Enhanced), 44×44 CSS px; 2.4.13 Focus Appearance.

Note: 4.1.1 Parsing was removed in WCAG 2.2.

## What tools can and can't settle

- Automated checks (axe-core) find a share of issues, not all. Deque's analysis of roughly 2,000 audits found automated testing identified about 57% of issues by volume: https://www.deque.com/blog/automated-testing-study-identifies-57-percent-of-digital-accessibility-issues . Everything else is a `judgment` finding.
- The harness flags every target under 24px. That list is candidates only; apply the spacing exception before reporting.
- Some flags come from the hosting platform's wrapper, not the product. Record them as platform-owned in the profile and exclude them.
