import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

const BeIncisiveSection = ({ textVariants, staggerContainer }: any) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className="pt-1"
    >
      <div className="relative min-h-[60vh] md:min-h-[80vh] overflow-hidden">
        {/* Background Image */}
        <Image 
          src="/images/banner-image.jpg" 
          fill
          sizes="100vw"
          className="object-cover" 
          alt="INCISIVE learning atmosphere banner"
        />
        
        {/* Vintage gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90" />
        
        {/* Main Text - Responsive */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-sans text-gray-200 leading-tight">
            Be Incisive.
            <br />
            Be Here.
          </h2>
        </div>
        
        {/* Call to Action Link - Responsive */}
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white text-sm md:text-base font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:scale-105 transform"
          >
            Connect With Us
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BeIncisiveSection;