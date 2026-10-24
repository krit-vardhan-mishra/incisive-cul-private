import type { Metadata } from "next";
import HeroSection from "@/components/pages/home/HeroSection";

export const metadata: Metadata = {
  title: "INCISIVE – Centre for Unlearning and Learning",
  description:
    "Discover transformative unlearning and multidisciplinary learning through critical inquiry, personalized mentorship, and deep intellectual exploration.",
};

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
    </div>
  );
}
