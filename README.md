# Moon — Design System & Web Prototype

A design-to-code project built around the Moon Design System. The goal is a clean, production-quality e-commerce landing page, developed iteratively from Figma designs through to a finished prototype.

## Stack

- **React 19** + **TypeScript**
- **Vite 8** — dev server and build
- **Tailwind CSS v4** — configured via `@tailwindcss/vite`, theme tokens in `src/index.css`
- **Moon Design System** — colour tokens, radius scale, and DM Sans typography

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build
npm run preview   # preview the build locally
```

## Workflow

Design is done in Figma using the Moon DS file. Claude Code reads design context via the Figma MCP server and implements components against this repo's conventions. GitHub is the source of truth for code.

See `CLAUDE.md` for the full project context, working principles, and conventions.
