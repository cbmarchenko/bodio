# Bodio Agency

Marketing, operations, and AI training -- bodioagency.com

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- TypeScript

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to a Git repo and import on [Vercel](https://vercel.com). No environment variables needed for the static site.

## Content

All site copy lives in `/lib/content.ts`. Update text, stats, testimonials, and portfolio projects there.

### TODOs before launch

- Replace `/public/claire.jpg` with a real photo
- Update placeholder stats on the home page (`[X]+` values in `content.ts`)
- Replace placeholder testimonials with real quotes
- Replace placeholder portfolio projects with real case studies
- Wire the contact form to Resend or Formspree (see `ContactClient.tsx`)
- Add your Calendly URL (see `ContactClient.tsx`)
