# QREW Kits: free Claude plugins

Free, open-source (MIT) Claude plugins from QREW.

## AI Product Management

Turn an idea for a tool, dashboard or app into a working product with Claude. The plugin walks you through seven steps (Setup, Ground, Scope, Build, Audit, Record, Package), asks you to approve every step that matters, and saves a record of each phase. Details: [plugins/ai-product-management/README.md](plugins/ai-product-management/README.md).

**What's new in 0.4 (latest: 0.4.1):** works within the time you set. You say up front how many hours you want to put in, and whether you want the full or an optional lighter path; Claude fits the plan to that time, checks in about halfway, and asks at the end whether you got something you're happy with. Clearer questions (one at a time, plain words), a check of the product's numbers against figures you trust, mockups with realistic data, a conversation log every session, and plain resume steps in every handoff.

### Install

- **Claude desktop or claude.ai:** Customize → Plugins → Add → Add marketplace → enter `qrew-plugins/ai-product-management` → install **AI Product Management**.
- **Claude Code:** `/plugin marketplace add qrew-plugins/ai-product-management`, then `/plugin install ai-product-management@qrew-kits`.

Plugins need a paid Claude plan.

- **Claude Code, the quick way:** paste this into Claude Code and approve the commands it runs: "Add the plugin marketplace qrew-plugins/ai-product-management and install ai-product-management from it."
- **Download instead:** get the `.plugin` file from the latest [release](https://github.com/qrew-plugins/ai-product-management/releases) and use Customize → Plugins → Upload plugin.

### Report a problem or suggest an idea

Open an [issue](https://github.com/qrew-plugins/ai-product-management/issues/new/choose). This plugin is free and community-supported, with no guaranteed response time.

### Start

Connect a folder for your project and say "start a product project".

## Need the data behind it?

This plugin helps you build the tool. If the data it needs is spread across QuickBooks, spreadsheets and other apps, QREW's **AI-Ready Data Warehouse** brings it into one source of truth that your apps, dashboards and AI assistants can all use: read-only to your source systems, on your own cloud account.

[Book a free 30-minute data discovery call →](https://www.qrewtech.com/campaigns/ai-ready-data-warehouse#contact)

## License

MIT. See [LICENSE](LICENSE).
