import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Learning Verticals | Incisive-Cul",
    description: "Discover our diverse learning verticals and educational approaches at Incisive-Cul.",
};

export default function LearningVerticalsPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-12">
            <div className="text-center max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                    Learning <span className="text-blue-400">Verticals</span>
                </h1>
                <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    This section is currently under development. Check back soon to explore our diverse learning verticals and educational approaches.
                </p>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <p className="text-gray-400">
                        Coming Soon: Detailed information about our various learning domains and specialized programs.
                    </p>
                </div>
            </div>
        </div>
    );
}