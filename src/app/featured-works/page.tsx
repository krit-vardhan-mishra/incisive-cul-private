import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Featured Works | Incisive-Cul",
    description: "Explore our featured works and projects in the field of unlearning and learning.",
};

export default function FeaturedWorksPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-12">
            <div className="text-center max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                    Featured <span className="text-blue-400">Works</span>
                </h1>
                <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    This showcase section is currently under development. Check back soon to explore our featured projects and works.
                </p>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <p className="text-gray-400">
                        Coming Soon: Portfolio of projects, case studies, and innovative learning solutions.
                    </p>
                </div>
            </div>
        </div>
    );
}