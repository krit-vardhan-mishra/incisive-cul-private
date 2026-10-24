import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Provider from './Provider';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getSiteUrl, SITE_NAME, SITE_SHORT_NAME, SITE_DEFAULT_DESCRIPTION } from "@/data/siteConfig";
import JsonLd from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_SHORT_NAME}`,
  },
  description: SITE_DEFAULT_DESCRIPTION,
  applicationName: SITE_SHORT_NAME,
  authors: [{ name: "Dr. Abhishek Juneja" }],
  generator: "Next.js",
  keywords: [
    "INCISIVE",
    "Centre for Unlearning and Learning",
    "Education Dehradun",
    "Multidisciplinary Learning",
    "Critical Inquiry",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DEFAULT_DESCRIPTION,
    siteName: SITE_SHORT_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: SITE_NAME,
      },
    ],
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DEFAULT_DESCRIPTION,
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const orgJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  description: SITE_DEFAULT_DESCRIPTION,
  email: "incisive-cul@gmail.com",
  telephone: "+919286284370",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jakhan, Rajpur Road",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/incisive_cul/",
    "https://youtube.com/@incisive-cul",
  ],
  ...(siteUrl ? { url: siteUrl } : {}),
};

const websiteJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  ...(siteUrl ? { url: siteUrl } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased min-h-screen bg-gray-900 via-gray-800 to-gray-900 text-white`}
      >
        <JsonLd data={orgJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Provider>
          <div className="min-h-screen">
            {children}
            <SpeedInsights />
          </div>
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}