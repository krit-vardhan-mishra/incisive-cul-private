'use client';

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Users, Lightbulb, Award, InstagramIcon, LinkedinIcon, MailIcon, Phone, YoutubeIcon } from "lucide-react";
import AppointmentBooking from "../about-me/AppointmentBooking";

export default function FeaturedWorksPage() {
    const links = [
        { href: 'https://www.instagram.com/incisive_cul/', icon: InstagramIcon },
        { href: 'https://www.linkedin.com/company/incisive-centre-for-unlearning-and-learning/', icon: LinkedinIcon },
        { href: 'https://www.youtube.com/@Incisive-CUL', icon: YoutubeIcon },
        { href: 'mailto:incisive-cul@gmail.com', icon: MailIcon },
        { href: 'tel:+919286284370', icon: Phone },
    ];

    const ytLinks = [
        {
            link: "https://www.youtube.com/watch?v=BbTvFe1TNeI",
            topic: "On Ambedkar",
            description: "A lecture exploring the philosophy and contributions of Dr. B.R. Ambedkar."
        },
        {
            link: "https://www.youtube.com/watch?v=Ew3AEw1OU5c",
            topic: "On Constitutionalism",
            description: "An in-depth talk on the principles of constitutionalism and its relevance today."
        },
        {
            link: "https://www.youtube.com/watch?v=g5OtnHAFJOQ",
            topic: "Folie à deux",
            description: "A psychological and sociological analysis of 'shared madness' or 'Folie à deux'."
        },
    ];

    const getYouTubeId = (url: any) => {
        const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const featuredWorks = [
        {
            id: 1,
            title: "Linguistic Nations and Indian Nationalism: An Exposition of Divergence",
            description: "Explorations, ISS E-journal of the Indian Sociological Society 6 (2), 209-227",
            link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hqZr5sAAAAAJ&citation_for_view=hqZr5sAAAAAJ:d1gkVwhDpl0C",
            date: "A. Juneja, 2022",
            category: "Research Paper",
            icon: BookOpen
        },
        {
            id: 2,
            title: "Colonial State Apparatuses in Post-colonial India: The Case of Indian Federalism",
            description: "Explorations, ISS E-journal of the Indian Sociological Society 6 (2), 209-227.",
            link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hqZr5sAAAAAJ&citation_for_view=hqZr5sAAAAAJ:2osOgNQ5qMEC",
            date: "A. Juneja, 2021",
            category: "Research Paper",
            icon: Users
        },
        {
            id: 3,
            title: "CASTECONOMICS - Analyzing India's Caste Mode of Production",
            description: "International Journal of Creative Research Thoughts (IJCRT) 9 (12), c597-c602.",
            link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hqZr5sAAAAAJ&citation_for_view=hqZr5sAAAAAJ:9yKSN-GCB0IC",
            date: "A. Juneja, 2021",
            category: "Research Paper",
            icon: Lightbulb
        },
        {
            id: 4,
            title: "Construction of caste as an administrative episteme - a case of neglected materiality",
            description: "Bihar Journal of Sociology, Vol. 16, No. 2, December 2021",
            date: "A. Juneja, A. Mahmood, 2021",
            link: "#",
            category: "Research Paper",
            icon: Award
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gray-900">
                <div className="max-w-7xl mx-auto mt-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-16"
                    >
                        <motion.blockquote
                            className="text-xl md:text-2xl font-light text-gray-300 italic max-w-4xl mx-auto relative"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <span className="text-4xl text-blue-400 absolute -top-4 -left-4">"</span>
                            Small, sharp, and informal: our classrooms at Incisive are spaces where curiosity leads, discourse deepens, and learning becomes truly meaningful.
                            <span className="text-4xl text-blue-400 absolute -bottom-8 -right-4">"</span>
                        </motion.blockquote>
                        <div className="font-sans text-lg mt-6 text-right max-w-4xl mx-auto">
                            <span className="text-blue-400">- Dr. Abhishek Juneja</span><br />
                            <span className="text-gray-400 text-sm">Founder, Incisive</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }} className="text-center max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-10">
                        Areas of Interest:
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Higher Education, Integrated Learning, Political Theory, Indian Politics, Sociology of Caste, History, Film Studies
                    </p>
                </motion.div>

                <motion.hr 
                    className="border-gray-700 mt-20 my-8 max-w-7xl mx-auto" 
                    initial={{ width: 0 }} 
                    animate={{ width: "100%" }} 
                    transition={{ duration: 0.8, delay: 0.7 }} 
                />
            </section>

            {/* Featured Works Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Research Publications
                        </h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            Academic contributions exploring sociology, philosophy, and educational transformation
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {featuredWorks.map((work, index) => {
                            const IconComponent = work.icon;
                            return (
                                <motion.div
                                    key={work.id}
                                    variants={itemVariants}
                                    className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Header with Icon and Category */}
                                    <div className="p-6 pb-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="p-2 bg-blue-900/30 rounded-lg">
                                                    <IconComponent className="w-6 h-6 text-blue-400" />
                                                </div>
                                                <span className="text-sm font-medium text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full">
                                                    {work.category}
                                                </span>
                                            </div>
                                            {work.link !== "#" && (
                                                <a
                                                    href={work.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>

                                        <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                                            {work.title}
                                        </h3>

                                        <p className="text-gray-300 leading-relaxed mb-3 text-sm">
                                            {work.description}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-400">
                                                {work.date}
                                            </span>
                                            {work.link !== "#" && (
                                                <a
                                                    href={work.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-300 group-hover:translate-x-1 transform"
                                                >
                                                    Read Paper
                                                    <ExternalLink className="w-4 h-4 ml-1" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Hover Effect Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Featured Talks & Videos Section */}
            <section className="py-20 px-6 bg-gray-800/30">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Featured Talks & Videos
                        </h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            Watch our featured lectures and discussions right here on the site.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {ytLinks.map((video, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300"
                            >
                                <div className="aspect-w-16 aspect-h-9 w-full">
                                    <iframe
                                        className="w-full h-full rounded-t-xl"
                                        src={`https://www.youtube.com/embed/${getYouTubeId(video.link)}`}
                                        title={video.topic}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">{video.topic}</h3>
                                    <p className="text-gray-400 text-sm">{video.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 px-6 bg-gray-800/30">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Motivation behind Incisive
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            At INCISIVE, we believe that questioning the purpose of learning—whether it's for a career or the sake of knowledge itself, is an enriching endeavor. This distinction is often unreasonable as the two paths are deeply interwoven- learning is not just a means to an end; it's a journey that empowers individuals to grow, adapt, and thrive in a constantly changing world.
                        </p>
                        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            While a career-oriented education equips you with practical skills and knowledge, the pursuit of knowledge for its own sake fosters creativity, critical thinking, and a deeper understanding of the world around us. At INCISIVE, we advocate for a holistic approach to learning that encourages individuals to harness their passions and interests, leading to more fulfilling careers and informed citizens.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-6 text-blue-400">Connect With Us</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {links.map(({ href, icon: Icon }, index) => (
                                    <motion.a
                                        key={index}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="p-4 bg-gray-700/50 hover:bg-blue-600/20 border border-gray-600 hover:border-blue-500/50 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                                            <Icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Schedule Section */}
            <motion.section
                className="py-16 px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <AppointmentBooking />
            </motion.section>
        </div>
    );
}
