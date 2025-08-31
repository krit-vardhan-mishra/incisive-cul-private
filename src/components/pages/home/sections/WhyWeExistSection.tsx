'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStairsNavigation } from '@/hooks/useStairsNavigation';

interface WhyWeExistSectionProps {
  textVariants: any;
  staggerContainer: any;
}

const WhyWeExistSection: React.FC<WhyWeExistSectionProps> = ({ textVariants, staggerContainer }) => {
  const { navigateWithStairs } = useStairsNavigation();
  return (
    <section className="relative h-auto md:h-screen flex flex-col md:flex-row items-center justify-start p-0">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/image-with-text.jpg"
          alt="Background with text and illustration"
          className="object-cover object-center md:object-left w-full h-full"
        />
        <div className="absolute inset-0 bg-gray-900/60" />
      </div>

      {/* Content Container - Full height with two columns */}
      <div className="relative z-10 w-full h-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="flex items-center justify-center p-6 md:p-12">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ margin: '0px 0px -200px 0px' }}
            className="max-w-xl"
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold mb-8 text-blue-300 drop-shadow-lg"
            >
              Why We Exist?
            </motion.h2>

            <motion.p
              variants={textVariants}
              className="text-lg md:text-xl leading-relaxed text-gray-200 drop-shadow-md"
            >
              Most students finish school or college with good marks but little clarity. They have studied the syllabus but haven't learned how to think or apply what they know. They may have degrees, but still feel unsure about what to do next.{' '}
              <span className="font-bold bg-blue-400 bg-clip-text text-transparent">
                INCISIVE
              </span>{' '}
              is for those students who feel this gap and want to do something about it. We aim to bridge this gap by fostering critical thinking, creativity, and real-world problem-solving skills. Our mission is to empower students to not only excel academically but also to thrive in their personal and professional lives.
            </motion.p>

            <motion.button
              onClick={() => navigateWithStairs('/vision-and-philosophy')}
              whileHover={{ scale: 1.05 }}
              variants={textVariants}
              className="mt-4 inline-block px-6 py-3 text-sm font-semibold text-blue-900 bg-blue-200 rounded-lg shadow-md hover:bg-blue-300 transition duration-200"
            >
              Learn more
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column - Empty (shows background image) */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};

export default WhyWeExistSection;
