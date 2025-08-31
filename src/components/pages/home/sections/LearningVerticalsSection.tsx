'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStairsNavigation } from '@/hooks/useStairsNavigation';
import VerticalsCard from '../VerticalsCard';

interface LearningVerticalsSectionProps {
  textVariants: any;
  staggerContainer: any;
}

const LearningVerticalsSection: React.FC<LearningVerticalsSectionProps> = ({ textVariants, staggerContainer }) => {
  const { navigateWithStairs } = useStairsNavigation();
  const verticals = [
    {
      title: "Essential Learning",
      content: [
        "Current Affairs",
        "Geography", "History", "Constitution", "Political and Social Theory", "Ethics", "General Science"
      ]
    },
    {
      title: "Life Skills",
      content: [
        "Competitive Mathematics",
        "Logical Reasoning",
        "English",
        "Critical Thinking",
        "General Aptitude"
      ]
    },
    {
      title: "Creative Expression",
      content: [
        "Literature",
        "Creative Writing",
        "Visual Media",
        "Research Methodology",
        "Art & Culture"
      ]
    },
    {
      title: "Public Speaking",
      content: [
        "Debate",
        "Group Discussion",
        "Personal Interview"
      ]
    },
    {
      title: "Competition Prep",
      content: [
        "Quiz",
        "Creative Writing",
        "Films"
      ]
    },
    {
      title: "Project Guidance",
      content: [
        "Guiding Creative Projects"
      ]
    },
  ];

  return (
    <section className="mt-20 py-24 container mx-auto px-6">
      <div className="flex flex-row justify-between">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          The Five Verticals + One
        </h1>

        <motion.button
          onClick={() => navigateWithStairs('/learning-verticals')}
          whileHover={{ scale: 1.05 }}
          variants={textVariants}
          className="mt-4 px-6 py-3 text-sm font-semibold text-blue-900 bg-blue-200 rounded-md shadow-md hover:bg-blue-300 transition duration-100 h-12 flex items-center justify-center"
        >
          Learn more
        </motion.button>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ margin: "0px 0px -200px 0px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        {verticals.map((vertical, idx) => (
          <VerticalsCard key={idx} title={vertical.title} content={vertical.content} textVariants={textVariants} />
        ))}
      </motion.div>
    </section>
  );
};

export default LearningVerticalsSection;
