'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStairsNavigation } from '@/hooks/useStairsNavigation';
import { staggerContainer, textVariants } from '@/types/animations';

const NotFound: React.FC = () => {
  const { navigateWithStairs } = useStairsNavigation();

  return (
    <section className="relative h-screen flex items-center justify-center px-4 md:px-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/image-with-text.jpg"
          alt="Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="whileInView"
        viewport={{ once: true, margin: '0px 0px -200px 0px' }}
        className="relative z-10 max-w-2xl text-center"
      >
        <motion.h1
          variants={textVariants}
          className="text-5xl md:text-6xl font-extrabold text-blue-300 drop-shadow-lg mb-6"
        >
          404
        </motion.h1>

        <motion.h2
          variants={textVariants}
          className="text-2xl md:text-3xl text-gray-100 font-semibold drop-shadow-md mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          variants={textVariants}
          className="text-md md:text-lg text-gray-300 mb-8 leading-relaxed"
        >
          Oops! The page you are looking for doesn't exist or has been moved.
        </motion.p>

        <motion.button
          onClick={() => navigateWithStairs('/')}
          whileHover={{ scale: 1.05 }}
          variants={textVariants}
          className="px-6 py-3 text-sm font-semibold text-blue-900 bg-blue-200 rounded-lg shadow-md hover:bg-blue-300 transition duration-200"
        >
          Go to Homepage
        </motion.button>
      </motion.div>
    </section>
  );
};

export default NotFound;
