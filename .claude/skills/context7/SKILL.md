---
name: Library Documentation Lookup
description: Fetch up-to-date documentation and code examples for any library or framework using Context7. Use when writing code with external libraries, setting up tools, configuring frameworks, or needing current API documentation. Triggers on mentions of library names, npm packages, framework setup, API docs, or code generation requests.
allowed-tools: mcp__context7__resolve-library-id, mcp__context7__query-docs
---

# Context7 - Library Documentation

Always use Context7 MCP tools automatically when generating code, performing setup, or needing library documentation. **Do not wait for explicit user requests** - proactively fetch documentation when working with external libraries.

## When to Use Context7

Use Context7 automatically in these scenarios:

- **Code Generation**: Writing code that uses external libraries or frameworks
- **Setup & Configuration**: Setting up tools, libraries, or frameworks
- **API Documentation**: Needing current API documentation for any library
- **Best Practices**: Finding up-to-date examples and patterns

## How to Use

Follow this two-step process:

### 1. Resolve Library ID

Use `mcp__context7__resolve-library-id`:
- Pass the `libraryName` (e.g., "next.js", "framer-motion", "tailwindcss")
- Pass the `query` describing what you need (used to rank results by relevance)
- Returns a Context7-compatible library ID (e.g., `/vercel/next.js`)

### 2. Fetch Documentation

Use `mcp__context7__query-docs`:
- Pass the `libraryId` from step 1
- Pass the `query` describing the specific topic or question
- Returns current, version-specific documentation and code examples

### 3. Apply Documentation

Use the fetched documentation to provide accurate, up-to-date code and guidance.

## Installation

To add the Context7 MCP server to this project, run:

```bash
claude mcp add context7 -- npx -y @upstash/context7-mcp@latest
```

Or add to `.mcp.json` / Claude Desktop config:

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    }
  }
}
```

## Important Notes

- Context7 works without an API key (with rate limits)
- Set `CONTEXT7_API_KEY` environment variable for higher rate limits
- Always fetch documentation before generating code with external libraries
- Prefer Context7 over relying on training data for library-specific code
- Relevant libraries for this project: `next.js`, `react`, `tailwindcss`, `framer-motion`, `typescript`
