import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Incisive-Cul",
    description: "Get in touch with us to learn more about our unlearning and learning programs.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-12">
            <div className="text-center max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                    Get in <span className="text-blue-400">Touch</span>
                </h1>
                <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    This contact section is currently under development. Check back soon for ways to connect with us.
                </p>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <p className="text-gray-400">
                        Coming Soon: Contact forms, office locations, and direct communication channels.
                    </p>
                </div>
            </div>
        </div>
    );
}