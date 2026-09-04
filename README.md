# zadenconnell.com

Personal portfolio and résumé, built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com) and deployed to Vercel.

All content comes from a single [`cv.json`](./cv.json) file that follows the
[JSON Resume](https://jsonresume.org/schema/) schema, so updating the site
usually means editing that file and nothing else.

## Commands

| Command           | Action                                                 |
| :---------------- | :----------------------------------------------------- |
| `bun install`     | Install dependencies                                   |
| `bun run dev`     | Start the dev server at `localhost:4321`               |
| `bun run build`   | Type-check with `astro check`, then build to `./dist/` |
| `bun run preview` | Preview the production build locally                   |
| `bun run check`   | Type-check only                                        |
| `bun run format`  | Format everything with Prettier                        |

## Project structure

```text
cv.json                     All résumé content (JSON Resume schema + extras)
src/
├── components/
│   ├── sections/           One component per page section
│   ├── ui/                 Small shared pieces (Tag, TechIcon, ResumeEntry…)
│   ├── BackgroundDecoration.astro
│   ├── CommandPalette.astro       ⌘K palette
│   ├── CommandPaletteButton.astro
│   ├── ContactLinks.astro
│   ├── CopyEmailButton.astro
│   ├── Section.astro              Titled section wrapper
│   └── ThemeSwitch.astro          System / light / dark segmented control
├── icons/                  Single-purpose SVG components
├── layouts/Layout.astro    <head>, theme bootstrap, scroll reveal, print hooks
├── lib/
│   ├── cv.ts               Typed access to cv.json
│   ├── dates.ts            Date-range formatting
│   ├── palette-icons.ts    Raw SVG strings for the command palette
│   └── theme.ts            Theme preference storage and application
├── pages/index.astro       The single page
├── styles/global.css       Tailwind entry point + design tokens
└── types.ts                Shape of cv.json
```

## Theming

Colours are CSS custom properties holding bare `R, G, B` triplets, defined in
`src/styles/global.css` and exposed to Tailwind as a single `skin` palette
(`bg-skin-fill`, `text-skin-muted`, `border-skin-border`, `text-skin-hue`, …).

- **Light / dark** is chosen by the visitor and stored in `localStorage`. An
  inline script in `<head>` applies it before first paint, so there is no flash
  of the wrong theme.
- **Alternate palettes** (`blue`, `red`, `green`, `cyber`) are selected with
  `basics.theme` in `cv.json`, which sets `data-theme` on `<html>`.

## Printing

`Cmd/Ctrl + P` — or the "Open resume (PDF)" command in the palette — produces a
condensed one-page résumé. Printing always uses a light, ink-friendly palette
and expands every collapsed "Show more" section, in CSS as well as via
`beforeprint`, so headless PDF generation gets the same result.

## Notes

- The site is fully static (`output: "static"`); the Vercel adapter is used for
  Web Analytics and Speed Insights.
- Interactions (theme switch, copy-to-clipboard, disclosures, command palette)
  are plain TypeScript with no client framework.
- All motion is gated behind `prefers-reduced-motion`.
