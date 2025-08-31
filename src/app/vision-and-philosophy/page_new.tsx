import type { Metadata } from "next";
import VisionAndPhilosophyClient from "./VisionAndPhilosophyClient";

export const metadata: Metadata = {
    title: "Vision and Philosophy | Incisive-Cul",
    description: "Understand our vision and philosophy behind the center for unlearning and learning.",
};

export default function VisionAndPhilosophyPage() {
    return <VisionAndPhilosophyClient />;
}
