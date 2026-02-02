# CLAUDE.md - AI Assistant Guide for Portfolio

## Project Overview

This is a **Next.js 14 personal portfolio website** for Salah-Eddine ET-TALEBY, a Full-stack Software Engineer. The site features a modern single-page design with animated sections showcasing professional experience, education, skills, and contact information.

**Key Characteristics:**
- Modern single-page portfolio with smooth scroll navigation
- Animated Hero section with gradient effects
- Glass morphism UI design
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
| Animations | CSS animations, Tailwind animate |
| Theme | next-themes 0.3.0 |
| Icons | Lucide React |

## Project Structure

```
/home/user/portfolio-kanban/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Home page (main sections layout)
│   ├── layout.tsx           # Root layout (providers, header, footer)
│   └── globals.css          # Tailwind directives + CSS variables + custom utilities
│
├── components/              # React components
│   ├── Header.tsx          # Fixed nav header with smooth scroll navigation
│   ├── Footer.tsx          # Footer with social links + back-to-top
│   ├── Hero.tsx            # Animated hero section with CTA
│   ├── Section.tsx         # Reusable section wrapper with animations
│   ├── ExperienceCard.tsx  # Work experience timeline card
│   ├── EducationCard.tsx   # Education card component
│   ├── SkillCard.tsx       # Skills category card with icons
│   ├── ContactSection.tsx  # Contact information section
│   ├── ThemeProvider.tsx   # next-themes wrapper
│   ├── ThemeToggler.tsx    # Dark/light mode toggle
│   │
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx      # Button with CVA variants
│   │   ├── badge.tsx       # Tag/badge component
│   │   └── dialog.tsx      # Modal dialog (Radix UI)
│   │
│   └── magicui/            # Advanced animation components (legacy)
│       ├── border-beam.tsx
│       ├── dock.tsx
│       └── particles.tsx
│
├── data/
│   ├── portfolioData.ts    # Main portfolio content (profile, experiences, education, skills)
│   └── cardsData.ts        # Legacy data file (kept for reference)
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
├── Header (fixed, with scroll detection)
│   ├── Logo
│   ├── Navigation Links (desktop)
│   ├── ThemeToggler
│   └── Mobile Menu
├── main (page.tsx)
│   ├── Hero
│   │   ├── Animated background shapes
│   │   ├── Name + Title + Subtitle
│   │   ├── CTA Buttons
│   │   └── Social Links
│   ├── Section (Experience)
│   │   └── ExperienceCard (x3)
│   ├── Section (Education)
│   │   └── EducationCard (x3)
│   ├── Section (Skills)
│   │   └── SkillCard (x4)
│   └── Section (Contact)
│       └── ContactSection
└── Footer
    ├── Logo + Copyright
    ├── Social Links
    └── Back-to-top Button
```

### Component Types
- **Server Components**: `page.tsx`
- **Client Components** (`"use client"`): `Header.tsx`, `Footer.tsx`, `Hero.tsx`, `Section.tsx`, `ExperienceCard.tsx`, `EducationCard.tsx`, `SkillCard.tsx`, `ContactSection.tsx`, `ThemeProvider.tsx`, `ThemeToggler.tsx`

## Data Architecture

Portfolio content is defined in `data/portfolioData.ts`:

```typescript
// Profile
export const profile = {
  name: string,
  title: string,
  subtitle: string,
  email: string,
  linkedin: string,
  github?: string,
  location: string,
};

// Experiences array
export const experiences = [{
  id: string,
  title: string,
  company: string,
  location: string,
  period: string,
  description: string,
  badges: string[],
}];

// Education array
export const education = [{
  id: string,
  school: string,
  degree: string,
  location: string,
  period: string,
  description: string,
  badges: string[],
}];

// Skills array
export const skills = [{
  id: string,
  category: string,  // "Frontend", "Backend", "Databases", "DevOps & Tools"
  description: string,
  technologies: string[],
  gradient: string,  // Tailwind gradient classes
}];

// Navigation links
export const navLinks = [{ name: string, href: string }];
```

## Development Commands

