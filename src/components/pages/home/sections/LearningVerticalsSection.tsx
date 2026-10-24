'use client';

import React from 'react';
import Link from 'next/link';
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

import PhaansFeatureCard from './PhaansFeatureCard';

const LearningVerticalsSection = () => {
  const { navigateWithStairs } = useStairsNavigation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigateWithStairs(href);
  };

  return (
    <section className={VERTICALS_SECTION_CLASSES} aria-labelledby="verticals-heading">
      <div className="flex flex-row justify-between items-center mb-4 sm:mb-0">
        <h2 id="verticals-heading" className={VERTICALS_TITLE_CLASSES}>
          {VERTICALS_SECTION_TITLE}
        </h2>

        <motion.div whileHover={{ scale: 1.05 }} variants={textVariants}>
          <Link
            href={LEARNING_VERTICALS_ROUTE}
            onClick={(e) => handleNavClick(e, LEARNING_VERTICALS_ROUTE)}
            className={VERTICALS_BUTTON_CLASSES}
          >
            {VERTICALS_LEARN_MORE_BUTTON_TEXT}
          </Link>
        </motion.div>
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

      {/* Experiential & Community Feature: Phaans by INCISIVE */}
      <PhaansFeatureCard />
    </section>
  );
};

export default LearningVerticalsSection;
