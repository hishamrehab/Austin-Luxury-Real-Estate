# Austin Luxury Realty

A marketing-style website for a luxury real estate brand in Austin, Texas. It showcases listings, neighborhoods, agents, buyer/seller flows, and contact touchpoints with a light/dark theme.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 8** for dev server and production builds
- **React Router 7** for client-side routing
- **Tailwind CSS 4** (with `@tailwindcss/vite`) and custom theme tokens (sage, charcoal)
- **Radix UI** primitives (e.g. dialogs)
- **Lucide React** icons, **Motion** for section animations, **Geist** variable font

## Getting started

Requirements: **Node.js** (LTS recommended) and **npm**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`).

### Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start dev server with HMR            |
| `npm run build`   | Typecheck (`tsc -b`) + Vite production build |
| `npm run preview` | Serve the `dist` output locally      |
| `npm run lint`    | Run ESLint                           |

## Project structure

```
src/
├── App.tsx                 # Route table
├── index.css               # Tailwind + theme + fonts
├── components/
│   ├── brand/              # Logo, etc.
│   └── layout/             # Header, footer, scroll-to-top
└── pages/
    ├── home/               # Landing + featured properties (subset of listings)
    ├── listings/           # Catalog, filters, detail pages, listing images
    ├── neighborhoods/      # Grid, detail, comparison, map sections
    ├── agents/             # Directory, contact dialog, testimonials
    ├── sell/               # Seller journey + valuation form
    ├── about/              # Story, values, leadership
    ├── contact/            # Offices, map, consultation
    └── PlaceholderPage.tsx # Buy, blog, legal stubs
```

Path alias: `@/` → `src/` (see `vite.config.ts`).

## Features (high level)

- **Listings**: Filter/sort, paginated “show more” with loading state, rich listing detail pages with gallery and related properties.
- **Neighborhoods**: Filterable community grid and per-neighborhood detail routes.
- **Agents**: Search/filter directory and modal contact form.
- **Global UX**: Scroll restoration to top on route change and a floating “back to top” control (`ScrollToTop`, `ScrollToTopButton` in `RootLayout`).
- **Theming**: `html` class `dark` toggled from the header; `color-scheme` set in `index.css`.

## Data and assets

Most content is **static TypeScript data** (e.g. `home/data.ts`, `agents/agentsData.ts`, `neighborhoods/neighborhoodsData.ts`, `listings/listingsDetailData.ts`). Listing photography uses curated **Unsplash** URLs in `listings/listingImageUrls.ts` where noted.

## Building for production

```bash
npm run build
```

Output is written to `dist/`. Deploy `dist/` to any static host (Netlify, Vercel, S3 + CloudFront, etc.) configured for SPA fallback to `index.html` on unknown paths.

## License

Private project (`"private": true` in `package.json`).
