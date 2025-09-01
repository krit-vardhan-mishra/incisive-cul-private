import { Variants } from 'framer-motion';
import { easeInOut } from 'framer-motion';

// Hero Section Animations
export const textVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Landing Page Animations
export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    y: -20,
    transition: {
      duration: 0.8,
      ease: "easeIn"
    }
  }
};

export const videoVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: -10
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      delay: 0.3,
      duration: 1,
      ease: "easeOut"
    }
  }
};

export const landingPageTextVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

export const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

export const subtitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    x: -10
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

export const glowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 0.3, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Section-specific animations
export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Challenge Carousel animations
export const imageVariants = {
  enter: (direction: any) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? 25 : -25,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as any
    }
  },
  exit: (direction: any) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction < 0 ? 25 : -25,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as any
    }
  })
};

export const textSlideVariants = {
  enter: (direction: any) => ({
    y: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut" as any,
      delay: 0.2
    }
  },
  exit: (direction: any) => ({
    y: direction < 0 ? 50 : -50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.42, 0, 0.58, 1] as any
    }
  })
};

export const carouselContainerVariants: Variants = {
  initial: { opacity: 0, y: 100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut" as any,
      staggerChildren: 0.3
    }
  }
};

// Vision and Philosophy animations
export const fadeInUpVariants: Variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Legacy interfaces for backward compatibility
export interface AnimationVariants {
  textVariants: Variants;
  staggerContainer: Variants;
}

export interface SectionProps {
  textVariants: Variants;
  staggerContainer: Variants;
}
