'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useStairsNavigation } from '@/hooks/useStairsNavigation';
import { staggerContainer, textVariants } from '@/types/animations';

const IntegratedJourneySection = () => {
  const { navigateWithStairs } = useStairsNavigation();
    const [selectedItem, setSelectedItem] = useState<{
        title: string;
        content: string;
        image: string;
    } | null>(null);
    const [isMobileGridView, setIsMobileGridView] = useState(true);
    
    // Ref to store the timeout ID
    const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const about = [
        {
            title: "Learning with a purpose",
            content: "Incisive has been conceptualized as a holistic skill development centre - whether your goals are career-driven or curiosity-led, we aim to empower you with the right tools and effective techniques to move forward with purpose and enjoy the process of understanding.",
            image: "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Collaborative Learning",
            content: "At Incisive, we believe in learning without borders. We believe in classroom sessions as a dynamic space to explore ideas seriously, connect with others who care about the art of thinking, and build the kind of understanding that helps in both life and work.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Public Speaking & Interview Preparation",
            content: "Focused on developing skills in speech/interview preparation, delivery techniques, effective audience engagement strategies to build your communication confidence and leadership presence.",
            image: "https://images.unsplash.com/photo-1709377274134-94ff067f4d0c?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Mentoring & Guided Learning",
            content: "At Incisive, we adopt a learner-centric approach to navigate through the complexities of today's educational material, entrance examination preparations and personality development.",
            image: "/images/about-4.jpg"
        },
    ];

    const handleMobileItemClick = (item: any) => {
        setSelectedItem(item);
        setIsMobileGridView(false);
    };

    const handleBackToGrid = () => {
        setIsMobileGridView(true);
        setSelectedItem(null);
    };

    const handleMouseEnter = (item: any) => {
        // Clear any existing timeout
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = null;
        }
        setSelectedItem(item);
    };

    const handleMouseLeave = () => {
        // Set a timeout to hide the details after 1.5 seconds
        hideTimeoutRef.current = setTimeout(() => {
            setSelectedItem(null);
            hideTimeoutRef.current = null;
        }, 1000);
    };

    // Clean up timeout on component unmount
    React.useEffect(() => {
        return () => {
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
            }
        };
    }, []);

    return (
        <section className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Mobile View */}
                <div className="md:hidden">
                    {isMobileGridView ? (
                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ margin: '0px 0px -200px 0px' }}
                            className="space-y-8"
                        >
                            <div className="text-center">
                                <motion.h1
                                    variants={textVariants}
                                    className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                                >
                                    An Integrated Learning Journey
                                </motion.h1>
                                <motion.p
                                    variants={textVariants}
                                    className="text-gray-300 text-sm px-4"
                                >
                                    Discover our comprehensive approach to learning and development
                                </motion.p>
                            </div>

                            <motion.div
                                variants={staggerContainer}
                                className="grid grid-cols-2 gap-4 p-4"
                            >
                                {about.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={textVariants}
                                        className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 shadow-xl"
                                        onClick={() => handleMobileItemClick(item)}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center p-4">
                                            <h3 className="text-white font-semibold text-sm text-center leading-tight">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ) : (
                        <div className="animate-fadeIn">
                            <div className="flex items-center mb-6">
                                <button
                                    className="text-blue-400 hover:text-blue-300 transition-colors p-2"
                                    onClick={handleBackToGrid}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                </button>
                                <h2 className="text-xl font-bold text-white flex-1 text-center pr-10">
                                    {selectedItem?.title}
                                </h2>
                            </div>

                            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-2xl border border-white/20">
                                <img
                                    src={selectedItem?.image}
                                    alt={selectedItem?.title}
                                    className="w-full h-48 object-cover rounded-xl shadow-lg mb-6"
                                />
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {selectedItem?.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {selectedItem?.content}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Desktop View */}
                <div className="hidden md:block">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ margin: '0px 0px -200px 0px' }}
                        className="flex gap-8 h-screen"
                    >
                        {/* Main Content Area (3/4) - Hidden when item is selected */}
                        <motion.div
                            className={`transition-all duration-700 ease-in-out ${selectedItem ? 'w-0 overflow-hidden' : 'w-3/4'}`}
                        >
                            <motion.div
                                key="main-content"
                                initial={{ opacity: 1, x: 0 }}
                                animate={{ 
                                    opacity: selectedItem ? 0 : 1, 
                                    x: selectedItem ? -50 : 0 
                                }}
                                transition={{ 
                                    duration: 0.5, 
                                    ease: [0.25, 0.46, 0.45, 0.94] 
                                }}
                                className="flex flex-col justify-center h-full p-12"
                            >
                                <motion.h1
                                    variants={textVariants}
                                    className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                                >
                                    An Integrated Learning Journey
                                </motion.h1>
                                <motion.p
                                    variants={textVariants}
                                    className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl"
                                >
                                    As an educator, I believe in helping you succeed in your field of interest by helping you augment domain knowledge from institutional curriculum, hone your professional skills and shape your personality to reach your goals.
                                </motion.p>
                                <motion.button
                                    onClick={() => navigateWithStairs('/about-me')}
                                    whileHover={{ scale: 1.05 }}
                                    variants={textVariants}
                                    className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg w-fit"
                                >
                                    Learn More
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Detail View (3/4) - Shown when item is selected */}
                        <motion.div
                            className={`transition-all duration-700 ease-in-out ${selectedItem ? 'w-3/4' : 'w-0 overflow-hidden'}`}
                        >
                            <motion.div
                                key={selectedItem?.title || 'empty'}
                                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                animate={{ 
                                    opacity: selectedItem ? 1 : 0, 
                                    x: selectedItem ? 0 : 50,
                                    scale: selectedItem ? 1 : 0.95
                                }}
                                exit={{ 
                                    opacity: 0, 
                                    x: 50, 
                                    scale: 0.95 
                                }}
                                transition={{ 
                                    duration: 0.6, 
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                    delay: selectedItem ? 0.1 : 0 
                                }}
                                className="flex flex-col justify-center h-full p-12"
                            >
                                {selectedItem && (
                                    <motion.div 
                                        className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20"
                                        initial={{ y: 20 }}
                                        animate={{ y: 0 }}
                                        transition={{ 
                                            duration: 0.5, 
                                            delay: 0.2,
                                            ease: [0.25, 0.46, 0.45, 0.94] 
                                        }}
                                    >
                                        <motion.img
                                            src={selectedItem.image}
                                            alt={selectedItem.title}
                                            className="w-full h-64 object-cover rounded-xl shadow-lg mb-6"
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ 
                                                duration: 0.6, 
                                                delay: 0.3,
                                                ease: [0.25, 0.46, 0.45, 0.94] 
                                            }}
                                        />
                                        <motion.h2 
                                            className="text-4xl font-bold text-white mb-6"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ 
                                                duration: 0.5, 
                                                delay: 0.4,
                                                ease: [0.25, 0.46, 0.45, 0.94] 
                                            }}
                                        >
                                            {selectedItem.title}
                                        </motion.h2>
                                        <motion.p 
                                            className="text-gray-300 leading-relaxed text-lg"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ 
                                                duration: 0.5, 
                                                delay: 0.5,
                                                ease: [0.25, 0.46, 0.45, 0.94] 
                                            }}
                                        >
                                            {selectedItem.content}
                                        </motion.p>
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.div>

                        {/* Sidebar Images (1/4) */}
                        <motion.div
                            variants={staggerContainer}
                            className="w-1/4 flex flex-col justify-center gap-6 p-4"
                        >
                            {about.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={textVariants}
                                    className={`relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 shadow-lg ${
                                        selectedItem?.title === item.title
                                            ? 'scale-105 ring-2 ring-blue-400'
                                            : 'hover:scale-105'
                                    }`}
                                    onMouseEnter={() => handleMouseEnter(item)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <h3 className="text-white font-semibold text-sm">
                                            {item.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
                
                /* Custom easing for smoother transitions */
                .ease-custom {
                    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
            `}</style>
        </section>
    );
};

export default IntegratedJourneySection;