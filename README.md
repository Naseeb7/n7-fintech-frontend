# N7 Fintech Frontend

Premium fintech SaaS landing page built with Next.js App Router, TypeScript, and Tailwind CSS v4.

## Overview

This project implements a responsive marketing site for a fintech product, with a strong dark enterprise visual language, reusable layout primitives, and section-based composition.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- `clsx`
- `tailwind-merge`
- `lucide-react`

## Project Structure

- `app/` - App Router entry points and global styles
- `src/components/layout/` - reusable layout primitives
- `src/components/ui/` - shared UI primitives
- `src/components/sections/` - landing page sections
- `src/styles/` - centralized design tokens
- `public/sections/` - image and SVG assets used across the page

## Architecture Decisions

- App Router is used for all routing and page composition, keeping the project aligned with modern Next.js structure.
- Shared layout and UI primitives are centralized in `src/components/layout` and `src/components/ui` to avoid repeated styling patterns.
- Design tokens in `src/styles/tokens.ts` act as the source of truth for spacing, typography, surfaces, and repeated visual values.
- Section components are kept modular so each landing page block can be edited independently without affecting the rest of the page.
- `next/image` is used for all major imagery to keep asset handling efficient and predictable.
- Responsive behavior is handled with Tailwind breakpoint utilities, while desktop styling remains intentional and preserved where needed.

## Deployment

Live site:

- `https://your-deployed-url-here.com`

Recommended deployment platform:

- Vercel

## Implementation Notes

- The page is intentionally desktop-forward, with tablet and mobile responsiveness added on top of the existing desktop design.
- The navbar uses a mobile menu pattern and preserves the desktop navigation layout at larger breakpoints.
- The case studies section is implemented as a simple client-side carousel with three visible states.
- New assets are stored under `public/sections/` and wired directly into the relevant sections.

## Features

- Premium fintech-inspired landing page
- Responsive navbar with mobile menu
- Hero, solutions, core banking, feature breakdown, insights, case studies, CTA banners, footer
- Shared design tokens for spacing, color, typography, and surfaces
- Reusable primitives for buttons, cards, headings, text, container, and section wrappers
- Optimized local image handling with `next/image`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Scripts

- `npm run dev` - start the local dev server
- `npm run build` - build the production app
- `npm run start` - run the production build
- `npm run lint` - run ESLint

## Notes

- Shared styling values are centralized in `src/styles/tokens.ts`.
- The project uses App Router best practices and keeps section composition modular.
