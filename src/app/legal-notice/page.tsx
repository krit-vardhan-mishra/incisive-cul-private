import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Legal Notice | Incisive-Cul",
    description: "Essential legal information regarding the use of our website and services.",
};

const LegalNotice = () => {
    return (
        <div className="min-h-screen text-white">
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-6 text-white">
                        Legal Notice
                    </h1>
                    <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
                        This document provides essential legal information regarding the use of our website.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-8">
                    <div className="p-8">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21L2.25 9.75M5.25 21L3.75 9.75m0 0a.75.75 0 011.5 0c1.248 1.114 2.453 1.761 3.25 2.133a.75.75 0 00.916-.145c.421-.49.919-1.298 1.488-1.558a.75.75 0 00.354-.775c-.24-.59-.51-1.096-.71-1.464a.75.75 0 00-.916-.145c-.797.372-2.002 1.019-3.25 2.133a.75.75 0 00-.75 0c-1.248-1.114-2.453-1.761-3.25-2.133a.75.75 0 00-.916.145c-.421.49-.919 1.298-1.488 1.558a.75.75 0 00-.354.775c.24.59.51 1.096.71 1.464a.75.75 0 00.916.145c.797-.372 2.002-1.019 3.25-2.133" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-[#5d7aa1]">Website Operation</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            This website is operated by <span className="text-blue-400 font-semibold">Incisive-Cul</span>.
                            All content provided on this site is for informational purposes only. We make no representations
                            as to the accuracy or completeness of any information on this site or found by following any link on this site.
                        </p>
                    </div>

                    <div className="p-8">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 10.5h19.5M4.05 16.5L2.25 18M21.75 18l-1.8-1.5M1.5 12a10.5 10.5 0 1121 0 10.5 10.5 0 01-21 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-[#5d7aa1]">Liability Disclaimer</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            <span className="text-blue-400 font-semibold">Incisive-Cul</span> will not be liable for any errors
                            or omissions in this information nor for the availability of this information. We will not be liable for any
                            losses, injuries, or damages from the display or use of this information.
                        </p>
                    </div>

                    <div className="p-8">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-[#5d7aa1]">Contact Information</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            For any inquiries, please contact us at:
                            <a
                                href="mailto:contact@yourcompany.com"
                                className="text-blue-400 hover:text-blue-300 ml-2 underline decoration-2 underline-offset-2 transition-colors duration-300 font-semibold"
                            >
                                Incisive-cul@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="p-8">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75v.008H9.75V9.75zm.75 0v.008h-.008V9.75z" />
                                    <path d="M11.25 4.5a.75.75 0 00-.75.75V11a.75.75 0 001.5 0V5.25a.75.75 0 00-.75-.75z" />
                                    <path d="M12 21.75c-3.116 0-5.642-2.187-6.524-5.068a.75.75 0 011.448-.484A4.5 4.5 0 0012 17.25a4.5 4.5 0 004.82-2.385.75.75 0 011.448.484c-.882 2.881-3.408 5.068-6.524 5.068z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.897 10.758a6.52 6.52 0 00-.638-3.093l-3.238-5.614a.75.75 0 00-1.299 0L7.74 7.665a6.52 6.52 0 00-.638 3.093L4.5 16.5h15l-2.603-5.742z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-[#5d7aa1]">Image Rights & Attribution</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            The following Unsplash images have been used on this website with proper attribution:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            {[
                                "Photo by Jei Lee on Unsplash",
                                "Photo by Toa Heftiba on Unsplash",
                                "Photo by Anthony Tran on Unsplash",
                                "Photo by Shane Rounce on Unsplash",
                                "Photo by Anthony DELANOIX on Unsplash",
                                "Photo by Andrew Small on Unsplash",
                                "Photo by Lotus Design N Print on Unsplash",
                                "Photo by raquel raclette on Unsplash",
                                "Photo by Erol Ahmed on Unsplash"
                            ].map((credit, index) => (
                                <div key={index} className="bg-white/5 p-3 rounded-lg border border-white/10">
                                    <span className="text-gray-400">{credit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-12 pt-8 border-t border-white/20">
                    <p className="text-gray-400 text-sm">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LegalNotice;