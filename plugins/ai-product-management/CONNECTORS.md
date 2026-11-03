# Connectors

The workflow runs on plain files in a project folder, so it works with no connectors at all. Connectors make it faster: Claude can read the real boards, sheets and data during Ground and Scope, and track work and hours during Build.

Skills refer to tools by category. Record the actual tool for each category in the project profile's "Systems and data" table during setup.

| Category | Placeholder | Used for | Examples |
|---|---|---|---|
| Project tracker | `~~project tracker` | Reading the current board during Ground; optionally creating a work item for each approved batch (pm-build) | Trello, Jira, Asana, Linear, Monday |
| Time tracker | `~~time tracker` | Actual hours against plan budgets | Harvest, Toggl, Clockify, your PSA |
| Document store | `~~document store` | Reading process documents and grounding docs; publishing records | Google Drive, SharePoint, Notion |
| Data source | `~~data source` | Reading the data the product shows | Your database or warehouse, QuickBooks, a field-service system |
| Chat | `~~chat` | Optional: posting a batch summary to the team (pm-record) | Google Chat, Slack, Microsoft Teams |

Rules that hold for every connector:
- Each new connector is approved before first use by the access approver named in the project profile, with the reason and the decision it serves.
- Systems of record are read-only. A write is planned in an approved batch and then needs a yes for each write.
- Live tests run only on the test record named in the profile, or one the approver names at the time.
