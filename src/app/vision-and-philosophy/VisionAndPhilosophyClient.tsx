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

const fadeInUpVariants: Variants = {
    initial: {
        y: 40,
        opacity: 0,
    },
    whileInView: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
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
                    ref={targetRef}
                    style={{ opacity }}
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ margin: '0px 0px -200px 0px' }}
                    className="text-center mb-16 py-16 lg:py-24"
                >
                    <motion.div variants={textVariants} className="mb-6">
                        <span className="text-blue-400 text-lg font-semibold tracking-wider uppercase">
                            Center for Unlearning and Learning
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

                {/* Center for Unlearning and Learning Introduction */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ margin: '0px 0px -200px 0px' }}
                    className="mb-20"
                >
                    <div className="max-w-5xl mx-auto">
                        <motion.div variants={textVariants} className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                Welcome to Our <span className="text-blue-400">Center</span>
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Incisive-Cul stands as a pioneering Center for Unlearning and Learning, where traditional educational paradigms are reimagined and transformative growth becomes possible.
                            </p>
                        </motion.div>

                        <motion.div 
                            variants={textVariants}
                            className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-10 rounded-3xl border border-indigo-500/30"
                        >
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4 text-blue-400">Unlearning</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        The conscious process of identifying, questioning, and releasing outdated mental models, biases, and assumptions that limit our potential and hinder authentic growth.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4 text-purple-400">Learning</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        The dynamic integration of new knowledge, skills, and perspectives that emerges naturally when we create space through unlearning, fostering innovation and wisdom.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
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
                                <p>
                                    Education should be a dialogue, not a monologue—where learners become co-creators of knowledge rather than passive recipients.
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

                {/* Foundational Pillars */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ margin: '0px 0px -200px 0px' }}
                    className="mb-20"
                >
                    <motion.div variants={textVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Foundational <span className="text-blue-400">Pillars</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Our approach is built upon four interconnected pillars that guide every aspect of our Center for Unlearning and Learning.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Critical Inquiry",
                                icon: "🔍",
                                description: "Questioning assumptions and exploring the 'why' behind established practices and beliefs."
                            },
                            {
                                title: "Adaptive Mindset",
                                icon: "🧠",
                                description: "Cultivating flexibility and openness to change as fundamental life skills."
                            },
                            {
                                title: "Collaborative Discovery",
                                icon: "🤝",
                                description: "Learning through dialogue, shared experiences, and collective wisdom."
                            },
                            {
                                title: "Reflective Practice",
                                icon: "🪞",
                                description: "Regular examination of our thoughts, actions, and their underlying motivations."
                            }
                        ].map((pillar, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUpVariants}
                                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                <div className="text-4xl mb-4 text-center">{pillar.icon}</div>
                                <h3 className="text-xl font-semibold mb-4 text-blue-400 text-center">{pillar.title}</h3>
                                <p className="text-gray-300 leading-relaxed text-center">{pillar.description}</p>
                            </motion.div>
                        ))}
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
                                description: "Facilitating deep, meaningful change that goes beyond surface-level knowledge acquisition to reshape how we think and act."
                            },
                            {
                                title: "Inclusive Growth",
                                description: "Creating accessible pathways for learning that honor diverse backgrounds, perspectives, and ways of knowing."
                            },
                            {
                                title: "Sustainable Impact",
                                description: "Building lasting change that continues to benefit individuals, communities, and organizations for generations to come."
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

                {/* What Sets Us Apart */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ margin: '0px 0px -200px 0px' }}
                    className="mb-20"
                >
                    <div className="max-w-6xl mx-auto">
                        <motion.div variants={textVariants} className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                What Sets Our <span className="text-blue-400">Center</span> Apart
                            </h2>
                            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                                As a dedicated Center for Unlearning and Learning, we offer a unique approach that distinguishes us from traditional educational institutions.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            <motion.div variants={textVariants} className="space-y-8">
                                <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 p-6 rounded-xl border border-red-500/30">
                                    <h3 className="text-2xl font-semibold mb-4 text-red-400">Traditional Learning</h3>
                                    <ul className="space-y-3 text-gray-300">
                                        <li>• Focuses on knowledge accumulation</li>
                                        <li>• One-size-fits-all approaches</li>
                                        <li>• Passive information consumption</li>
                                        <li>• Rigid curriculum structures</li>
                                        <li>• Individual competition emphasis</li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div variants={textVariants} className="space-y-8">
                                <div className="bg-gradient-to-r from-blue-900/20 to-green-900/20 p-6 rounded-xl border border-blue-500/30">
                                    <h3 className="text-2xl font-semibold mb-4 text-blue-400">Incisive-Cul Approach</h3>
                                    <ul className="space-y-3 text-gray-300">
                                        <li>• Balances learning with strategic unlearning</li>
                                        <li>• Personalized transformation journeys</li>
                                        <li>• Active engagement and co-creation</li>
                                        <li>• Flexible, adaptive methodologies</li>
                                        <li>• Collaborative community building</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* The Unlearning Process */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ margin: '0px 0px -200px 0px' }}
                    className="mb-20"
                >
                    <div className="max-w-6xl mx-auto">
                        <motion.div variants={textVariants} className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                The <span className="text-blue-400">Unlearning</span> Process
                            </h2>
                            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                                Our systematic approach to unlearning follows a carefully designed process that creates lasting transformation.
                            </p>
                        </motion.div>

                        <div className="relative">
                            {/* Process Steps */}
                            <div className="space-y-12">
                                {[
                                    {
                                        step: "01",
                                        title: "Awareness",
                                        description: "Identifying limiting beliefs, outdated assumptions, and cognitive patterns that no longer serve growth.",
                                        color: "blue"
                                    },
                                    {
                                        step: "02", 
                                        title: "Deconstruction",
                                        description: "Carefully examining the origins and validity of these patterns through guided inquiry and reflection.",
                                        color: "purple"
                                    },
                                    {
                                        step: "03",
                                        title: "Release",
                                        description: "Consciously letting go of what no longer serves, creating space for new possibilities to emerge.",
                                        color: "green"
                                    },
                                    {
                                        step: "04",
                                        title: "Integration",
                                        description: "Embodying new perspectives and ways of being that align with authentic values and aspirations.",
                                        color: "orange"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUpVariants}
                                        className="flex items-start gap-8"
                                    >
                                        <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center text-white font-bold text-lg`}>
                                            {item.step}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`text-2xl font-semibold mb-3 text-${item.color}-400`}>{item.title}</h3>
                                            <p className="text-gray-300 leading-relaxed text-lg">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Connecting Line */}
                            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 opacity-30"></div>
                        </div>
                    </div>
                </motion.section>

                {/* Our Methodology */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ margin: '0px 0px -200px 0px' }}
                    className="mb-20"
                >
                    <div className="max-w-6xl mx-auto">
                        <motion.div variants={textVariants} className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                Our <span className="text-blue-400">Methodology</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                                We employ evidence-based practices combined with innovative approaches to create transformative learning experiences.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Socratic Dialogue",
                                    description: "Engaging in deep questioning that reveals assumptions and opens new pathways of understanding.",
                                    features: ["Guided self-discovery", "Critical thinking development", "Assumption challenging", "Perspective expansion"]
                                },
                                {
                                    title: "Experiential Learning",
                                    description: "Learning through direct experience, reflection, and application in real-world contexts.",
                                    features: ["Hands-on workshops", "Real-world application", "Reflective practice", "Immediate feedback loops"]
                                },
                                {
                                    title: "Mindfulness Integration",
                                    description: "Incorporating contemplative practices that enhance self-awareness and present-moment clarity.",
                                    features: ["Meditation practices", "Body awareness", "Emotional intelligence", "Present-moment focus"]
                                },
                                {
                                    title: "Systems Thinking",
                                    description: "Understanding interconnections and patterns that influence learning and unlearning processes.",
                                    features: ["Holistic perspective", "Pattern recognition", "Interconnection awareness", "Complexity navigation"]
                                }
                            ].map((method, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUpVariants}
                                    className="bg-gray-800/40 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                                >
                                    <h3 className="text-2xl font-semibold mb-4 text-blue-400">{method.title}</h3>
                                    <p className="text-gray-300 mb-6 leading-relaxed">{method.description}</p>
                                    <div className="space-y-2">
                                        {method.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                <span className="text-gray-400">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Our Commitment */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ margin: '0px 0px -200px 0px' }}
                    className="mb-20"
                >
                    <div className="max-w-5xl mx-auto">
                        <motion.div variants={textVariants} className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                Our <span className="text-blue-400">Commitment</span>
                            </h2>
                        </motion.div>

                        <motion.div 
                            variants={textVariants}
                            className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-10 rounded-3xl border border-gray-600"
                        >
                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-6 text-blue-400">To Our Learners</h3>
                                    <div className="space-y-4 text-gray-300">
                                        <p>• Creating safe spaces for vulnerability and authentic exploration</p>
                                        <p>• Honoring each person's unique journey and pace of transformation</p>
                                        <p>• Providing ongoing support throughout the unlearning process</p>
                                        <p>• Celebrating breakthroughs and navigating challenges together</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-6 text-purple-400">To Society</h3>
                                    <div className="space-y-4 text-gray-300">
                                        <p>• Contributing to a more conscious and adaptive global community</p>
                                        <p>• Developing leaders who can navigate complexity with wisdom</p>
                                        <p>• Fostering innovation through diverse perspectives and approaches</p>
                                        <p>• Building bridges between different ways of knowing and being</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Future Vision */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ margin: '0px 0px -200px 0px' }}
                    className="mb-20"
                >
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.h2 
                            variants={textVariants}
                            className="text-4xl md:text-5xl font-bold mb-8 text-white"
                        >
                            Looking <span className="text-blue-400">Forward</span>
                        </motion.h2>
                        
                        <motion.div 
                            variants={textVariants}
                            className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 p-10 rounded-3xl border border-indigo-500/40"
                        >
                            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                We envision a future where our Center for Unlearning and Learning becomes a catalyst for global transformation—where the skills of conscious unlearning become as fundamental as reading and writing.
                            </p>
                            
                            <div className="grid md:grid-cols-3 gap-8 mt-12">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400 mb-2">10,000+</div>
                                    <p className="text-gray-300">Lives Transformed</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                                    <p className="text-gray-300">Organizations Evolved</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-400 mb-2">Global</div>
                                    <p className="text-gray-300">Movement Growing</p>
                                </div>
                            </div>
                        </motion.div>
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
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                            Together, we can challenge the status quo, embrace uncertainty as opportunity, and create meaningful change that ripples through generations. The future belongs to those who dare to unlearn.
                        </p>
                        <motion.div 
                            variants={textVariants}
                            className="inline-flex items-center gap-2 text-blue-400 font-semibold"
                        >
                            <span>Be part of the transformation</span>
                            <span className="text-2xl">→</span>
                        </motion.div>
                    </motion.div>
                </motion.section>
            </div>

            {/* Call to Action Section */}
            <section className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <img
                    src="/images/image.png"
                    alt="Vision and Philosophy - Center for Unlearning and Learning"
                    className="object-cover h-full w-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center hover:bg-black/50 p-6 transition-all duration-300 bg-black/70">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Begin your INCISIVE journey today.
                    </h2>
                    <p className="text-lg mb-2">
                        Discover the power of unlearning at our Center for Unlearning and Learning.
                    </p>
                    <p className="text-lg mb-6">
                        Reach out to us to take the first step toward transformation.
                    </p>
                    <button
                        onClick={() => (window.location.href = '/contact')}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105">
                        Explore Incisive-Cul
                    </button>
                </div>
            </section>
        </div>
    );
}