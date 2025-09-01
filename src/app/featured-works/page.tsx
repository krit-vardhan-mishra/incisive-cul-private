import type { Metadata } from "next";
import FeaturedWorksPage from "@/components/pages/featured-works/FeaturedWorksPage";

export const metadata: Metadata = {
    title: "Featured Works | Incisive-Cul",
    description: "Explore our featured works and projects in the field of unlearning and learning.",
};

export default function Page() {
    return <FeaturedWorksPage />;
}