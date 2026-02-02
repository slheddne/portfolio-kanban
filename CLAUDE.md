# CLAUDE.md - AI Assistant Guide for Portfolio Kanban

## Project Overview

This is a **Next.js 14 personal portfolio website** for Salah-Eddine ET-TALEBY, a Full-stack Software Engineer. The site uses a Kanban-style card layout to display professional information across four main sections: About Me, Education, Work Experience, and Skills.

**Key Characteristics:**
- Single-page application with interactive card-based UI
- Dark mode support with system preference detection
- Responsive design (mobile, tablet, desktop)
- Static site generation for GitHub Pages deployment

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14.2.5 (App Router) |
| Language | TypeScript 5 |
| UI Library | React 18 |
| Styling | Tailwind CSS 3.4.1 |
| Component Library | shadcn/ui (Radix UI primitives) |
| Animations | Framer Motion 11.3, CSS animations |
| Theme | next-themes 0.3.0 |
| Icons | Lucide React, Radix UI Icons |

## Project Structure

```
/home/user/portfolio-kanban/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Home page (main grid layout)
│   ├── layout.tsx           # Root layout (providers, header, footer)
│   └── globals.css          # Tailwind directives + CSS variables
│
├── components/              # React components
│   ├── Header.tsx          # Nav header with theme toggle + info modal
│   ├── Footer.tsx          # Footer with LinkedIn link
│   ├── Tab.tsx             # Card container component
│   ├── Card.tsx            # Individual portfolio card with modal
│   ├── ThemeProvider.tsx   # next-themes wrapper
│   ├── ThemeToggler.tsx    # Dark/light mode toggle
│   │
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx      # Button with CVA variants
│   │   ├── badge.tsx       # Tag/badge component
│   │   └── dialog.tsx      # Modal dialog (Radix UI)
│   │
│   └── magicui/            # Advanced animation components
│       ├── border-beam.tsx # Animated border effect
│       ├── dock.tsx        # Animated dock with mouse tracking
│       └── particles.tsx   # Canvas particle system
│
├── data/
│   └── cardsData.ts        # Portfolio content (tabs, cards, badges)
│
├── lib/
│   └── utils.ts            # cn() utility (clsx + tailwind-merge)
│
├── utils/
│   └── utilFunctions.ts    # calculateAge() helper
│
├── public/                  # Static assets
│
└── .github/workflows/       # CI/CD pipelines
    └── nextjs.yml          # GitHub Pages deployment
```

## Key Components

### Component Hierarchy
```
RootLayout (layout.tsx)
├── ThemeProvider
├── Header
│   ├── ThemeToggler
│   └── Dialog (info modal)
├── main (page.tsx)
│   └── Tab (x4: About, Education, Work, Skills)
│       └── Card (multiple per tab)
│           └── Dialog (full description)
└── Footer
```

### Component Types
- **Server Components** (default): `layout.tsx`, `page.tsx`, `Footer.tsx`, `Tab.tsx`
- **Client Components** (`"use client"`): `Header.tsx`, `Card.tsx`, `ThemeProvider.tsx`, `ThemeToggler.tsx`, all `magicui/*` components

## Data Architecture

Portfolio content is defined in `data/cardsData.ts`:

```typescript
// Structure
{
  title: string,      // Tab name (e.g., "About Me")
  id: string,         // Unique identifier
  cards: [{
    id: string,
    title: string,
    description: string,
    fullDescription?: string,  // Shown in modal
    badges?: string[]          // Technology tags
  }]
}
```

**4 Tabs, 13 Total Cards:**
- About Me: 3 cards (Profile, Contact, Location)
- Education: 3 cards (degrees)
- Work: 3 cards (positions)
- Skills: 4 cards (Frontend, Backend, Testing, Other)

## Development Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint (currently minimal config)
```

## Coding Conventions

### File Naming
- **Components**: PascalCase (`Header.tsx`, `Card.tsx`)
- **Utilities**: camelCase (`utilFunctions.ts`)
- **Data files**: camelCase (`cardsData.ts`)
- **Config files**: lowercase (`tailwind.config.ts`)

### Styling Patterns
- **Utility-first CSS** with Tailwind classes
- **CVA (class-variance-authority)** for component variants
- **cn() utility** for merging classes safely (prevents Tailwind conflicts)
- **CSS variables** for theme colors (HSL-based in `globals.css`)
- **Dark mode**: class-based (`dark:` Tailwind prefix)

### TypeScript Patterns
- Strict mode enabled
- Interface-based component props
- Type-safe forwardRef usage in UI components

### React Patterns
- Arrow function components
- React hooks for local state (useState)
- Context via next-themes for theme state
- No external state management library needed

## Theme System

Theme is managed via `next-themes`:
- Colors defined as CSS variables in `globals.css` (`:root` and `.dark`)
- HSL format for flexibility
- `ThemeToggler.tsx` handles switching with hydration safety

## CI/CD Pipeline

**GitHub Actions** (`.github/workflows/nextjs.yml`):
1. Triggers on push to `main` branch
2. Uses Node.js 20
3. Builds static export to `/out`
4. Deploys to GitHub Pages

## Important Patterns for AI Assistants

### When Adding New Cards
1. Edit `data/cardsData.ts`
2. Add card object to appropriate tab's `cards` array
3. Include required fields: `id`, `title`, `description`
4. Optional: `fullDescription`, `badges`

### When Adding New Components
1. Create in `/components` directory
2. Use `"use client"` directive if using hooks/browser APIs
3. Import `cn` from `@/lib/utils` for class merging
4. Follow existing TypeScript interface patterns

### When Modifying Styles
1. Prefer Tailwind utility classes
2. For new theme colors, add CSS variables to `globals.css`
3. Update both `:root` (light) and `.dark` selectors
4. Reference in Tailwind config if needed for custom utilities

### When Adding shadcn/ui Components
1. Components live in `/components/ui/`
2. Configuration in `components.json`
3. Use CVA for variant management
4. Always use `cn()` for class merging

## Common File Locations

| Need to... | File |
|------------|------|
| Add/edit portfolio content | `data/cardsData.ts` |
| Modify page layout | `app/page.tsx` |
| Change theme colors | `app/globals.css` |
| Add Tailwind config | `tailwind.config.ts` |
| Modify header/footer | `components/Header.tsx`, `components/Footer.tsx` |
| Edit card appearance | `components/Card.tsx` |

## Dependencies Overview

### Core
- `next`, `react`, `react-dom` - Framework
- `typescript` - Type safety

### UI/Styling
- `tailwindcss`, `postcss` - Styling
- `class-variance-authority`, `clsx`, `tailwind-merge` - Class utilities
- `@radix-ui/*` - Accessible primitives
- `lucide-react` - Icons

### Features
- `next-themes` - Dark mode
- `framer-motion` - Animations
- `tailwindcss-animate` - Animation utilities

## Git Conventions

Commit messages use prefixes:
- `[added]` - New features
- `[edited]` - Modifications
- `[fixed]` - Bug fixes
- `[chore]` - Maintenance tasks

## Contact Information (Portfolio Owner)

- **Name**: Salah-Eddine ET-TALEBY
- **Email**: salah.ettaleby@icloud.com
- **LinkedIn**: https://www.linkedin.com/in/salah-ettaleby/

---

*This file provides context for AI assistants working with this codebase. Last updated: 2026-02-02*
