import type { Metadata } from "next";
import AboutMePage from "@/components/pages/about-me/AboutMePage";
import JsonLd from "@/components/seo/JsonLd";
import { getSiteUrl, SITE_NAME } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About Dr. Abhishek Juneja | Educator Profile",
  description:
    "Meet Dr. Abhishek Juneja, scholar, educator, and public speaker with over a decade of teaching and coaching experience across social sciences, humanities, and liberal arts.",
};

const siteUrl = getSiteUrl();

const personJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Abhishek Juneja",
  jobTitle: "Scholar, Educator, and Public Speaker",
  description:
    "Educator with over a decade of teaching experience across social sciences, humanities, and liberal arts, and founder of INCISIVE.",
  worksFor: {
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  sameAs: [
    "https://www.linkedin.com/in/abhishekjuneja/",
    "https://scholar.google.com/citations?user=Y7qI_u4AAAAJ&hl=en",
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <AboutMePage />
    </>
  );
}