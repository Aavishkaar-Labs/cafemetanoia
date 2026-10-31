# Café Metanoia

Personal website for a clinical psychologist. Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. Every page is statically prerendered for speed and SEO.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

- **Name, email, phone, domain, keywords:** `src/lib/site.ts` (`site` object; see the TODOs)
- **Services, professional journey copy:** `src/lib/site.ts`
- **Images:** `public/images/`
- Set `NEXT_PUBLIC_SITE_URL` to the production domain (used for canonical URLs, sitemap, Open Graph, JSON-LD)

## SEO built in

- Per-page `<title>`, meta description, canonical URL, Open Graph and Twitter cards
- `sitemap.xml`, `robots.txt`, web manifest, generated Open Graph image
- JSON-LD structured data: WebSite, Person, ProfessionalService, Service, BreadcrumbList, ProfilePage
- Semantic HTML, one `h1` per page, descriptive image `alt` text, optimised images (`next/image`) and self-hosted fonts (`next/font`)

## Pages

`/`, `/about`, `/services/individual-therapy`, `/services/workshops-training`, `/services/guest-lectures`, `/services/internships`, `/contact`

## Contact form

The form currently opens the visitor's email app with a pre-filled message (no backend). To receive submissions directly, replace `handleSubmit` in `src/components/ContactForm.tsx` with a Server Action plus an email provider (e.g. Resend) or a form service.
