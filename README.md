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

- The design is intentionally desktop-forward with responsive behavior added for tablet and mobile.
- Shared styling values are centralized in `src/styles/tokens.ts`.
- The project uses App Router best practices and keeps section composition modular.
