import type { MetadataRoute } from 'next';
import { getSiteUrl, PUBLIC_ROUTES } from '@/data/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  // If the production domain is not confirmed/configured, do not emit fabricated URLs.
  if (!siteUrl) {
    return [];
  }

  return PUBLIC_ROUTES.map((route) => ({
    url: `${siteUrl}${route === '/' ? '' : route}`,
  }));
}
