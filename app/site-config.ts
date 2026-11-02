/** Set SITE_URL to the final HTTPS origin when the portfolio domain is chosen. */
export function getSiteUrl(): string | undefined {
  const productionHost = process.env.VERCEL_ENV === "production"
    ? process.env.VERCEL_PROJECT_PRODUCTION_URL
    : undefined;
  const configured = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ??
    (productionHost ? `https://${productionHost}` : undefined);
  if (!configured) return undefined;

  try {
    const url = new URL(configured);
    if (url.protocol !== "https:") return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}
