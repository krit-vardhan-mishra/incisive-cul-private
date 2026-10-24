import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  BookOpen,
  Flower2,
  Instagram,
  MessageCircle,
  Palette,
  Users,
} from 'lucide-react';
import { PHAANS_DESCRIPTOR, PHAANS_INSTAGRAM_URL } from '@/data/verticalsConstants';

interface PhaansFeatureCardProps {
  className?: string;
  isCompact?: boolean;
}

const themes = [
  { icon: BookOpen, label: 'Stories & literature' },
  { icon: Palette, label: 'Art & culture' },
  { icon: Users, label: 'Community gatherings' },
  { icon: MessageCircle, label: 'Conversation & connection' },
];

const PhaansFeatureCard: React.FC<PhaansFeatureCardProps> = ({
  className = '',
  isCompact = false,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      aria-labelledby="phaans-feature-heading"
      className={`group relative isolate mx-auto mt-12 w-full max-w-6xl overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 text-white backdrop-blur-sm transition-colors duration-300 hover:border-blue-400/50 ${className}`}
    >
      {/* Soft hover wash, same treatment as the vertical cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl bg-blue-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr]">
        {/* Left: content */}
        <div className={`${isCompact ? 'p-6 sm:p-8' : 'p-8 sm:p-10 md:p-12'}`}>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/10 px-3 py-1 text-sm font-medium text-blue-400">
              <Flower2 className="h-4 w-4" aria-hidden="true" />
              Phaans by INCISIVE
            </span>
          </div>

          <p className="mb-3 text-base text-gray-400">{PHAANS_DESCRIPTOR}</p>

          <h3
            id="phaans-feature-heading"
            className="mb-4 text-4xl font-bold leading-tight sm:text-5xl"
          >
            A story is <span className="text-blue-400">better shared.</span>
          </h3>

          <div className="mb-6 h-1 w-24 rounded-full bg-blue-400" aria-hidden="true" />

          <p className="max-w-xl text-lg leading-relaxed text-gray-300">
            Phaans brings people together through storytelling, cultural expression
            and shared experiences. It is a space to participate, exchange ideas
            and connect with people beyond the classroom.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {themes.map(({ icon: Icon, label }, i) => (
              <motion.li
                key={label}
                initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.3 }}
                className="flex items-center text-gray-300"
              >
                <span className="mr-3 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-900/60 text-blue-400">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {label}
              </motion.li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            <motion.a
              href={PHAANS_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors duration-200 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Explore Phaans
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </motion.a>
            <span className="text-sm text-gray-400">
              Discover events and community experiences
            </span>
          </div>
        </div>

        {/* Right: quote panel */}
        <div className={`${isCompact ? 'px-6 pb-6 sm:px-8 sm:pb-8' : 'p-4 sm:p-6 lg:pl-0'}`}>
          <div className="relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-xl border border-gray-700 bg-gray-900/60 p-8 sm:min-h-[400px]">
            {/* Decorative rings in the page's blue / purple accents */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full border-[22px] border-blue-400/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-14 h-48 w-48 rounded-full border-[24px] border-purple-400/10"
            />

            <Flower2 className="relative h-8 w-8 text-blue-400" aria-hidden="true" />

            <div className="relative my-8">
              <p className="mb-3 text-gray-400">Make room for</p>
              <h4 className="text-4xl font-bold leading-tight sm:text-5xl">
                Stories and <span className="text-blue-400">perspectives</span>
              </h4>
            </div>

            <figure className="relative border-t border-gray-700 pt-5">
              <blockquote className="text-lg italic leading-relaxed text-gray-300">
                “Some stories are read.
                <br />
                Some begin when we gather.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-gray-400">
                Culture, creativity and connection
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PhaansFeatureCard;