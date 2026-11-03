# Deploying Café Metanoia to Vercel

The site is a Next.js app and deploys to [Vercel](https://vercel.com) without any extra configuration.

## Option A: Deploy from GitHub (recommended)

Once this is set up, every push to `main` deploys to production automatically, and other branches get their own preview URLs.

1. Sign in at [vercel.com](https://vercel.com). Signing in with GitHub is easiest.
2. Click **Add New… → Project**.
3. Find `Aavishkaar-Labs/cafemetanoia` and click **Import**.
   - If the repository isn't listed, click **Adjust GitHub App Permissions** and give Vercel access to the `Aavishkaar-Labs` organisation.
4. Vercel should detect the framework as **Next.js**. Leave the build settings at their defaults.
5. **Optional:** under **Environment Variables**, add:

   | Name                   | Value                                     |
   | ---------------------- | ----------------------------------------- |
   | `NEXT_PUBLIC_SITE_URL` | Your live domain, e.g. `https://cafemetanoia.com` |

   This sets the domain the site uses for search-engine links, the sitemap and social previews. If you don't set it, the site uses `https://cafemetanoia.com`.
6. Click **Deploy**. After a minute or two the site is live at a URL like `cafemetanoia.vercel.app`.

To publish changes after that:

```bash
git add -A
git commit -m "Describe your change"
git push origin main
```

## Option B: Deploy from the terminal

```bash
cd cafemetanoia
npx vercel login      # opens a browser to sign in
npx vercel            # first run links the project (the defaults are fine) and creates a preview
npx vercel --prod     # deploys to production
```

For later updates, run `npx vercel --prod` again.

## Adding a custom domain

1. In the Vercel project, open **Settings → Domains**.
2. Add your domain (e.g. `cafemetanoia.com`, and `www.cafemetanoia.com` as well if you want it).
3. Wherever you bought the domain, add the DNS records Vercel shows you. It can take anywhere from a few minutes to a few hours for these to take effect.
4. If the domain differs from `https://cafemetanoia.com`, set `NEXT_PUBLIC_SITE_URL` to it (see step 5 of Option A) and redeploy.

## Checking the deployment

- Open the home page and click through **About**, each service page, and **Contact**.
- On `/contact`, fill in the form and click **Send message on WhatsApp**. WhatsApp should open a chat with **+91 81309 36991** with your message already typed in.
- Check that `/sitemap.xml` and `/robots.txt` load.

## Running locally before deploying

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # checks that the production build works
```

## Where to change contact details

Contact details and site-wide settings live in [`src/lib/site.ts`](src/lib/site.ts):

- `phone`: the number shown on the site
- `whatsapp`: the same number as digits only, with the country code (e.g. `918130936991`), used for WhatsApp links
