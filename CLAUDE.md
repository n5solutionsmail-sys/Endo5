# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Endo5** is a B2B marketing website for **EndoTherm** — a heating efficiency additive by N5 Solutions (Munich, Germany). The site targets facility managers and property owners in German-speaking regions. All content is in **German (de_DE)**.

The product reduces heating costs by 10-15% and the website serves as a lead generation funnel: educate visitors, show case studies, and book consultations via Cal.com.

**Live site:** Hosted on GitHub Pages at `/Endo5` base path.

## IDE & Agent Skills

This repo is worked on with **Claude Code**, **Cursor**, and **Antigravity**. Skills are installed in `.claude/skills/`, `.cursor/skills/`, and `.agent/skills/`. **Firecrawl** is available for web scraping and research — use `npx firecrawl-cli` commands instead of built-in web tools.

Future integration goals: **n8n** (workflow automation/MCP) and **Firecrawl** for scraping cold email prospects.

## Commands

```bash
npm run dev        # Dev server at localhost:3000
npm run build      # Static export to ./out (for GitHub Pages)
npm run lint       # ESLint
```

No test framework is configured.

## Tech Stack

- **Next.js 16** (App Router) with static export in production
- **React 19**, **TypeScript 5**
- **Tailwind CSS 4** via PostCSS
- **Framer Motion** for animations
- **Vercel AI SDK** + **OpenAI GPT-4o** for the chatbot (`/api/chat`)
- **Cal.com Embed** for booking widget
- **Lucide React** for icons
- `clsx` + `tailwind-merge` via `lib/utils.ts` (`cn()` helper)

## Architecture

### Route Groups

- `app/(main)/` — Marketing site (Header, Footer, Chatbot in layout)
- `app/(legal)/` — Datenschutz (privacy) and Impressum (legal notice) pages
- `app/api/chat/` — Streaming OpenAI chat endpoint (POST, stateless)

### Sections-Based Homepage

The homepage (`app/(main)/page.tsx`) composes section components in order:
`Hero` → `Problem` → `Solution` → `Benefits` → `Testimonials` → `Contact` → `Newsletter`

All section components live in `components/sections/` and are `"use client"` (required for Framer Motion animations).

### Key Patterns

- **No state management library** — local `useState` only
- **Anchor navigation** — sections use `#benefits`, `#solution`, `#testimonials`, `#contact` with smooth scrolling
- **CSS design tokens** in `app/globals.css` — custom properties for colors, shadows, radii, transitions. Custom utility classes: `.container-custom`, `.section-padding`, `.gradient-text`, `.glass`, `.btn-*`, `.card`
- **Case studies data** in `data/caseStudies.ts` (4 studies with metrics)

## Deployment

Push to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`):
1. `npm ci` → `next build` → static export to `./out`
2. Deploy to GitHub Pages at `/Endo5` base path

The `next.config.ts` conditionally sets `output: "export"` and `basePath: "/Endo5"` only in production. Images are unoptimized (required for static export).

## Environment Variables

- `OPENAI_API_KEY` — Required for the `/api/chat` endpoint (GPT-4o chatbot)

## Important Notes

- The chatbot API route (`/api/chat`) only works in dev mode — it's excluded from the static export
- All user-facing text must be in **German**
- The chatbot system prompt is hardcoded in `app/api/chat/route.ts` with product-specific knowledge
- Image assets live in `public/` (logos, case studies, hero images)
- `.firecrawl/` directory is used for Firecrawl output — add to `.gitignore` if scraping locally
