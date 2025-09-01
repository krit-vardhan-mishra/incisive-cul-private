'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStairsNavigation } from '@/hooks/useStairsNavigation';
import VerticalsCard from '../VerticalsCard';
import { textVariants, staggerContainer } from '@/types/animations';
import { learningVerticals } from '@/data/learningVerticals';
import {
  VERTICALS_SECTION_TITLE,
  VERTICALS_LEARN_MORE_BUTTON_TEXT,
  VERTICALS_GRID_CLASSES,
  VERTICALS_SECTION_CLASSES,
  VERTICALS_TITLE_CLASSES,
  VERTICALS_BUTTON_CLASSES,
  VERTICALS_VIEWPORT_MARGIN,
  LEARNING_VERTICALS_ROUTE
} from '@/data/verticalsConstants';

const LearningVerticalsSection = () => {
  const { navigateWithStairs } = useStairsNavigation();

  return (
    <section className={VERTICALS_SECTION_CLASSES}>
      <div className="flex flex-row justify-between">
        <h1 className={VERTICALS_TITLE_CLASSES}>
          {VERTICALS_SECTION_TITLE}
        </h1>

        <motion.button
          onClick={() => navigateWithStairs(LEARNING_VERTICALS_ROUTE)}
          whileHover={{ scale: 1.05 }}
          variants={textVariants}
          className={VERTICALS_BUTTON_CLASSES}
        >
          {VERTICALS_LEARN_MORE_BUTTON_TEXT}
        </motion.button>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ margin: VERTICALS_VIEWPORT_MARGIN }}
        className={VERTICALS_GRID_CLASSES}
      >
        {learningVerticals.map((vertical, idx) => (
          <VerticalsCard key={idx} title={vertical.title} content={vertical.content} textVariants={textVariants} />
        ))}
      </motion.div>
    </section>
  );
};

export default LearningVerticalsSection;
