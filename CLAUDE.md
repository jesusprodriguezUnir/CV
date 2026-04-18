# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build static site to ./dist/
npm run preview   # Preview production build locally
```

No linting or test suite configured.

## Architecture

Static CV/portfolio site built with **Astro 6.1.8**. All content is data-driven from a single source:

**Data flow:**
1. `src/data/cv.js` — single source of truth for all CV content (personal info, experience, skills, education, languages, certifications)
2. `src/pages/index.astro` — imports `cvData`, passes props to components, defines the 2-column grid layout (7fr/3fr on desktop, collapses on mobile)
3. `src/components/` — individual UI sections (Header, Experience, Skills, FloatingActions)
4. `src/layouts/Layout.astro` — base HTML template with IBM Plex Mono font, theme detection from localStorage

**To update CV content**: only edit `src/data/cv.js`. No component changes needed.

## Design System

Global CSS variables in `src/styles/global.css` control theming. Two themes (light default, dark via `[data-theme="dark"]` on `<html>`), toggled client-side by `FloatingActions.astro` with localStorage persistence.

Key classes: `.glass` (glassmorphism card style), `.section-title`, `.tag` (skill/tech pill badges).

Responsive breakpoints: 950px (2-col → 1-col grid), 850px (header reflow), 600px (mobile floating buttons).

Extensive `@media print` rules in both global.css and component `<style>` blocks optimize layout for PDF export via the print button.

## Deployment

Deployed to GitHub Pages from the `main` branch. Manual process — push changes and GitHub Pages rebuilds automatically.
