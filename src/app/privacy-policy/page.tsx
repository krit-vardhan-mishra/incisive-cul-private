import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Incisive-Cul",
    description: "Read our privacy policy to understand how we protect and handle your personal information.",
};

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen text-white">
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-6 text-white">
                        Privacy Policy
                    </h1>
                    <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
                        Your privacy is critically important to us. This policy outlines how we protect and handle your personal information.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-8">
                    {/* Our Commitment */}
                    <div className="p-8">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-[#5d7aa1]">Our Commitment</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            We are committed to protecting the personal information you share with us. This page outlines
                            how we collect, use, and safeguard your data with the highest standards of privacy protection.
                        </p>
                    </div>

                    {/* Information We Collect */}
                    <div className="p-8">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0-1.125-.504-1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-[#5d7aa1]">Information We Collect</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We may collect personal information such as:
                        </p>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                Your name and contact information
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                Email address for communication purposes
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                Usage data to improve our services
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                                Technical information for security purposes
                            </li>
                        </ul>
                    </div>

                    {/* How We Use Your Information */}
                    <div className="p-8">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-[#5d7aa1]">How We Use Your Information</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            The information we collect is used to:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <h4 className="text-blue-400 font-semibold mb-2">Service Improvement</h4>
                                <p className="text-gray-400 text-sm">Enhance and optimize our services based on usage patterns</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <h4 className="text-blue-400 font-semibold mb-2">Communication</h4>
                                <p className="text-gray-400 text-sm">Send important updates and respond to your inquiries</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <h4 className="text-blue-400 font-semibold mb-2">User Experience</h4>
                                <p className="text-gray-400 text-sm">Personalize and improve your interaction with our platform</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <h4 className="text-blue-400 font-semibold mb-2">Security</h4>
                                <p className="text-gray-400 text-sm">Protect our services and users from potential threats</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="p-8">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-[#5d7aa1]">Contact Us</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            If you have any questions about our Privacy Policy, please don't hesitate to contact us at:
                            <br />
                            <a
                                href="mailto:incisive-cul@gmail.com"
                                className="text-blue-400 hover:text-blue-300  ml-2 underline decoration-2 underline-offset-2 transition-colors duration-300 font-semibold"
                            >
                            incisive-cul@gmail.com
                            </a>
                        </p>
                        <div className="mt-6 p-4 bg-[#011f3d] rounded-xl border border-[#213550]">
                            <p className="text-purple-100 text-sm">
                                <strong>Note:</strong> We are committed to transparency and will respond to all privacy-related
                                inquiries within 48 hours.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-12 pt-8 border-t border-white/20">
                    <p className="text-gray-400 text-sm">
                        Last updated: {new Date().toLocaleDateString()} | Version 2.0
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;