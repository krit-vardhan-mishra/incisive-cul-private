"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ChallengeCarousel = ({ textVariants }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const challenges = [
        {
            id: 1,
            image: "/images/challenge-1.jpeg",
            text: "Discover your interests based on your aptitude",
            subtitle: "Unlock Your Potential",
            description: "Through comprehensive assessments and personalized guidance, we help you identify your natural strengths and align them with your passions."
        },
        {
            id: 2,
            image: "/images/challenge-2.png",
            text: "Explore new challenges to expand your skills",
            subtitle: "Push Your Boundaries",
            description: "Step out of your comfort zone with carefully curated challenges designed to develop critical thinking and problem-solving abilities."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % challenges.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [challenges.length]);

    const imageVariants = {
        enter: (direction: any) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 25 : -25,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        exit: (direction: any) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8,
            rotateY: direction < 0 ? 25 : -25,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        })
    };

    const textSlideVariants = {
        enter: (direction: any) => ({
            y: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.2
            }
        },
        exit: (direction: any) => ({
            y: direction < 0 ? 50 : -50,
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: [0.42, 0, 0.58, 1]
            }
        })
    };

    const containerVariants = {
        initial: { opacity: 0, y: 100 },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut" as const,
                staggerChildren: 0.3
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ margin: '0px 0px -200px 0px' }}
            className="relative"
        >
            {/* Main Content Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[600px] px-4 md:px-8 lg:px-12">

                {/* Image Section */}
                <motion.div
                    variants={textVariants}
                    className="relative flex justify-center lg:justify-end order-first lg:order-last"
                >
                    <div className="relative w-full max-w-lg aspect-square">
                        <AnimatePresence mode="wait" custom={currentIndex}>
                            <motion.div
                                key={challenges[currentIndex].id}
                                custom={currentIndex}
                                variants={imageVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="relative overflow-hidden rounded-tl-xl rounded-br-xl shadow-2xl h-full"
                                style={{ perspective: '1000px' }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 z-10 rounded-tl-xl rounded-br-xl" />
                                <Image
                                    src={challenges[currentIndex].image}
                                    alt="Challenge Your Mind"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    fill
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Decorative Elements */}
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-70"
                        />
                        <motion.div
                            animate={{
                                rotate: [360, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full opacity-60"
                        />
                    </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    variants={textVariants}
                    className="space-y-8 text-center lg:text-left"
                >
                    <AnimatePresence mode="wait" custom={currentIndex}>
                        <motion.div
                            key={challenges[currentIndex].id}
                            custom={currentIndex}
                            variants={textSlideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="space-y-6"
                        >
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                    {challenges[currentIndex].subtitle}
                                </h3>
                                <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
                                    {challenges[currentIndex].text}
                                </p>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    {challenges[currentIndex].description}
                                </p>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl"
                            >
                                Explore More
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </motion.button>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Progress Indicators */}
            <motion.div
                variants={textVariants}
                className="flex justify-center mt-12 space-x-4"
            >
                {challenges.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? 'bg-gradient-to-r from-blue-400 to-purple-500 scale-125'
                                : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </motion.div>

            {/* Auto-progress Bar */}
            <motion.div
                variants={textVariants}
                className="mt-6 w-full max-w-md mx-auto"
            >
                <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{
                            duration: 4,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        key={currentIndex}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ChallengeCarousel;