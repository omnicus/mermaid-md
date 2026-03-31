# Docs Structure Prompts

## Generic

Refactor this documentation project to follow the OpenCode docs information architecture with a strict two-level structure.

Goals:
- Organize the Markdown files and folders into a clean two-level docs structure
- Use only:
  - top-level standalone pages
  - top-level groups with direct child pages
- Avoid deep nested group hierarchies
- Make the file and folder structure easy for any docs system to present cleanly

Required structure:
- Put standalone top-level docs first
- Then put grouped sections after them
- Top-level pages should be things like `intro`, `config`, `providers`, `network`
- Groups should be things like `usage`, `configure`, `develop`
- If the repository currently has deeper nesting, flatten it into a two-level structure where possible

Naming rules:
- Use `README.md` for the top-level introduction page
- Use `overview` for a section landing page when a grouped section needs one
- Avoid duplicate patterns like `intro` and `overview` for the same section unless absolutely necessary
- Keep file and folder names consistent, predictable, and human-readable

Implementation expectations:
- Reorganize Markdown files and folders as needed
- Preserve content and links
- Update internal Markdown links after moves or renames
- Update any docs config only if it is necessary to keep links or structure working
- Prefer structural clarity over preserving an overly nested legacy layout

When done, provide:
- the final docs hierarchy
- files and folders moved or renamed
- any deep structures that were flattened
- any ambiguous cases and the choice you made

## Markdown Repo Version

Refactor this Markdown documentation repo into a strict two-level documentation structure inspired by OpenCode.

Requirements:
- Use only two levels in the docs file/folder structure:
  - top-level Markdown pages
  - top-level section folders containing direct child Markdown pages
- Avoid nested section folders inside other section folders unless there is no practical alternative
- If content is deeply nested today, flatten it into the nearest top-level section
- Keep the final structure simple enough that any docs renderer can expose it cleanly

Conventions:
- Root introduction page should be named `README.md`
- Root-level standalone docs should come before grouped sections conceptually
- Section landing pages should be named `overview` when needed
- A section should not contain both a duplicated intro page and an overview page serving the same purpose
- Within a section, `overview` should come first, then the remaining child pages

What to change:
- Rename files where needed to make labels clean and consistent
- Move files so the docs structure becomes simple and predictable
- Update internal Markdown links after moves or renames
- Remove or flatten unnecessary nested folders from the docs information architecture
- Keep content intact while improving the file/folder layout

Desired end state example:
- Intro
- Config
- Providers
- Network
- Enterprise
- Troubleshooting
- Usage/
  - Overview
  - Go
  - TUI
  - CLI
- Configure/
  - Overview
  - Tools
  - Rules
  - Agents
- Develop/
  - Overview
  - SDK
  - Server
  - Plugins

Deliverables:
- updated docs structure
- moved and renamed files list
- note any content that was flattened from deeper nesting
- note any places where the existing content made a strict two-level structure imperfect

## App Docs Version

Refactor this application's `/docs` content so the Markdown files and folders follow a strict two-level docs structure inspired by OpenCode.

Requirements:
- Use:
  - top-level standalone pages
  - top-level section folders with direct child pages
- Do not keep deep nested documentation folders unless absolutely necessary
- Flatten deeper content into the nearest top-level section when possible
- Preserve the product-specific content, but simplify how the docs are organized on disk

Naming rules:
- The top-level introduction page should be named `README.md`
- Section landing pages should be named `overview` when needed
- Do not create duplicate `overview` and intro pages for the same section purpose
- Keep naming consistent across sections

Implementation details:
- Update Markdown files and folders only as needed to create the right structure
- Preserve links by updating internal references after moves and renames
- Keep the structure intuitive for both humans and tools that may later render it
- Favor a clean docs hierarchy over preserving overly deep legacy folder nesting

When done, report:
- the resulting file and folder structure
- files changed, moved, or renamed
- any sections that had to be flattened
- any tradeoffs made to keep the structure practical
