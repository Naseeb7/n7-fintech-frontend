@AGENTS.md

# Codex Ruleset

## Project Context

This is a production-quality frontend implementation for a fintech SaaS landing page.

Goals:

- Pixel-accurate implementation
- Clean scalable architecture
- Premium UX
- Excellent responsiveness
- Maintainable codebase
- Startup-quality engineering standards

---

# Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion (only where it meaningfully improves UX)

---

# Architecture Rules

- Prefer simple readable solutions over abstraction-heavy patterns
- Do NOT over-engineer
- Avoid unnecessary wrappers and deeply nested components
- Components should remain composable and maintainable
- Use feature/section-based organization
- Keep JSX clean and readable
- Extract repeated UI patterns thoughtfully

---

# Styling Rules

- Use Tailwind CSS primarily
- Prefer consistent spacing scale
- Avoid arbitrary values unless visually necessary
- Reuse layout/container patterns
- Maintain strong typography hierarchy
- Follow mobile-first responsive design

---

# Responsiveness Rules

- Mobile-first implementation
- Ensure smooth scaling across mobile/tablet/desktop
- Avoid desktop-shrunk mobile layouts
- Preserve spacing rhythm responsively

---

# Performance Rules

- Prefer Server Components unless interactivity is required
- Avoid unnecessary client components
- Minimize hydration cost
- Optimize images properly
- Avoid unnecessary re-renders

---

# Animation Rules

- Use subtle premium animations only
- Avoid excessive motion
- Prioritize smoothness and restraint
- Prefer CSS transitions before introducing motion libraries
- Use Framer Motion only where it meaningfully improves UX

---

# Accessibility Rules

- Use semantic HTML
- Maintain keyboard accessibility
- Ensure proper heading hierarchy
- Add alt text for images
- Ensure sufficient contrast

---

# Code Quality Rules

- Use strict TypeScript types
- Avoid any
- Keep components small and focused
- Use meaningful naming
- Avoid dead code
- Avoid duplicated logic

---

# Modification Rules

- Avoid rewriting existing stable code unless necessary
- Prefer incremental changes over large refactors
- Preserve existing architecture patterns
- Avoid introducing unnecessary dependencies

---

# Design Consistency Rules

- Reuse established spacing and typography patterns
- Maintain visual consistency across sections
- Prefer extending existing UI patterns over creating new ones

---

# Workflow Expectations

Before implementing:

- Analyze existing patterns
- Identify reusable structures
- Avoid duplicate implementations
- Keep solutions simple and maintainable

---

# Output Expectations

Generated code should:

- Feel production-ready
- Remain scalable
- Prioritize readability
- Maintain visual consistency
- Follow modern startup frontend practices
