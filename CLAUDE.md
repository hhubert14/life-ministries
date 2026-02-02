# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 web application for Life Ministries, located in the `web/` subdirectory. The project uses the App Router architecture with TypeScript, Tailwind CSS v4, and React 19.

## Development Commands

All commands should be run from the `web/` directory:

```bash
cd web

# Development
npm run dev          # Start development server at http://localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint on the codebase
```

## Architecture

### App Router Structure

This project uses Next.js App Router (not Pages Router). All routes live under `src/app/`:
- `src/app/layout.tsx` - Root layout with metadata and font configuration
- `src/app/page.tsx` - Home page component
- Server Components are the default; mark with `"use client"` only when needed

### Styling System

- **Tailwind CSS v4** with PostCSS integration
- Global styles in `src/app/globals.css` using `@theme inline` syntax
- CSS custom properties for theme colors (`--background`, `--foreground`)
- System preference-based dark mode via `@media (prefers-color-scheme: dark)`
- Responsive design with Tailwind breakpoints (`sm:`, `md:`, etc.)

### TypeScript Configuration

- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Target: ES2017

### Font Optimization

Uses Next.js Font optimization with Geist Sans and Geist Mono from Google Fonts. Font variables are exposed via CSS custom properties (`--font-geist-sans`, `--font-geist-mono`).

## Project State

This is a newly bootstrapped project. No custom components, utilities, or shared libraries exist yet. The foundation includes:
- TypeScript with strict configuration
- Tailwind CSS v4 with dark mode support
- ESLint 9+ with Next.js presets (flat config format)
- Next.js Image component for optimized images

## Configuration Files

- `next.config.ts` - Next.js framework configuration (minimal/default)
- `eslint.config.mjs` - ESLint with Next.js Core Web Vitals rules
- `postcss.config.mjs` - PostCSS configuration for Tailwind
- `tsconfig.json` - TypeScript compiler options and path aliases
