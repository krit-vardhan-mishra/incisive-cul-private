import React from 'react';
import { InstagramIcon, LinkedinIcon, YoutubeIcon, MailIcon, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {

    const links = [
        { href: 'https://www.instagram.com/incisive_cul/', icon: InstagramIcon },
        { href: 'https://www.linkedin.com/company/incisive-centre-for-unlearning-and-learning/', icon: LinkedinIcon },
        { href: 'https://www.youtube.com/@Incisive-CUL', icon: YoutubeIcon },
        { href: 'mailto:incisive-cul@gmail.com', icon: MailIcon },
        { href: 'tel:+919286284370', icon: Phone },
    ]

    return (
        <div className="flex flex-col md:flex-col justify-center text-center items-center bg-gray-900 text-gray-300 gap-3 py-6 px-4 md:px-12 border-t border-gray-700">
            <div className="flex items-center space-x-4">
                <Link href="/legal-notice" className="underline">
                    Legal Notice
                </Link>
                <Link href="/privacy-policy" className="underline">
                    Privacy Policy
                </Link>
            </div>
            <span>© Copyright. All rights reserved.</span>
            <div className="flex items-center justify-center space-x-4">
                {links.map(({ href, icon: Icon }, index) => (
                    <Link key={index} href={href} className="hover:text-blue-400 transition-colors">
                        <Icon className="h-6 w-6" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Footer;