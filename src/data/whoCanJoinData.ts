export interface AudienceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  iconName: 'GraduationCap' | 'Compass' | 'BookOpen' | 'Sparkles';
  badge: string;
  primaryCtaText: string;
  primaryCtaLink: string;
}

export interface WhoCanJoinData {
  sectionTag: string;
  sectionTitle: string;
  sectionSubtitle: string;
  categories: AudienceCategory[];
  bottomBanner: {
    text: string;
    ctaText: string;
    ctaLink: string;
  };
}

export const WHO_CAN_JOIN_DATA: WhoCanJoinData = {
  sectionTag: "Open to Inquisitive Minds",
  sectionTitle: "Who Can Join INCISIVE?",
  sectionSubtitle:
    "INCISIVE welcomes learners who want to think critically, examine foundational concepts, and explore ideas beyond conventional classroom boundaries. Whether your goals are academic, analytical, or curiosity-driven, our programmes in Dehradun are crafted to support self-directed intellectual growth.",
  categories: [
    {
      id: "school-students",
      title: "School Students",
      subtitle: "Building conceptual foundations & inquiry",
      description:
        "Students seeking to look beyond rote curricula to cultivate strong critical thinking, scientific temper, social awareness, and a genuine joy for understanding the world.",
      highlights: [
        "Inquiry-based foundational learning",
        "Analytical reading & thinking habits",
        "Exploring genuine academic interests"
      ],
      iconName: "GraduationCap",
      badge: "School Learners",
      primaryCtaText: "Explore Verticals",
      primaryCtaLink: "/learning-verticals"
    },
    {
      id: "college-young-adults",
      title: "College Students & Young Adults",
      subtitle: "Honing reasoning, articulation & perspective",
      description:
        "Undergraduates and young learners wanting to bridge the gap between academic theory and practical intellect through reasoned debate, dialectical inquiry, and structured communication.",
      highlights: [
        "Public speaking, debates & GD readiness",
        "Social, political & ethical awareness",
        "Interdisciplinary clarity for life & work"
      ],
      iconName: "Compass",
      badge: "Higher Education",
      primaryCtaText: "Explore Verticals",
      primaryCtaLink: "/learning-verticals"
    },
    {
      id: "exam-aspirants",
      title: "Competitive-Exam Aspirants",
      subtitle: "Strengthening analytical rigor & aptitude",
      description:
        "Learners preparing for higher education or competitive avenues who benefit from deep conceptual understanding, general aptitude, logical reasoning, and current affairs synthesis.",
      highlights: [
        "Conceptual depth over memorisation",
        "Logical reasoning & aptitude discipline",
        "Critical analysis of contemporary issues"
      ],
      iconName: "BookOpen",
      badge: "Analytical Depth",
      primaryCtaText: "View Prep Verticals",
      primaryCtaLink: "/learning-verticals"
    },
    {
      id: "curious-creative-learners",
      title: "Curious & Creative Learners",
      subtitle: "Pursuing literature, dialogue & independent projects",
      description:
        "Individuals drawn to literature, creative writing, independent research, and cultural engagement who want a space to deconstruct preconceptions and pursue creative ideas.",
      highlights: [
        "Guided creative projects & writing",
        "Dialogues on literature, arts & media",
        "Experiential unlearning and learning"
      ],
      iconName: "Sparkles",
      badge: "Lifelong Inquiry",
      primaryCtaText: "Connect with Us",
      primaryCtaLink: "/contact"
    }
  ],
  bottomBanner: {
    text: "Not sure which learning vertical best suits your journey? Reach out to discuss your goals with us or explore our career counselling sessions.",
    ctaText: "Get in Touch",
    ctaLink: "/contact"
  }
};
