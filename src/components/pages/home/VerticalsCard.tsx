"use client";
import React from 'react'
import { motion } from "framer-motion";

interface VerticalsProps {
  title: string;
  content: string[];
  textVariants: any;
}

const VerticalsCard: React.FC<VerticalsProps> = ({ title, content, textVariants }) => {
  return (
    <motion.div
      variants={textVariants}
      className="bg-gray-800/50 p-8 rounded-2xl border border-gray-900 hover:border-[#546179] 
             transition-colors duration-300 
             min-h-0 sm:min-h-[400px] 
             hover:bg-[#213550] flex flex-col justify-between group"
    >
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        {title}
      </h3>

      <hr className="border-t border-gray-700 my-4 group-hover:border-gray-200 transition-colors duration-300" />

      <ul className="space-y-2 flex-grow">
        {content.map((item, i) => (
          <li key={i} className="text-lg text-gray-300 flex items-center gap-2">
            <span className="text-blue-400">❖</span> {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default VerticalsCard;