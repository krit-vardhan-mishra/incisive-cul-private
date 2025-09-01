
import { useState, useEffect, useRef } from "react";
import { motion, Variants, useAnimation } from "framer-motion";

interface LandingPageProps {
    onAnimationComplete: () => void;
}

export default function LandingPage({ onAnimationComplete }: LandingPageProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isAnimating, setIsAnimating] = useState(true);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleVideoEnd = () => {
            // Start exit animation before completing
            controls.start("exit").then(() => {
                setIsAnimating(false);
                onAnimationComplete();
            });
        };

        const handleVideoLoaded = () => {
            setVideoLoaded(true);
            // Start the visible animation immediately when video loads
            controls.start("visible");
        };

        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.muted = true;
            videoElement.playsInline = true;

            const playPromise = videoElement.play();

            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Autoplay failed:", error);
                    // Fallback: start animation anyway after a delay
                    setTimeout(() => {
                        if (!videoLoaded) {
                            setVideoLoaded(true);
                            controls.start("visible");
                        }
                    }, 2000);
                });
            }

            videoElement.addEventListener('ended', handleVideoEnd);
            videoElement.addEventListener('loadeddata', handleVideoLoaded);
        }

        // Fallback: start animation after 3 seconds if video hasn't loaded
        const fallbackTimer = setTimeout(() => {
            if (!videoLoaded) {
                setVideoLoaded(true);
                controls.start("visible");
            }
        }, 3000);

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('ended', handleVideoEnd);
                videoElement.removeEventListener('loadeddata', handleVideoLoaded);
            }
            clearTimeout(fallbackTimer);
        };
    }, [onAnimationComplete, controls]);

    if (!isAnimating) {
        return null;
    }

    const containerVariants: Variants = {
        hidden: { 
            opacity: 0,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            scale: 1.05,
            y: -20,
            transition: {
                duration: 0.8,
                ease: "easeIn"
            }
        }
    };

    const videoVariants: Variants = {
        hidden: { 
            opacity: 0,
            scale: 0.8,
            rotateY: -10
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                delay: 0.3,
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const textVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 1,
                duration: 0.8,
                staggerChildren: 0.2,
            },
        },
    };

    const titleVariants: Variants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
    };

    const subtitleVariants: Variants = {
        hidden: { 
            opacity: 0, 
            y: 20,
            x: -10
        },
        visible: { 
            opacity: 1, 
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
    };

    const glowVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: [0, 0.3, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div 
            className="fixed inset-0 bg-gradient-to-br from-[#1f2d44] via-[#2a3f5f] to-[#1f2d44] flex flex-col justify-center items-center z-50 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Animated background elements */}
            <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 50%, rgba(79, 172, 254, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 20%, rgba(79, 172, 254, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 40% 70%, rgba(79, 172, 254, 0.1) 0%, transparent 50%)"
                    ]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Video container with enhanced animations */}
            <motion.div
                className="relative mix-blend-multiply"
                variants={videoVariants}
                style={{
                    backgroundColor: '#1f2d44',
                    WebkitMask: 'linear-gradient(white, white)',
                    mask: 'linear-gradient(white, white)',
                    perspective: '1000px'
                }}
            >
                {/* Glow effect behind video */}
                <motion.div
                    className="absolute inset-0 bg-blue-400 rounded-lg blur-xl"
                    variants={glowVariants}
                    style={{ zIndex: -1 }}
                />
                
                <motion.video
                    ref={videoRef}
                    src="/book-animation.mp4"
                    className="w-full h-full mtz-vlc-lfdconleibeikjpklmlahaihpnkpmlch rounded-lg shadow-2xl"
                    autoPlay
                    playsInline
                    preload="auto"
                    style={{
                        filter: 'brightness(1.1) contrast(1.05) drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    Your browser does not support the video tag.
                </motion.video>
            </motion.div>

            {/* Enhanced text animations */}
            <motion.div
                className="text-white text-center mt-8 px-4 relative"
                variants={textVariants}
            >
                {/* Text glow effect */}
                <motion.div
                    className="absolute inset-0 text-center"
                    variants={glowVariants}
                >
                    <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-blue-300 blur-sm opacity-50">
                        Incisive-Cul
                    </p>
                </motion.div>

                {/* Main title with typewriter effect */}
                <motion.div variants={titleVariants}>
                    <motion.p
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                    >
                        {"Incisive-Cul".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 1.5 + index * 0.1,
                                    duration: 0.3
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.p>
                </motion.div>

                {/* Subtitle with slide-in effect */}
                <motion.div variants={subtitleVariants}>
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl mt-2 font-medium text-blue-100 relative z-10"
                        whileHover={{ 
                            scale: 1.05,
                            color: "#93c5fd"
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        Center for Unlearning and Learning
                    </motion.p>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                    className="flex justify-center mt-6 space-x-2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-blue-400 rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>

            {/* Loading indicator for video */}
            {!videoLoaded && (
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            )}
        </motion.div>
    );
}