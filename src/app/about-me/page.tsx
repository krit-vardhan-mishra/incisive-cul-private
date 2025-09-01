import type { Metadata } from "next";
import AboutMePage from "@/components/pages/about-me/AboutMePage";

export const metadata: Metadata = {
    title: "About Me | Incisive-Cul",
    description:
        "Learn about my background, experience, and passion for unlearning and learning at Incisive-Cul.",
};

export default function Page() {
    return <AboutMePage />;
}