'use client';

import React from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';

const textVariants: Variants = {
    initial: {
        y: 20,
        opacity: 0,
    },
    whileInView: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const staggerContainer: Variants = {
    initial: {},
    whileInView: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function VisionAndPhilosophyClient() {
    const targetRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });

    // Animate the opacity of the main section based on scroll progress
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    return (
        <div className="font-sans">
            <div className="min-h-screen px-6 py-12 md:px-12 lg:px-24">
                {/* Hero Section */}
                <motion.section
                    ref={targetRef} // Attach the ref to the section
                    style={{ opacity }} // Apply the animated opacity
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ margin: '0px 0px -200px 0px' }}
                    className="text-center mb-16 py-16 lg:py-24"
                >
                    <motion.div variants={textVariants} className="mb-6">
                        <span className="text-blue-400 text-lg font-semibold tracking-wider uppercase">
                            Our Core Beliefs and Aspirations
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={textVariants}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight"
                    >
                        Vision & <span className="text-blue-400">Philosophy</span>
                    </motion.h1>

                    <motion.p
                        variants={textVariants}
                        className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        At the heart of Incisive-Cul lies a revolutionary approach to learning—one that challenges conventional wisdom and embraces the transformative power of unlearning.
                    </motion.p>
                </motion.section>

                {/* Core Philosophy Section */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ margin: '0px 0px -200px 0px' }}
                    className="mb-20"
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div variants={textVariants}>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                                Our <span className="text-blue-400">Core Philosophy</span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                                <p>
                                    We believe that true growth comes not from accumulating more knowledge, but from critically examining and releasing outdated beliefs, assumptions, and patterns that no longer serve us.
                                </p>
                                <p>
                                    Learning is a dynamic process of construction and deconstruction, where unlearning creates space for new perspectives and innovative solutions to emerge.
                                </p>
                                <p>
                                    Every individual possesses an innate capacity for transformation when provided with the right environment, tools, and guidance.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={textVariants}
                            className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-500/20"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-blue-400">The Unlearning Principle</h3>
                            <blockquote className="text-xl italic text-gray-300 leading-relaxed border-l-4 border-blue-400 pl-6">
                                &ldquo;The greatest obstacle to discovery is not ignorance—it is the illusion of knowledge. We must first empty our cup before we can fill it with wisdom.&rdquo;
                            </blockquote>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Vision Section */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ margin: '0px 0px -200px 0px' }}
                    className="mb-20"
                >
                    <div className="text-center mb-16">
                        <motion.h2 
                            variants={textVariants}
                            className="text-4xl md:text-5xl font-bold mb-8 text-white"
                        >
                            Our <span className="text-blue-400">Vision</span>
                        </motion.h2>
                        <motion.p 
                            variants={textVariants}
                            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        >
                            To create a world where individuals and organizations embrace continuous learning as a way of life, fostering innovation, adaptability, and meaningful progress.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Transformative Learning",
                                description: "Facilitating deep, meaningful change that goes beyond surface-level knowledge acquisition."
                            },
                            {
                                title: "Inclusive Growth",
                                description: "Creating accessible pathways for learning that honor diverse backgrounds and perspectives."
                            },
                            {
                                title: "Sustainable Impact",
                                description: "Building lasting change that continues to benefit individuals and communities long-term."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={textVariants}
                                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-blue-400">{item.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Impact Statement */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ margin: '0px 0px -200px 0px' }}
                    className="text-center py-16"
                >
                    <motion.div 
                        variants={textVariants}
                        className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-12 rounded-3xl border border-blue-500/30"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            Join Us in Redefining Learning
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Together, we can challenge the status quo, embrace uncertainty as opportunity, and create meaningful change that ripples through generations. The future belongs to those who dare to unlearn.
                        </p>
                    </motion.div>
                </motion.section>
            </div>
        </div>
    );
}
