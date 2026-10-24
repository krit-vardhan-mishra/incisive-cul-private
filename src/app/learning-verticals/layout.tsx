import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Five Verticals + One",
  description:
    "Explore the Five Verticals + One learning framework at INCISIVE: Essential Learning, Life Skills, Creative Expression, Public Speaking, Competition Prep, and Project Guidance.",
  openGraph: {
    title: "Learning Verticals | INCISIVE – Centre for Unlearning and Learning",
    description:
      "Explore the Five Verticals + One learning framework at INCISIVE: Essential Learning, Life Skills, Creative Expression, Public Speaking, Competition Prep, and Project Guidance.",
  },
};

export default function LearningVerticalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
