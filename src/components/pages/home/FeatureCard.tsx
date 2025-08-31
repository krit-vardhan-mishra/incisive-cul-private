"use client";
import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
    emoji: string;
    title: string;
    description: React.ReactNode;
    highlight?: boolean;
    textVariants: {
        initial: { opacity: number; y: number };
        whileInView: {
            opacity: number;
            y: number;
            transition: { duration: number; ease: string };
        };
    };
}


const boxDesign =
    "hover:bg-[#213550] bg-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-900 hover:border-[#546179] transition-colors duration-300";

const FeatureCard: React.FC<FeatureCardProps> = ({
    emoji,
    title,
    description,
    highlight = false,
    textVariants,
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeInOut" as any },
                },
            }}
            className={boxDesign}
        >
            <h3
                className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 ${highlight ? "text-purple-400" : "text-blue-400"
                    }`}
            >
                {emoji} {title}
            </h3>
            <p className="text-sm md:text-lg leading-relaxed text-gray-300">
                {description}
            </p>
        </motion.div>
    );
};

export default FeatureCard;
