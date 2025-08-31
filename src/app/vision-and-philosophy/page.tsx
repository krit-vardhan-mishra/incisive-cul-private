'use client';

import React from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import Head from 'next/head';

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

export default function VisionAndPhilosophyPage() {
    const targetRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });

    // Animate the opacity of the main section based on scroll progress
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    return (
        <>
            <Head>
                <title>Vision and Philosophy | Incisive-Cul</title>
                <meta name="description" content="Understand our vision and philosophy behind the center for unlearning and learning." />
            </Head>
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
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gray-100"
                        >
                            Vision & Philosophy at{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                INCISIVE
                            </span>
                        </motion.h1>

                        <motion.div
                            variants={textVariants}
                            className="w-24 h-1 bg-blue-400 mx-auto rounded-full mb-10"
                        ></motion.div>

                        <motion.p
                            variants={textVariants}
                            className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed text-gray-200 mb-12"
                        >
                            At <strong>INCISIVE</strong>, we cultivate reflective, capable individuals through a learning environment inspired by a Borgesian library—interconnected, infinite, and transformative. Our approach sees knowledge as layered and relational, not linear.
                        </motion.p>

                        <motion.h2
                            variants={textVariants}
                            className="text-3xl md:text-4xl font-bold mb-6 text-blue-400 mt-16"
                        >
                            The Distance of Distinct Vision
                        </motion.h2>

                        <motion.p
                            variants={textVariants}
                            className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-300"
                        >
                            Hi, let’s say I want to look at an object. Where do I place it? In this case, a pen.
                            If I place this object really close to my eyes, I’m not able to view it distinctly.
                            If I place it far away on the horizon, I’m not able to look at it either.
                            Learning in this case is very similar.
                        </motion.p>

                        <motion.p
                            variants={textVariants}
                            className="max-w-3xl mx-auto mt-6 text-lg md:text-xl leading-relaxed text-gray-300"
                        >
                            When we are in school and college, parts of our syllabus and curriculum feel like that pen on the horizon —
                            distant and unclear. But when we start focusing only on exams and careers,
                            we fixate too closely and lose clarity again.
                        </motion.p>

                        <motion.p
                            variants={textVariants}
                            className="max-w-3xl mx-auto mt-6 text-lg md:text-xl leading-relaxed text-gray-300"
                        >
                            At <strong>INCISIVE</strong>, we help balance these distances.
                            We aim to find the <span className="font-semibold underline">optimal distance of distinct vision</span>,
                            where learning becomes clear and purposeful.
                            Join us in this journey of unlearning and learning as we discover
                            not just <em>what</em> to pursue, but also <em>why</em>.
                        </motion.p>
                    </motion.section>


                    <section className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="/images/image.png"
                            alt="Vision and Philosophy"
                            className="object-cover h-full w-full"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center hover:bg-black/50 p-6 transition-all duration-300 bg-black/70">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                                Begin your INCISIVE journey today.
                            </h2>
                            <p className="text-lg mb-6">
                                Reach out to us to take the first step.
                            </p>
                            <button
                                onClick={() => (window.location.href = '/contact')}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition">
                                Find out more about Incisive
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}