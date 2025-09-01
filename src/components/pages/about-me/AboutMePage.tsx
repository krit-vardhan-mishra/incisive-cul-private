'use client';

import { useStairsNavigation } from "@/hooks/useStairsNavigation";
import AppointmentBooking from "./AppointmentBooking";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutMePage() {
    const { navigateWithStairs } = useStairsNavigation();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Transform values for parallax effects
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const philosophyItems = [
        {
            title: "Customized Skill Development",
            description: "Tailored learning experiences that adapt to your unique strengths, goals, and learning style. We believe every individual has a distinct path to excellence.",
            icon: "🎯",
            delay: 0.1
        },
        {
            title: "Collective Responsibility",
            description: "Building communities of learners who support each other's growth. Together, we create an ecosystem where knowledge sharing amplifies everyone's potential.",
            icon: "🤝",
            delay: 0.2
        },
        {
            title: "Relevance & Thought Leadership",
            description: "Connecting learning to real-world applications and emerging trends. We prepare you not just to follow, but to lead in your chosen field.",
            icon: "💡",
            delay: 0.3
        }
    ];

    return (
        <div ref={containerRef} className="min-h-screen text-white bg-gray-900">
            {/* Hero Section */}
            <motion.section
                className="flex items-center justify-center py-16 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Dr. Abhishek Juneja
                        </motion.h1>
                        <motion.div
                            className="text-lg md:text-xl text-gray-300 font-medium mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Scholar, Educator, Public Speaker
                        </motion.div>

                        <motion.p
                            className="text-gray-300 leading-relaxed mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            I have over a decade of teaching experience, including six years at
                            the University-level and over 7 years as a competitive-exam-coach.
                            <br />
                            <br />
                            With a background in Engineering, Philosophy, Political Science and
                            experience in research, film-making, journalism, event-organising,
                            and competitive-exam-centric mentoring, I teach a range of subjects
                            across the social science, humanities, and liberal arts spectrum.
                        </motion.p>

                        <motion.a
                            href="https://www.linkedin.com/in/abhishekjuneja/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-xl text-blue-400 hover:text-blue-300 transition-colors mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Connect with me on LinkedIn
                        </motion.a>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.video
                            autoPlay
                            loop
                            muted
                            src="/speech.mp4"
                            className="object-cover rounded-lg shadow-lg w-full max-w-md h-auto"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </div>
            </motion.section>

            {/* Philosophy Section - Enhanced Design */}
            <motion.section
                className="py-20 px-4 relative overflow-hidden"
                style={{ y, opacity }}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-32 h-32 border border-blue-400 rounded-full"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 border border-blue-400 rounded-full"></div>
                    <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-blue-400 rounded-full"></div>
                </div>

                <div className="max-w-6xl mx-auto relative">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h4
                            className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            My Philosophy
                            <motion.div
                                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                viewport={{ once: true }}
                            />
                        </motion.h4>
                        <motion.p
                            className="text-gray-300 text-lg max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Three core principles that guide every interaction and shape the learning experience at Incisive Centre
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {philosophyItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="group relative"
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: item.delay,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 h-full transition-all duration-300 group-hover:border-blue-400/50 group-hover:shadow-2xl group-hover:shadow-blue-400/10">
                                    {/* Icon */}
                                    <motion.div
                                        className="text-5xl mb-6 text-center"
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: item.delay + 0.2,
                                            type: "spring",
                                            stiffness: 150
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        {item.icon}
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h5
                                        className="text-xl font-bold text-white mb-4 text-center group-hover:text-blue-300 transition-colors duration-300"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: item.delay + 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        {item.title}
                                    </motion.h5>

                                    {/* Description */}
                                    <motion.p
                                        className="text-gray-300 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: item.delay + 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        {item.description}
                                    </motion.p>

                                    {/* Hover Effect Background */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={false}
                                    />

                                    {/* Animated Border */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl"
                                        initial={false}
                                        whileHover={{
                                            background: [
                                                "linear-gradient(0deg, transparent, transparent)",
                                                "linear-gradient(180deg, rgba(59, 130, 246, 0.1), transparent)",
                                                "linear-gradient(360deg, transparent, transparent)"
                                            ]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Philosophy Quote */}
                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <motion.blockquote
                            className="text-xl md:text-2xl font-light text-gray-300 italic max-w-4xl mx-auto relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-4xl text-blue-400 absolute -top-4 -left-4">"</span>
                            Education is not the filling of a pail, but the lighting of a fire.
                            At Incisive Centre, we kindle that flame through unlearning what limits us
                            and learning what liberates our potential.
                            <span className="text-4xl text-blue-400 absolute">"</span>
                        </motion.blockquote>
                    </motion.div>
                </div>
            </motion.section>

            {/* Call to Action Section */}
            <motion.section
                className="py-16 px-4 bg-black/50"
                style={{ backgroundImage: "url('/images/book-1.jpg')" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center relative min-h-[400px] bg-cover bg-center bg-no-repeat">
                    <motion.div
                        className="absolute inset-0 flex flex-col justify-center items-center rounded-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-3xl font-bold mb-6 text-white bg-black/50 p-4 rounded-lg"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Take the First Step...
                        </motion.h2>
                        <motion.p
                            className="text-gray-100 text-lg mb-8 max-w-3xl mx-auto bg-black/50 p-4 rounded-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            The Incisive Centre for Unlearning is specially designed for those of you who are
                            true knowledge seekers who wish to go beyond accumulating degrees and emerge as
                            thought-leaders in their respective fields of interest.
                        </motion.p>
                        <motion.button
                            onClick={() => navigateWithStairs('/contact')}
                            className="px-8 py-4 text-lg font-semibold text-blue-900 bg-blue-200 rounded-lg shadow-md hover:bg-blue-300 transition duration-200"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Find out more about Incisive
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>

            {/* Schedule Section */}
            <motion.section
                className="py-16 px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <AppointmentBooking />
            </motion.section>

            <motion.section
                className="py-20 px-6 bg-gray-800/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Transform Your Learning Journey?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join us in exploring new paradigms of education and personal development.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigateWithStairs('/featured-works')}
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                            Explore Our Work
                        </button>
                        <button
                            onClick={() => navigateWithStairs('/contact')}
                            className="px-8 py-4 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 font-semibold rounded-lg transition-all duration-300">
                            Get In Touch
                        </button>
                    </div>
                </div>
            </motion.section>

            {/* Coming Soon Section */}
            <motion.section
                className="py-16 px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <p className="text-gray-300 text-lg">
                            <strong className="text-white">Coming Soon:</strong> Personal journey, professional
                            background, and the inspiration behind the Center for Unlearning
                            and Learning.
                        </p>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}