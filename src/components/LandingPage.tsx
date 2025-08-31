'use client';

import { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";

interface LandingPageProps {
    onAnimationComplete: () => void;
}

export default function LandingPage({ onAnimationComplete }: LandingPageProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const handleVideoEnd = () => {
            setIsAnimating(false);
            onAnimationComplete();
        };

        const videoElement = videoRef.current;
        if (videoElement) {
            // Set up video for autoplay
            videoElement.muted = true;
            videoElement.playsInline = true;

            // Try to play the video
            const playPromise = videoElement.play();

            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Autoplay failed:", error);
                    // Fallback: play on first user interaction
                    const handleFirstClick = () => {
                        videoElement.play();
                        document.removeEventListener('click', handleFirstClick);
                    };
                    document.addEventListener('click', handleFirstClick);
                });
            }

            videoElement.addEventListener('ended', handleVideoEnd);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('ended', handleVideoEnd);
            }
        };
    }, [onAnimationComplete]);

    if (!isAnimating) {
        return null;
    }

    const textVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.1,
            },
        },
    };

    const lineVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="fixed inset-0 bg-[#1f2d44] flex flex-col justify-center items-center z-50">
            <div
                className="mix-blend-multiply"
                style={{
                    backgroundColor: '#1f2d44',
                    WebkitMask: 'linear-gradient(white, white)',
                    mask: 'linear-gradient(white, white)'
                }}
            >
                <video
                    ref={videoRef}
                    src="/book-animation.mp4"
                    className="w-full h-full mtz-vlc-lfdconleibeikjpklmlahaihpnkpmlch"
                    autoPlay
                    playsInline
                    preload="auto"
                    style={{
                        filter: 'brightness(1.1) contrast(1.05)'
                    }}
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            <motion.div
                className="text-white text-center mt-8 px-4"
                variants={textVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
                    variants={lineVariants}
                >
                    Incisive-Cul
                </motion.p>
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl mt-2 font-medium"
                    variants={lineVariants}
                >
                    Holistic Learning at INCISIVE: Empower Your Journey.
                </motion.p>
            </motion.div>
        </div>
    );
}