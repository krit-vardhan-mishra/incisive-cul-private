'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, textVariants } from '@/types/animations';

const IntroductionSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-6">
        {/* Main Heading Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ margin: '0px 0px -200px 0px' }}
          className="text-center mb-20"
        >
          <motion.div variants={textVariants} className="mb-6">
            <span className="text-blue-400 text-lg font-semibold tracking-wider uppercase">
              Welcome to the Future of Learning
            </span>
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            Our Philosophy at{' '}
            <span className="text-transparent bg-clip-text bg-blue-400">
              INCISIVE
            </span>
          </motion.h1>

          <motion.div
            variants={textVariants}
            className="w-24 h-1 bg-blue-400 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Philosophy Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ margin: '0px 0px -200px 0px' }}
          className="max-w-5xl mx-auto space-y-12"
        >
          {/* First Paragraph - Featured */}
          <motion.div variants={textVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-300">
              The Purpose of Learning
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
              At{' '}
              <span className="font-bold bg-blue-300 bg-clip-text text-transparent">
                INCISIVE
              </span>
              , we believe that questioning the purpose of learning—whether
              it&apos;s for a career or the sake of knowledge itself, is an
              enriching endeavor. This distinction is often unreasonable as the
              two paths are deeply interwoven- learning is not just a means to
              an end; it&apos;s a{' '}
              <span className="font-bold text-blue-400">
                journey that empowers individuals
              </span>{' '}
              to grow, adapt, and thrive in a constantly changing world.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroductionSection;