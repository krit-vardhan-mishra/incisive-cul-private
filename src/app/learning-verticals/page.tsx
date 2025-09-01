'use client';

import type { Metadata } from "next";
import { motion, easeOut, easeInOut } from "framer-motion";
import { learningVerticals } from "@/data/learningVerticals";
import { VERTICALS_SECTION_TITLE } from "@/data/verticalsConstants";
import { linearGradient } from "framer-motion/client";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeOut }
    }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: easeOut }
    }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: easeOut }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: easeOut
        }
    }
};

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3 }
    }
};

export default function LearningVerticalsPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
            <div className="max-w-6xl mx-auto">

                {/* Hero Section */}
                <motion.section
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2
                        className="text-2xl md:text-3xl font-semibold mb-4 text-gray-200"
                        variants={fadeInUp}
                    >
                        Guiding your quest for knowledge
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        As an educator, I believe in helping you succeed in your field of interest by helping you augment domain knowledge from institutional curriculum, hone your professional skills and shape your personality to reach your goals. I have five defined Verticals for specialized skill development. As a learner, you are free to choose from the five verticals suitable for your needs for the best possible learning outcome.
                    </motion.p>

                    <motion.div
                        className="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"
                        variants={fadeInUp}
                        transition={{ delay: 0.4 }}
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                    />

                    <motion.h1
                        className="text-5xl md:text-6xl font-bold mb-8"
                        variants={fadeInUp}
                        transition={{ delay: 0.6 }}
                    >
                        Learning <span className="text-blue-400">Verticals</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
                        variants={fadeInUp}
                        transition={{ delay: 0.8 }}
                    >
                        {VERTICALS_SECTION_TITLE}
                    </motion.p>
                </motion.section>

                {/* Verticals Section */}
                <motion.section
                    className="mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {learningVerticals.map((vertical, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group"
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.05,
                                    y: -10,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <motion.h3
                                    className="text-2xl font-bold mb-4 text-blue-400"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {vertical.title}
                                </motion.h3>

                                <motion.ul
                                    className="space-y-2"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {vertical.content.map((item, itemIndex) => (
                                        <motion.li
                                            key={itemIndex}
                                            className="text-gray-300 flex items-center"
                                            variants={listItemVariants}
                                        >
                                            <motion.span
                                                className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: (index * 0.1) + (itemIndex * 0.05),
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                            />
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: (index * 0.1) + (itemIndex * 0.05) + 0.1 }}
                                            >
                                                {item}
                                            </motion.span>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Hover effect overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-blue-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    initial={{ opacity: 0 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Call to Action Section */}
                <motion.section
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.div
                        className="p-8 rounded-xl relative overflow-hidden"
                        variants={fadeInUp}
                    >

                        <div className="relative z-10">
                            <motion.h2
                                className="text-3xl font-bold mb-4"
                                variants={fadeInUp}
                                transition={{ delay: 0.2 }}
                            >
                                Ready to Begin Your Journey?
                            </motion.h2>

                            <motion.p
                                className="text-lg text-blue-100 mb-6"
                                variants={fadeInUp}
                                transition={{ delay: 0.4 }}
                            >
                                Join us in exploring these diverse learning paths and unlock your full potential.
                            </motion.p>

                            <motion.button
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 relative overflow-hidden"
                                variants={fadeInUp}
                                transition={{ delay: 0.6 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300"
                                    whileHover={{ opacity: 0.2 }}
                                />
                                <span className="relative z-10">Get Started</span>
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.section>
            </div>

            {/* Floating elements for visual interest */}
            <motion.div
                className="fixed top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-30"
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: easeInOut
                }}
            />

            <motion.div
                className="fixed bottom-20 right-10 w-3 h-3 bg-purple-400 rounded-full opacity-20"
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: easeInOut,
                    delay: 1
                }}
            />
        </div>
    );
}