'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Compass, 
  BookOpen, 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useStairsNavigation } from '@/hooks/useStairsNavigation';
import { staggerContainer, textVariants } from '@/types/animations';
import { WHO_CAN_JOIN_DATA, AudienceCategory } from '@/data/whoCanJoinData';

const iconMap = {
  GraduationCap,
  Compass,
  BookOpen,
  Sparkles
};

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const WhoCanJoinSection: React.FC = () => {
  const { navigateWithStairs } = useStairsNavigation();

  return (
    <section 
      id="who-can-join"
      aria-labelledby="who-can-join-heading"
      className="py-20 lg:py-28 container mx-auto px-6"
    >
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ margin: '0px 0px -150px 0px', once: true }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <motion.div variants={textVariants} className="mb-3">
          <span className="text-blue-400 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-400/20">
            {WHO_CAN_JOIN_DATA.sectionTag}
          </span>
        </motion.div>

        <motion.h2
          id="who-can-join-heading"
          variants={textVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 leading-tight"
        >
          {WHO_CAN_JOIN_DATA.sectionTitle}
        </motion.h2>

        <motion.div
          variants={textVariants}
          className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"
        />

        <motion.p
          variants={textVariants}
          className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          {WHO_CAN_JOIN_DATA.sectionSubtitle}
        </motion.p>
      </motion.div>

      {/* Audience Cards Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ margin: '0px 0px -150px 0px', once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-14"
      >
        {WHO_CAN_JOIN_DATA.categories.map((category: AudienceCategory) => {
          const IconComponent = iconMap[category.iconName];

          return (
            <motion.article
              key={category.id}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                transition: { duration: 0.25 } 
              }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-gray-700/60 hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between group hover:bg-gray-800/80 shadow-lg hover:shadow-blue-500/10"
            >
              <div>
                {/* Top Badge and Icon */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-105 transition-all duration-300">
                    <IconComponent className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-md bg-gray-700/60 text-gray-300 border border-gray-600/50">
                    {category.badge}
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-200">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-blue-400 font-medium mb-3">
                  {category.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {category.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 mb-6 border-t border-gray-700/50 pt-4" aria-label={`Key focus areas for ${category.title}`}>
                  {category.highlights.map((highlight, index) => (
                    <li key={index} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <button
                type="button"
                onClick={() => navigateWithStairs(category.primaryCtaLink)}
                className="w-full mt-auto pt-3 pb-2.5 px-4 rounded-lg bg-gray-700/40 hover:bg-blue-600 text-gray-200 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 group/btn border border-gray-600/40 hover:border-blue-500"
              >
                <span>{category.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </button>
            </motion.article>
          );
        })}
      </motion.div>

      {/* Clarification & Bottom Banner */}
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ margin: '0px 0px -100px 0px', once: true }}
        className="max-w-4xl mx-auto bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-slate-900/60 p-5 sm:p-6 rounded-xl border border-blue-500/20 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
      >
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
          {WHO_CAN_JOIN_DATA.bottomBanner.text}
        </p>
        <button
          type="button"
          onClick={() => navigateWithStairs(WHO_CAN_JOIN_DATA.bottomBanner.ctaLink)}
          className="whitespace-nowrap px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex-shrink-0"
        >
          {WHO_CAN_JOIN_DATA.bottomBanner.ctaText}
        </button>
      </motion.div>
    </section>
  );
};

export default WhoCanJoinSection;
