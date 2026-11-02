# Ahmad Muzzaki Mahmud — portfolio

A one-page portfolio for a finance and operations manager, built with Next.js.

## Run locally

```bash
npm install
npm run dev
```

## Public domain and SEO

On Vercel production, the site uses Vercel’s production URL for its canonical URL and sitemap. When the final domain is ready, set `SITE_URL` to its HTTPS origin in the deployment environment (for example, `SITE_URL=https://your-domain.com`) and redeploy. Local builds leave canonical and sitemap entries unset; `localhost` is used only to resolve preview image metadata in development.

The site includes a generated Open Graph image, Person structured data, `robots.txt`, and a sitemap route. After publishing, verify the live canonical and sitemap, then submit the sitemap in Google Search Console. Search indexing and ranking depend on the published site and are not established by the build.

## Checks

```bash
npx eslint app
npx tsc --noEmit
npx next build --webpack
```
