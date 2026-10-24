'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Compass, Users2, Sparkles } from 'lucide-react';
import { staggerContainer, textVariants } from '@/types/animations';

const differentiators = [
  {
    icon: Lightbulb,
    title: 'Inquiry Over Rote Memorisation',
    description:
      'We challenge conventional educational methods by focusing on foundational questioning, conceptual clarity, and independent reasoning rather than passive syllabus absorption.',
  },
  {
    icon: Users2,
    title: 'Small, Discussion-Led Cohorts',
    description:
      'Small, sharp, and informal learning environments where every voice is heard, discussions deepen, and thinking is refined through collaborative dialogue.',
  },
  {
    icon: Compass,
    title: 'Interdisciplinary Synthesis',
    description:
      'Connecting literature, political theory, competitive aptitude, and ethics to provide a multifaceted understanding of real-world complexities.',
  },
  {
    icon: Sparkles,
    title: 'The Conscious Art of Unlearning',
    description:
      'Recognising and deconstructing outdated assumptions and cognitive biases to create space for genuine, liberating intellectual growth.',
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const WhatMakesUsDifferentSection: React.FC = () => {
  return (
    <section
      id="what-makes-us-different"
      aria-labelledby="differentiators-heading"
      className="py-20 lg:py-28 container mx-auto px-6"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ margin: '0px 0px -150px 0px', once: true }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <motion.div variants={textVariants} className="mb-3">
          <span className="text-blue-400 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-400/20">
            Our Pedagogical Edge
          </span>
        </motion.div>

        <motion.h2
          id="differentiators-heading"
          variants={textVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 leading-tight"
        >
          What Makes Us Different
        </motion.h2>

        <motion.div
          variants={textVariants}
          className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"
        />

        <motion.p
          variants={textVariants}
          className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          INCISIVE is not an ordinary coaching academy. We are a dedicated space for those who want to examine ideas critically, move beyond marks and degrees, and build genuine clarity for life and work.
        </motion.p>
      </motion.div>

      {/* Grid of Differentiators */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ margin: '0px 0px -150px 0px', once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {differentiators.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-gray-700/60 hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between group hover:bg-gray-800/80 shadow-lg hover:shadow-blue-500/10"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 group-hover:scale-105 transition-all duration-300">
                  <IconComponent className="w-6 h-6" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default WhatMakesUsDifferentSection;