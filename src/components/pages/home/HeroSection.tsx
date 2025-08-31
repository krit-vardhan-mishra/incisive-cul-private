"use client";
import React from "react";
import { motion, easeInOut } from "framer-motion";
import ChallengeCarousel from "./ChallengeCarousel";
import IntroductionSection from "./sections/IntroductionSection";
import WhyWeExistSection from "./sections/WhyWeExistSection";
import WhatMakesUsDifferentSection from "./sections/WhatMakesUsDifferentSection";
import LearningVerticalsSection from "./sections/LearningVerticalsSection";
import IntegratedJourneySection from "./sections/IntegratedJourneySection";
import BeIncisiveSection from "./sections/BeIncisiveSection";

const HeroSection: React.FC = () => {
    const textVariants = {
        initial: { opacity: 0, y: 50 },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: easeInOut,
            },
        },
    };

    const staggerContainer = {
        initial: {},
        whileInView: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <motion.div
            className="min-h-screen bg-gray-900 text-white font-inter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Introduction Section */}
            <IntroductionSection textVariants={textVariants} staggerContainer={staggerContainer} />

            {/* Why We Exist Section */}
            <WhyWeExistSection textVariants={textVariants} staggerContainer={staggerContainer} />

            {/* What Makes Us Different */}
            <WhatMakesUsDifferentSection textVariants={textVariants} staggerContainer={staggerContainer} />

            {/* Challenge Your Mind */}
            <ChallengeCarousel textVariants={textVariants} />

            {/* Learning Verticals */}
            <LearningVerticalsSection textVariants={textVariants} staggerContainer={staggerContainer} />

            {/* Integrated Journey Section */}
            <IntegratedJourneySection textVariants={textVariants} staggerContainer={staggerContainer} />

            {/* Be Incisive */}
            <BeIncisiveSection textVariants={textVariants} staggerContainer={staggerContainer} />
        </motion.div>
    );
};

export default HeroSection;
