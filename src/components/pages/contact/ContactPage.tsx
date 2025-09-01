'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import AppointmentBooking from '../about-me/AppointmentBooking';
import { InstagramIcon, LinkedinIcon, YoutubeIcon, MailIcon, Phone, MapPin, Clock, Send, ExternalLink } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
        consent: false
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const links = [
        { 
            href: 'https://www.instagram.com/incisive_cul/', 
            icon: InstagramIcon, 
            label: 'Instagram',
            color: 'from-pink-500 to-purple-600',
            hoverColor: 'hover:from-pink-600 hover:to-purple-700'
        },
        { 
            href: 'https://www.linkedin.com/company/incisive-centre-for-unlearning-and-learning/', 
            icon: LinkedinIcon, 
            label: 'LinkedIn',
            color: 'from-blue-500 to-blue-700',
            hoverColor: 'hover:from-blue-600 hover:to-blue-800'
        },
        { 
            href: 'https://www.youtube.com/@Incisive-CUL', 
            icon: YoutubeIcon, 
            label: 'YouTube',
            color: 'from-red-500 to-red-700',
            hoverColor: 'hover:from-red-600 hover:to-red-800'
        },
        { 
            href: 'mailto:incisive-cul@gmail.com', 
            icon: MailIcon, 
            label: 'Email',
            color: 'from-green-500 to-emerald-600',
            hoverColor: 'hover:from-green-600 hover:to-emerald-700'
        },
        { 
            href: 'tel:+919286284370', 
            icon: Phone, 
            label: 'Phone',
            color: 'from-indigo-500 to-purple-600',
            hoverColor: 'hover:from-indigo-600 hover:to-purple-700'
        },
    ];

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile number is required';
        } else if (!/^\+?[\d\s-()]+$/.test(formData.mobile)) {
            newErrors.mobile = 'Please enter a valid mobile number';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (!formData.consent) newErrors.consent = 'You must agree to the data processing consent';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            mobile: '',
            message: '',
            consent: false
        });
    };

    return (
        <div ref={containerRef} className="min-h-screen text-white bg-gray-900">
            {/* Hero Section */}
            <motion.section 
                className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden"
                style={{ y }}
            >
                {/* Background Pattern - Responsive positioning */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-20 sm:w-32 lg:w-40 h-20 sm:h-32 lg:h-40 border border-blue-400 rounded-full"></div>
                    <div className="absolute top-32 sm:top-60 right-8 sm:right-20 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 border border-purple-400 rounded-full"></div>
                    <div className="absolute bottom-20 sm:bottom-40 left-1/4 sm:left-1/3 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 border border-blue-400 rounded-full"></div>
                </div>

                <div className="max-w-6xl mx-auto mt-2 sm:mt-4 text-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-8 sm:mb-12 lg:mb-16"
                    >
                        <motion.h1 
                            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl m-4 sm:m-6 lg:m-8 font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent'
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Find Your Way
                        </motion.h1>

                        <motion.blockquote
                            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-300 italic max-w-4xl mx-auto relative px-4 sm:px-0"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <span className="text-2xl sm:text-3xl lg:text-4xl text-blue-400 absolute -top-2 sm:-top-4 -left-2 sm:-left-4">"</span>
                            Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.
                            <span className="text-2xl sm:text-3xl lg:text-4xl text-blue-400 p-2">"</span>
                        </motion.blockquote>
                        
                        <motion.div 
                            className="font-sans text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 text-right max-w-4xl mx-auto px-4 sm:px-0"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <span className="text-blue-400">- Viktor E. Frankl</span><br />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Social Media Section */}
            <motion.section 
                className="py-12 sm:py-16 px-4 sm:px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="text-center mb-8 sm:mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                            Connect With Us
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
                            Follow our journey and stay updated with the latest insights, resources, and community discussions
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {links.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${link.color} ${link.hoverColor} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="text-center">
                                    <link.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-white font-semibold text-xs sm:text-sm">{link.label}</h3>
                                </div>
                                <div className="absolute inset-0 bg-white/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <ExternalLink className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Contact Form Section */}
            <motion.section 
                className="relative py-12 sm:py-16 px-4 sm:px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-2xl order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Get in touch</h3>
                            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">Ready to start your journey? Let's connect and explore how we can help you grow.</p>
                        </motion.div>

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            {[
                                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
                                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email address' },
                                { id: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: 'Enter your mobile number' },
                            ].map((field, index) => (
                                <motion.div
                                    key={field.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                >
                                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-300 mb-2">
                                        {field.label} <span className="text-red-400">*</span>
                                    </label>
                                    <motion.input
                                        type={field.type}
                                        id={field.id}
                                        value={formData[field.id as keyof typeof formData] as string}
                                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm sm:text-base"
                                        placeholder={field.placeholder}
                                        whileFocus={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                    {errors[field.id] && (
                                        <motion.div 
                                            className="text-red-400 text-sm mt-1"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            {errors[field.id]}
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message <span className="text-red-400">*</span>
                                </label>
                                <motion.textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none text-sm sm:text-base"
                                    placeholder="Tell us about your goals, questions, or how we can help you..."
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                />
                                {errors.message && (
                                    <motion.div 
                                        className="text-red-400 text-sm mt-1"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                    >
                                        {errors.message}
                                    </motion.div>
                                )}
                            </motion.div>

                            <motion.div 
                                className="flex items-start space-x-3"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <motion.input
                                    type="checkbox"
                                    id="consent"
                                    checked={formData.consent}
                                    onChange={(e) => handleInputChange('consent', e.target.checked)}
                                    className="mt-1 w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-500 focus:ring-2"
                                    whileTap={{ scale: 0.9 }}
                                />
                                <label htmlFor="consent" className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                    I hereby agree that this data will be stored and processed for the purpose of establishing contact. I am aware that I can revoke my consent at any time. <span className="text-red-400">*</span>
                                </label>
                            </motion.div>
                            {errors.consent && (
                                <motion.div 
                                    className="text-red-400 text-sm"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    {errors.consent}
                                </motion.div>
                            )}

                            <motion.div 
                                className="text-xs sm:text-sm text-gray-500"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-red-400">*</span> Indicates required fields
                            </motion.div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed transition-all duration-300 text-white shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <motion.div
                                        className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    />
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        className="space-y-6 sm:space-y-8 order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Office Hours */}
                        <motion.div 
                            className="backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700/30"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-3" />
                                <h3 className="text-xl sm:text-2xl font-bold text-white">Office Hours</h3>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-300 text-base sm:text-lg">
                                    <span className="font-semibold text-blue-400">Mon - Fri:</span> 04:00 pm - 07:15 pm
                                </p>
                                <p className="text-gray-300 text-base sm:text-lg">
                                    <span className="font-semibold text-blue-400">Sat - Sun:</span> Closed
                                </p>
                            </div>
                        </motion.div>

                        {/* Contact Details */}
                        <motion.div 
                            className="backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700/30"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-center mb-3 sm:mb-4">
                                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mr-3" />
                                <h3 className="text-xl sm:text-2xl font-bold text-white">Contact Details</h3>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                <motion.p 
                                    className="text-sm sm:text-base lg:text-lg text-gray-300 flex items-center flex-wrap sm:flex-nowrap"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Phone className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                                    <span className="font-semibold text-purple-400 mr-2">Phone:</span>
                                    <span>9289 284 370</span>
                                </motion.p>
                                <motion.p 
                                    className="text-sm sm:text-base lg:text-lg text-gray-300 flex items-center flex-wrap sm:flex-nowrap"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <MailIcon className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                                    <span className="font-semibold text-purple-400 mr-2">Email:</span>
                                    <a href="mailto:ricky_is_cool@gmail.com" className="hover:underline hover:text-purple-300 transition-colors break-all sm:break-normal">
                                        ricky_is_cool@gmail.com
                                    </a>
                                </motion.p>
                                <motion.p 
                                    className="text-sm sm:text-base lg:text-lg text-gray-300 flex items-start"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <MapPin className="w-4 h-4 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                                    <span className="font-semibold text-purple-400 mr-2">Address:</span>
                                    <span>Jakhan, Rajpur Road, Dehradun</span>
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Map Section */}
                        <motion.div
                            className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="aspect-video">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3649.8578073690933!2d78.0685104022588!3d30.363027630015548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7cb44e3bfdf%3A0x823201a1a95403d4!2sDoon%20Vihar%2C%20Jakhan%2C%20Dehradun%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sus!4v1756712371612!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="filter grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Schedule Section */}
            <motion.section
                className="py-12 sm:py-16 px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <AppointmentBooking />
            </motion.section>
        </div>
    );
};

export default ContactPage;