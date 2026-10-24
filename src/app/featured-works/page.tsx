import type { Metadata } from "next";
import FeaturedWorksPage from "@/components/pages/featured-works/FeaturedWorksPage";

export const metadata: Metadata = {
  title: "Featured Works & Lectures",
  description:
    "Explore lectures, talks, research insights, and educational projects from Dr. Abhishek Juneja and INCISIVE.",
};

export default function Page() {
  return <FeaturedWorksPage />;
}