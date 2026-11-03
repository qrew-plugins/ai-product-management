# Release checklist

Run this for every release. It takes about 10 minutes.

## Before
- [ ] Changes are made in `plugins/ai-product-management/` and logged (what changed and why).
- [ ] Bump `version` in `plugins/ai-product-management/.claude-plugin/plugin.json` (for example 0.3.2 → 0.3.3). Without a new version number, people who already installed it won't get the update. Don't add a version to `marketplace.json`.
- [ ] Add a line to the Version section of `plugins/ai-product-management/README.md`, and update "What's new" in the top-level README.
- [ ] Validate: `claude plugin validate .` and `claude plugin validate plugins/ai-product-management --strict`. Both must pass.
- [ ] Check nothing private is included: no client names or data, keys, passwords, internal notes or test folders. Everything in this repo is public.
- [ ] Icon is the full-resolution file (it can't be changed after the first directory submission).

## Release
- [ ] Commit with the message `AI Product Management v<version>` and push to `main`.
- [ ] Build the download file: zip the contents of `plugins/ai-product-management/` (not the folder itself) and name it `ai-product-management-v<version>.plugin`.
- [ ] On GitHub: Releases → Draft a new release → tag `v<version>` → title `AI Product Management v<version>` → 3–5 plain lines on what changed → attach the `.plugin` file → Publish.

## After
- [ ] Test a fresh install in the Claude app: Customize → Plugins → Add → Add marketplace → `qrew-plugins/ai-product-management`. Say "start a product project" in a new task with a folder connected and check the first questions appear.
- [ ] Upload the same `.plugin` file to QREW's organization library so the team stays on the same version.
- [ ] Skim open issues; close any this release fixed, with a link to the release.
