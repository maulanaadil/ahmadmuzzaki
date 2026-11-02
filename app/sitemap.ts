import type { MetadataRoute } from "next";
import { getSiteUrl } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  return siteUrl ? [{ url: siteUrl, changeFrequency: "monthly", priority: 1 }] : [];
}
