# Development Guidelines for Bluefins Website

## Build Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Code Style
- **TypeScript**: Use strict typing with proper interfaces/types
- **Imports**: Group imports (React/Next.js, components, styles)
- **Components**: Use functional components with named exports
- **CSS**: Use Tailwind utility classes; global styles in globals.css
- **State**: Use React hooks (useState, useEffect) for component state
- **Client Components**: Mark with 'use client' directive when needed
- **Error Handling**: Use try/catch for async operations
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Path Aliases**: Use @/* for src/ directory imports
- **Formatting**: Follow ESLint/Next.js recommended rules

## Architecture
- Next.js App Router pattern with React 19
- Separate UI components in src/components/
- Use Next.js built-in components (Link, Image) for optimization
- Tailwind CSS v4 for styling