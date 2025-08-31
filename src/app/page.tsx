import type { Metadata } from "next";
import HeroSection from "@/components/pages/home/HeroSection";

export const metadata: Metadata = {
    title: "Incisive-Cul",
    description: "Welcome to Incisive-Cul, your center for unlearning and learning. Discover transformative educational experiences.",
};

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
    </div>
  );
}
