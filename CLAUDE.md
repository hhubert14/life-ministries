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
- Responsive design with Tailwind breakpoints (`sm:`, `md:`, etc.)

**Always use theme colors from `globals.css` instead of hardcoded hex values:**

| Instead of | Use |
|------------|-----|
| `bg-[#1a1a1a]` | `bg-foreground` or `bg-footer-bg` |
| `bg-[#ffffff]` | `bg-background` |
| `bg-[#fafafa]` | `bg-surface-alt` |
| `bg-[#f5f5f5]` | `bg-surface` |
| `bg-[#e5e5e5]` | `bg-border` |
| `text-[#1a1a1a]` | `text-foreground` |
| `text-[#6b7280]` | `text-text-muted` |
| `text-white` | `text-text-light` |
| `border-[#e5e5e5]` | `border-border` |

This keeps colors centralized and maintainable.

### Design Guidelines

**Avoid AI-generated looking patterns.** Keep the design editorial and minimal.

**DO NOT use:**
- Rounded cards with icons in circles (looks very AI-generated)
- Card grids for simple content that could be a list
- Pill-shaped buttons (`rounded-full`) - use square or subtle rounding
- Decorative SVG icons next to every heading
- Gradient backgrounds on cards
- Drop shadows on everything
- Excessive use of rounded corners (`rounded-2xl`, `rounded-3xl`)

**DO use:**
- Simple left-border blockquotes for quotes
- Stacked lists with dividers for related content
- Square or slightly rounded images
- Plain text links instead of button-styled links where appropriate
- Whitespace and typography for visual hierarchy
- Minimal, editorial layouts

**For placeholder content:**
- Use gray boxes (`bg-border`) for placeholder images
- Use generic text like "Pastor Name", "Staff Name" instead of real data
- Keep placeholder structure simple

### TypeScript Configuration

- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Target: ES2017

### Font Optimization

Uses Next.js Font optimization with Geist Sans and Geist Mono from Google Fonts. Font variables are exposed via CSS custom properties (`--font-geist-sans`, `--font-geist-mono`).

## Project State

**Completed pages:**
- Home page (`/`) - Hero, Mission, Featured Sermon, Service Times, CTA sections
- About page (`/about`) - Hero, Mission & Vision, What We Believe, Leadership, CTA sections

