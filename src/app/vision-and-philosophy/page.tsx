import type { Metadata } from "next";
import VisionAndPhilosophyClient from "./VisionAndPhilosophyClient";

export const metadata: Metadata = {
  title: "Vision & Philosophy",
  description:
    "Explore the educational vision and philosophy of INCISIVE: unlearning limiting paradigms, nurturing critical thinking, and empowering independent thinkers.",
};

export default function VisionAndPhilosophyPage() {
  return <VisionAndPhilosophyClient />;
}