```bash
npm install    # Install dependencies
npm run dev    # Start dev server at http://localhost:3000
npm run build  # Production build
npm start      # Start production server
npm run lint   # Run ESLint
```

## Coding Conventions

### File Naming
- **Components**: PascalCase (`Header.tsx`, `SkillCard.tsx`)
- **Utilities**: camelCase (`utilFunctions.ts`)
- **Data files**: camelCase (`portfolioData.ts`)
- **Config files**: lowercase (`tailwind.config.ts`)

### Styling Patterns
- **Utility-first CSS** with Tailwind classes
- **Glass morphism**: `glass` and `glass-card` utility classes in globals.css
- **CVA (class-variance-authority)** for component variants
- **cn() utility** for merging classes safely
- **CSS variables** for theme colors (HSL-based in `globals.css`)
- **Dark mode**: class-based (`dark:` Tailwind prefix)
- **Animations**: Custom keyframes in Tailwind config (`fade-in`, `slide-up`, `float`, etc.)

### Custom CSS Utilities (globals.css)
```css
.text-gradient    /* Animated gradient text */
.glass            /* Glass morphism background */
.glass-card       /* Glass card with border */
```

### TypeScript Patterns
- Strict mode enabled
- Interface-based component props
- Type-safe icon mapping in components

### React Patterns
- Arrow function components
- IntersectionObserver for scroll animations
- useEffect for client-side logic
- useState for local component state

## Theme System

Theme is managed via `next-themes`:
- Colors defined as CSS variables in `globals.css`
- Primary: Blue (`221 83% 53%`)
- Accent: Purple (`262 83% 58%`)
- Glass effects for both light and dark modes

## CI/CD Pipeline

**GitHub Actions** (`.github/workflows/nextjs.yml`):
1. Triggers on push to `main` branch
2. Uses Node.js 20
3. Builds static export to `/out`
4. Deploys to GitHub Pages

## Important Patterns for AI Assistants

### When Adding New Experiences/Education
1. Edit `data/portfolioData.ts`
2. Add new object to `experiences` or `education` array
3. Follow the existing structure with all required fields

### When Adding New Skills
1. Edit `data/portfolioData.ts`
2. Add new skill object to `skills` array
3. Update icon mapping in `components/SkillCard.tsx` if using a new category

### When Adding New Sections
1. Create a new component in `/components`
2. Use `"use client"` directive
3. Add to page.tsx wrapped in `<Section>` component
4. Update `navLinks` in `portfolioData.ts`

### When Modifying Styles
1. Prefer Tailwind utility classes
2. For new animations, add keyframes to `tailwind.config.ts`
3. For new utilities, add to `globals.css` under `@layer utilities`
4. For theme colors, update CSS variables in both `:root` and `.dark`

### When Adding shadcn/ui Components
1. Components live in `/components/ui/`
2. Configuration in `components.json`
3. Use CVA for variant management
4. Always use `cn()` for class merging

## Common File Locations

| Need to... | File |
|------------|------|
| Edit profile/contact info | `data/portfolioData.ts` |
| Add work experience | `data/portfolioData.ts` → experiences |
| Add education | `data/portfolioData.ts` → education |
| Add skills | `data/portfolioData.ts` → skills |
| Modify page layout | `app/page.tsx` |
| Change theme colors | `app/globals.css` |
| Add animations | `tailwind.config.ts` |
| Modify header/navigation | `components/Header.tsx` |
| Modify footer | `components/Footer.tsx` |
| Edit hero section | `components/Hero.tsx` |

## Dependencies Overview

### Core
- `next`, `react`, `react-dom` - Framework
- `typescript` - Type safety

### UI/Styling
- `tailwindcss`, `postcss` - Styling
- `class-variance-authority`, `clsx`, `tailwind-merge` - Class utilities
- `@radix-ui/*` - Accessible primitives
- `lucide-react` - Icons
- `tailwindcss-animate` - Animation utilities

### Features
- `next-themes` - Dark mode
- `framer-motion` - Advanced animations (available but not actively used)

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
- **Location**: Toulouse, France

---

*This file provides context for AI assistants working with this codebase. Last updated: 2026-02-02*