**Remaining pages (see GitHub issue #8):**
- Ministries (`/ministries`)
- Media (`/media`)
- I'm New (`/new`)
- Giving (`/giving`)

**Foundation:**
- TypeScript with strict configuration
- Tailwind CSS v4 with centralized theme colors in `globals.css`
- ESLint 9+ with Next.js presets (flat config format)
- Next.js Image component for optimized images
- Shared layout components in `src/components/layout/` (Header, Footer)

## Configuration Files

- `next.config.ts` - Next.js framework configuration (minimal/default)
- `eslint.config.mjs` - ESLint with Next.js Core Web Vitals rules
- `postcss.config.mjs` - PostCSS configuration for Tailwind
- `tsconfig.json` - TypeScript compiler options and path aliases

### Component Organization

- **Shared components** (used across multiple pages): Place in `src/components/`
  - `src/components/layout/` - Header, footer, navigation
  - `src/components/ui/` - Buttons, cards, inputs, etc.
- **Page-specific components** (used in one spot): Co-locate in `src/app/<route>/_components/`
  - Example: `src/app/_components/hero.tsx` for home page hero section

## Development Workflow: Test-Driven Development (TDD)

**IMPORTANT: This project follows TDD. Tests are the default, not the exception. When in doubt, write the test.**

### TDD Workflow

1. **Write tests first** - Create test file describing expected behavior
2. **Verify tests fail** - Confirm red phase
3. **Implement the code** - Write minimum code to pass
4. **Refactor** - Clean up while keeping tests green

### What Requires Tests

**Always test:**
- Utility functions and helpers
- Custom React hooks
- Bug fixes (write a failing test that reproduces the bug first)
- API routes with any logic
- Components with user interactions or conditional rendering
- Data transformations and formatting
- Form validation logic

**Component tests should cover:**
- User interactions (clicks, form submissions, keyboard navigation)
- Accessibility (screen reader support, focus management)
- Error states and loading states
- Conditional rendering logic

**Skip tests only for:**
- Pure configuration changes (env vars, build config)
- Obvious typo fixes in text/comments
- Auto-generated code (migrations, type definitions)
- Purely presentational components with zero logic or interactions (rare)

**If you're unsure whether something needs a test, it needs a test.**

### TDD Commands

```bash
cd web

npm run test                                    # Run all tests
npm run test -- --run path/to/file.unit.test.ts # Run specific test
npm run test -- --watch                         # Watch mode during development
npm run test -- --coverage                      # With coverage report
```

## Testing Strategy

### Test File Naming Convention

Co-locate test files next to source files:
- Unit tests: `<name>.unit.test.ts` - Pure logic with mocked dependencies
- Component tests: `<name>.component.test.tsx` - React component rendering and interactions
- Integration tests: `<name>.integration.test.ts` - Tests with real database/services

**Examples:**
- `src/lib/utils/format-date.ts` → `src/lib/utils/format-date.unit.test.ts`
- `src/components/ui/button.tsx` → `src/components/ui/button.component.test.tsx`

### Testing Cadence

Run tests frequently:
- After writing each test → verify fails (red)
- After implementing each piece → verify passes (green)
- After each refactor → verify nothing broke
- Before committing → run all tests

### Unit Tests

```typescript
import { describe, it, expect } from "vitest";
import { formatDate } from "./format-date";

describe("formatDate", () => {
  it("formats ISO date to readable string", () => {
    expect(formatDate("2025-01-26")).toBe("January 26, 2025");
  });

  it("returns empty string for invalid date", () => {
    expect(formatDate("invalid")).toBe("");
  });
});
```

### Component Tests

Test user interactions, conditional rendering, loading/error states, and accessibility.

```typescript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./contact-form";

describe("ContactForm", () => {
  it("submits form with name and email", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();
    render(<ContactForm onSubmit={handleSubmit} />);

    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(handleSubmit).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john@example.com",
    });
  });

  it("shows error when email is invalid", async () => {
    const user = userEvent.setup();
    render(<ContactForm onSubmit={vi.fn()} />);

    await user.type(screen.getByLabelText(/email/i), "invalid-email");
    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });
});
```

**Key patterns:**
- Use `userEvent` over `fireEvent`
- Query by accessible roles/labels, not test IDs
- Test from user's perspective

### Mocking Philosophy

**Mock at boundaries, not everywhere.** Mock dependencies to isolate the unit. Don't mock the unit itself.

| Test Type | What to Mock | What NOT to Mock |
|-----------|--------------|------------------|
| Unit (pure logic) | Nothing needed | - |
| Unit (with deps) | External services, fetch calls | Internal helpers |
| Component | API calls, external services | Child components (usually) |

**Warning signs you're over-mocking:**
- Test needs 4+ mocks → probably an integration test in disguise
- Mocks encode detailed external API shapes → one integration test should verify those assumptions
- Test passes but production breaks → mocks didn't reflect reality

### Snapshot Testing

Avoid snapshot tests for components. Test behavior instead:

```typescript
// ✅ Behavior - tests what users actually experience
expect(screen.getByRole("button", { name: "Submit" })).toBeEnabled();
expect(screen.getByText("Error: Invalid email")).toBeInTheDocument();

// ❌ Snapshot - brittle, doesn't test behavior
expect(component).toMatchSnapshot();
```

### E2E Tests (Future)

Use sparingly - they're slow and expensive. Reserve for critical user journeys, multi-page flows, and deployment smoke tests.

**Test pyramid:** Many unit tests, fewer component tests, minimal E2E tests.

### Testing Libraries

- **Vitest** for unit/integration tests
- **React Testing Library** for component testing
- **Playwright** for E2E tests (future)
