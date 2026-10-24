import React from 'react';
import { InstagramIcon, LinkedinIcon, YoutubeIcon, MailIcon, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {

    const links = [
        { href: 'https://www.instagram.com/incisive_cul/', icon: InstagramIcon, label: 'Follow INCISIVE on Instagram', external: true },
        { href: 'https://www.linkedin.com/company/incisive-centre-for-unlearning-and-learning/', icon: LinkedinIcon, label: 'Connect with INCISIVE on LinkedIn', external: true },
        { href: 'https://www.youtube.com/@Incisive-CUL', icon: YoutubeIcon, label: 'Watch INCISIVE on YouTube', external: true },
        { href: 'mailto:incisive-cul@gmail.com', icon: MailIcon, label: 'Email INCISIVE at incisive-cul@gmail.com', external: false },
        { href: 'tel:+919286284370', icon: Phone, label: 'Call INCISIVE at +91 92862 84370', external: false },
    ];

    return (
        <footer className="flex flex-col md:flex-col justify-center text-center items-center bg-gray-900 text-gray-300 gap-3 py-6 px-4 md:px-12 border-t border-gray-700">
            <div className="flex items-center space-x-4">
                <Link href="/legal-notice" className="underline hover:text-white transition-colors">
                    Legal Notice
                </Link>
                <Link href="/privacy-policy" className="underline hover:text-white transition-colors">
                    Privacy Policy
                </Link>
            </div>
            <span>© Copyright. All rights reserved.</span>
            <div className="flex items-center justify-center space-x-4">
                {links.map(({ href, icon: Icon, label, external }, index) => (
                    <a
                        key={index}
                        href={href}
                        aria-label={label}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-sm"
                    >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;