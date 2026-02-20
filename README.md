# Akarsh Portfolio Website

Modern multi-page portfolio built with Next.js static export for free GitHub Pages hosting.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion

## Run locally
1. Install Node.js 20+
2. Install dependencies:
   - `npm install`
3. Start dev server:
   - `npm run dev`

## Deploy on GitHub Pages
1. Push this project to a dedicated GitHub repo.
2. In GitHub repo settings, set Pages source to `GitHub Actions`.
3. Workflow at `.github/workflows/deploy.yml` will build and deploy automatically on `main` pushes.

## Content updates
- Home intro content: `src/data/home.ts`
- Skills page data: `src/data/skills.ts`
- Projects page data: `src/data/projects.ts`
- Certificates metadata: `src/data/certificates.ts`
- Certificate files: `public/certificates/`
- Contact info and links: `src/data/site.ts`
