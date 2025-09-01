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

    return (
        <motion.div
            className="min-h-screen bg-gray-900 text-white font-inter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Introduction Section */}
            <IntroductionSection />

            {/* Why We Exist Section */}
            <WhyWeExistSection />

            {/* What Makes Us Different */}
            <WhatMakesUsDifferentSection />

            {/* Challenge Your Mind */}
            <ChallengeCarousel />

            {/* Learning Verticals */}
            <LearningVerticalsSection />

            {/* Integrated Journey Section */}
            <IntegratedJourneySection />

            {/* Be Incisive */}
            <BeIncisiveSection />
        </motion.div>
    );
};

export default HeroSection;
