/**
 * Site configuration and brand constants for INCISIVE – Centre for Unlearning and Learning.
 * 
 * NOTE ON PRODUCTION DOMAIN:
 * The official production domain has not been unambiguously configured in this repository.
 * In accordance with project instructions, we do not guess or hardcode an unconfirmed domain.
 * The domain can be supplied via the NEXT_PUBLIC_SITE_URL environment variable.
 */

export const SITE_NAME = "INCISIVE – Centre for Unlearning and Learning";
export const SITE_SHORT_NAME = "INCISIVE";
export const SITE_DEFAULT_DESCRIPTION =
  "INCISIVE is a Centre for Unlearning and Learning in Dehradun, offering transformative mentoring, critical inquiry, and multidisciplinary exploration.";

/**
 * Returns the verified site URL if configured via NEXT_PUBLIC_SITE_URL,
 * or undefined if unset or pointing to a placeholder.
 */
export function getSiteUrl(): string | undefined {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!envUrl) return undefined;

  // Filter out known placeholder values
  if (
    envUrl.includes("your-domain") ||
    envUrl.includes("your-app-name") ||
    envUrl.includes("your-service-name") ||
    envUrl.includes("your-render-app-name") ||
    envUrl.includes("localhost")
  ) {
    return undefined;
  }

  try {
    const parsed = new URL(envUrl);
    return parsed.origin;
  } catch {
    return undefined;
  }
}

/**
 * Verified public routes in the INCISIVE application.
 */
export const PUBLIC_ROUTES = [
  '/',
  '/about-me',
  '/contact',
  '/featured-works',
  '/learning-verticals',
  '/vision-and-philosophy',
  '/legal-notice',
  '/privacy-policy',
] as const;
