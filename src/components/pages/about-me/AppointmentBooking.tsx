'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';

interface Service {
    id: string;
    name: string;
    description: string;
    duration: string;
}

interface AppointmentData {
    service: Service | null;
    date: string;
    time: string;
    userDetails: {
        name: string;
        email: string;
        phone: string;
        country: string;
    };
}

export default function AppointmentBooking() {
    const [currentStep, setCurrentStep] = useState(0);
    const [appointmentData, setAppointmentData] = useState<AppointmentData>({
        service: null,
        date: '',
        time: '',
        userDetails: {
            name: '',
            email: '',
            phone: '',
            country: ''
        }
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [navigationError, setNavigationError] = useState<string>('');
    const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
    const [completedAllSteps, setCompletedAllSteps] = useState(false);
    const [animationData, setAnimationData] = useState(null);

    const steps = ['Service', 'Date & Time', 'Basic Details', 'Summary'];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const stepTransition = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            x: 50,
            transition: {
                duration: 0.3
            }
        }
    };

    useEffect(() => {
        import('../../../../public/success-animation.json')
            .then(data => setAnimationData(data.default))
            .catch(error => console.error('Error loading animation:', error));
    }, []);

    // Track if user completed all steps in order
    useEffect(() => {
        if (appointmentData.service && appointmentData.date && appointmentData.time &&
            appointmentData.userDetails.name && appointmentData.userDetails.email &&
            appointmentData.userDetails.phone && appointmentData.userDetails.country) {
            setCompletedAllSteps(true);
        }
    }, [appointmentData]);

    const services: Service[] = [
        {
            id: 'project-collaboration',
            name: 'Create Project Collaboration',
            description: 'Book review, Visual content production (Video/Documentary/Photography/Journal), Content Editing, Community Outreach, Event planning + Organization, Digital Strategy and Marketing.',
            duration: '15 m'
        },
        {
            id: 'general-enquiry',
            name: 'General Enquiry',
            description: 'General Enquiry regarding Incisive Centre, Professional Collaboration or Consulting Services.',
            duration: '15 m'
        },
        {
            id: 'career-counselling',
            name: 'Career Counselling Intro',
            description: 'Initial career counselling session to discuss your goals and opportunities.',
            duration: '15 m'
        }
    ];

    // Generate time slots
    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = 9; hour < 18; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                slots.push(time);
            }
        }
        return slots;
    };

    const timeSlots = generateTimeSlots();

    // Generate next 30 days (excluding weekends)
    const generateAvailableDates = () => {
        const dates = [];
        const today = new Date();
        let currentDate = new Date(today);
        currentDate.setDate(currentDate.getDate() + 1); // Start from tomorrow

        while (dates.length < 20) {
            // Skip weekends (Saturday = 6, Sunday = 0)
            if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                dates.push(new Date(currentDate));
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    };

    const availableDates = generateAvailableDates();

    const canAccessStep = (stepIndex: number): boolean => {
        // Summary step (3) can always be accessed
        if (stepIndex === 3) return true;

        // Check if previous steps are completed
        switch (stepIndex) {
            case 0: return true; // Service step always accessible
            case 1: return !!appointmentData.service; // Date & Time requires service
            case 2: return !!appointmentData.service && !!appointmentData.date && !!appointmentData.time; // Basic Details requires service, date, time
            default: return false;
        }
    };

    const handleStepClick = (stepIndex: number) => {
        if (stepIndex === currentStep) return; // Already on this step

        if (!canAccessStep(stepIndex)) {
            setNavigationError(`Please complete the previous steps before accessing "${steps[stepIndex]}".`);
            setTimeout(() => setNavigationError(''), 5000); // Clear error after 5 seconds
            return;
        }

        setNavigationError('');
        setCurrentStep(stepIndex);
    };

    const validateStep = (step: number): boolean => {
        const newErrors: Record<string, string> = {};

        switch (step) {
            case 0: // Service selection
                if (!appointmentData.service) {
                    newErrors.service = 'Please select a service';
                }
                break;
            case 1: // Date & Time
                if (!appointmentData.date) {
                    newErrors.date = 'Please select a date';
                }
                if (!appointmentData.time) {
                    newErrors.time = 'Please select a time';
                }
                break;
            case 2: // Basic Details
                if (!appointmentData.userDetails.name.trim()) {
                    newErrors.name = 'Name is required';
                }
                if (!appointmentData.userDetails.email.trim()) {
                    newErrors.email = 'Email is required';
                } else if (!/\S+@\S+\.\S+/.test(appointmentData.userDetails.email)) {
                    newErrors.email = 'Please enter a valid email';
                }
                if (!appointmentData.userDetails.phone.trim()) {
                    newErrors.phone = 'Phone number is required';
                }
                if (!appointmentData.userDetails.country.trim()) {
                    newErrors.country = 'Country is required';
                }
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
        }
    };

    const handleBack = () => {
        setCurrentStep(prev => Math.max(prev - 1, 0));
    };

    const handleServiceSelect = (service: Service) => {
        setAppointmentData(prev => ({ ...prev, service }));
        setErrors({});
    };

    const handleDateSelect = (date: string) => {
        setAppointmentData(prev => ({ ...prev, date }));
        setErrors(prev => ({ ...prev, date: '' }));
    };

    const handleTimeSelect = (time: string) => {
        setAppointmentData(prev => ({ ...prev, time }));
        setErrors(prev => ({ ...prev, time: '' }));
    };

    const handleUserDetailsChange = (field: keyof AppointmentData['userDetails'], value: string) => {
        setAppointmentData(prev => ({
            ...prev,
            userDetails: { ...prev.userDetails, [field]: value }
        }));
        setErrors(prev => ({ ...prev, [field]: '' }));
    };

    const handleSubmit = () => {
        console.log('Appointment booked:', appointmentData);

        if (completedAllSteps && animationData) {
            setShowSuccessAnimation(true);
            setTimeout(() => {
                setShowSuccessAnimation(false);
            }, 3000);
        } else {
        }
    };

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h2
                className="text-3xl font-bold text-center mb-12 text-white"
                variants={itemVariants}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Schedule a call with me
            </motion.h2>

            {/* Navigation Error */}
            <AnimatePresence>
                {navigationError && (
                    <motion.div
                        className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg"
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="text-red-300 text-sm">{navigationError}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Steps Indicator */}
            <motion.div
                className="flex flex-wrap justify-center gap-4 mb-12"
                variants={itemVariants}
            >
                {steps.map((step, index) => (
                    <motion.div
                        key={step}
                        className="flex items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                        <motion.button
                            onClick={() => handleStepClick(index)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${index === currentStep
                                ? 'bg-blue-600 text-white'
                                : index < currentStep
                                    ? 'bg-green-600 text-white hover:bg-green-500'
                                    : canAccessStep(index)
                                        ? 'bg-gray-600 text-gray-300 hover:bg-gray-500 cursor-pointer'
                                        : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                }`}
                            disabled={!canAccessStep(index) && index !== currentStep}
                            whileHover={{ scale: canAccessStep(index) || index === currentStep ? 1.05 : 1 }}
                            whileTap={{ scale: canAccessStep(index) || index === currentStep ? 0.95 : 1 }}
                        >
                            {index + 1}. {step}
                        </motion.button>
                        {index < steps.length - 1 && (
                            <motion.div
                                className={`hidden md:block w-8 h-0.5 mx-2 transition-all duration-300 ${index < currentStep ? 'bg-green-600' : 'bg-gray-600'
                                    }`}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 * index }}
                            />
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* Content Container */}
            <motion.div
                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 min-h-[500px]"
                variants={itemVariants}
                layout
            >
                <AnimatePresence mode="wait">
                    {/* Step 0: Service Selection */}
                    {currentStep === 0 && (
                        <motion.div
                            key="service-selection"
                            className="space-y-6"
                            variants={stepTransition}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.h3
                                className="text-xl font-semibold mb-6 text-white"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                Select Service
                            </motion.h3>
                            <AnimatePresence>
                                {errors.service && (
                                    <motion.div
                                        className="text-red-400 text-sm mb-4"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                    >
                                        {errors.service}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    onClick={() => handleServiceSelect(service)}
                                    className={`p-6 rounded-lg border cursor-pointer transition-all duration-200 ${appointmentData.service?.id === service.id
                                        ? 'border-blue-400 bg-blue-900/30'
                                        : 'border-gray-600 bg-gray-700/50 hover:border-gray-500'
                                        }`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <motion.h4
                                        className="text-lg font-semibold mb-3 text-blue-300"
                                        layoutId={`service-title-${service.id}`}
                                    >
                                        {service.name}
                                    </motion.h4>
                                    <motion.p
                                        className="text-gray-300 mb-4 leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 * index }}
                                    >
                                        {service.description}
                                    </motion.p>
                                    <div className="flex justify-between items-center">
                                        <motion.span
                                            className="font-semibold text-blue-400"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.3 * index }}
                                        >
                                            Duration: {service.duration}
                                        </motion.span>
                                        <AnimatePresence>
                                            {appointmentData.service?.id === service.id && (
                                                <motion.div
                                                    className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                                                    initial={{ scale: 0, rotate: -180 }}
                                                    animate={{ scale: 1, rotate: 0 }}
                                                    exit={{ scale: 0, rotate: 180 }}
                                                    transition={{ type: "spring", stiffness: 200 }}
                                                >
                                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Step 1: Date & Time Selection */}
                    {currentStep === 1 && (
                        <motion.div
                            key="date-time-selection"
                            className="space-y-8"
                            variants={stepTransition}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.h3
                                className="text-xl font-semibold text-white"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                Select Date & Time
                            </motion.h3>

                            {/* Date Selection */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <motion.h4
                                    className="text-lg font-semibold mb-4 text-white"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    Choose Date
                                </motion.h4>
                                <AnimatePresence>
                                    {errors.date && (
                                        <motion.div
                                            className="text-red-400 text-sm mb-4"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            {errors.date}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <motion.div
                                    className="grid grid-cols-2 md:grid-cols-4 gap-3"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {availableDates.slice(0, 12).map((date, index) => {
                                        const dateStr = date.toISOString().split('T')[0];
                                        return (
                                            <motion.button
                                                key={dateStr}
                                                onClick={() => handleDateSelect(dateStr)}
                                                className={`p-3 rounded-lg text-sm transition-all duration-200 ${appointmentData.date === dateStr
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                                    }`}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.2 }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <div className="font-semibold">
                                                    {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                </div>
                                                <div className="text-xs">
                                                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                                                </div>
                                            </motion.button>
                                        );
                                    })}
                                </motion.div>
                            </motion.div>

                            {/* Time Selection */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <motion.h4
                                    className="text-lg font-semibold mb-4 text-white"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    Choose Time
                                </motion.h4>
                                <AnimatePresence>
                                    {errors.time && (
                                        <motion.div
                                            className="text-red-400 text-sm mb-4"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            {errors.time}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <motion.div
                                    className="grid grid-cols-4 md:grid-cols-6 gap-3"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {timeSlots.slice(0, 16).map((time, index) => (
                                        <motion.button
                                            key={time}
                                            onClick={() => handleTimeSelect(time)}
                                            className={`p-2 rounded-lg text-sm transition-all duration-200 ${appointmentData.time === time
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                                }`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.2, delay: index * 0.05 }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {time}
                                        </motion.button>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* Step 2: Basic Details */}
                    {currentStep === 2 && (
                        <motion.div
                            key="basic-details"
                            className="space-y-6"
                            variants={stepTransition}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.h3
                                className="text-xl font-semibold text-white"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                Your Details
                            </motion.h3>

                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {[
                                    { field: 'name', label: 'Full Name *', type: 'text', placeholder: 'Enter your full name' },
                                    { field: 'email', label: 'Email Address *', type: 'email', placeholder: 'Enter your email' },
                                    { field: 'phone', label: 'Phone Number *', type: 'tel', placeholder: 'Enter your phone number' },
                                    { field: 'country', label: 'Country *', type: 'text', placeholder: 'Enter your country' }
                                ].map((input, index) => (
                                    <motion.div key={input.field} variants={itemVariants}>
                                        <motion.label
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.1 * index }}
                                        >
                                            {input.label}
                                        </motion.label>
                                        <motion.input
                                            type={input.type}
                                            value={appointmentData.userDetails[input.field as keyof AppointmentData['userDetails']]}
                                            onChange={(e) => handleUserDetailsChange(input.field as keyof AppointmentData['userDetails'], e.target.value)}
                                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                                            placeholder={input.placeholder}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.2 * index }}
                                            whileFocus={{ scale: 1.02 }}
                                        />
                                        <AnimatePresence>
                                            {errors[input.field] && (
                                                <motion.div
                                                    className="text-red-400 text-sm mt-1"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                >
                                                    {errors[input.field]}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}

                    {/* Step 3: Summary */}
                    {currentStep === 3 && (
                        <motion.div
                            key="summary"
                            className="space-y-6"
                            variants={stepTransition}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {/* Success Animation */}
                            <AnimatePresence>
                                {showSuccessAnimation && animationData && (
                                    <motion.div
                                        className="flex justify-center mb-6"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <motion.div
                                            className="bg-gray-800/90 p-6 rounded-xl border border-gray-700 max-w-sm w-full"
                                            initial={{ y: -50 }}
                                            animate={{ y: 0 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                        >
                                            <div className="text-center">
                                                <Lottie
                                                    animationData={animationData}
                                                    loop={false}
                                                    style={{ height: 150, width: 150, margin: '0 auto' }}
                                                />
                                                <motion.h3
                                                    className="text-lg font-semibold text-white mt-3"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.5 }}
                                                >
                                                    Booking Confirmed!
                                                </motion.h3>
                                                <motion.p
                                                    className="text-gray-300 text-sm mt-1"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.7 }}
                                                >
                                                    Your appointment has been successfully scheduled.
                                                </motion.p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <motion.h3
                                className="text-xl font-semibold text-white"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                {appointmentData.service && appointmentData.date && appointmentData.time && appointmentData.userDetails.name
                                    ? 'Booking Summary'
                                    : 'View Your Schedules'
                                }
                            </motion.h3>

                            {appointmentData.service && appointmentData.date && appointmentData.time && appointmentData.userDetails.name ? (
                                // Show booking summary if data is complete
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <motion.div
                                        className="bg-gray-700/50 p-6 rounded-lg border border-gray-600"
                                        whileHover={{ scale: 1.01 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <motion.div
                                            className="space-y-4"
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <motion.div variants={itemVariants}>
                                                <h4 className="font-semibold text-blue-300 mb-2">Service</h4>
                                                <p className="text-gray-300">{appointmentData.service?.name}</p>
                                                <p className="text-sm text-gray-400">{appointmentData.service?.description}</p>
                                            </motion.div>

                                            <motion.div
                                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                                variants={itemVariants}
                                            >
                                                <div>
                                                    <h4 className="font-semibold text-blue-300 mb-2">Date</h4>
                                                    <p className="text-gray-300">{formatDate(appointmentData.date)}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-blue-300 mb-2">Time</h4>
                                                    <p className="text-gray-300">{appointmentData.time}</p>
                                                </div>
                                            </motion.div>

                                            <motion.div variants={itemVariants}>
                                                <h4 className="font-semibold text-blue-300 mb-2">Contact Information</h4>
                                                <div className="text-gray-300 space-y-1">
                                                    <p><strong>Name:</strong> {appointmentData.userDetails.name}</p>
                                                    <p><strong>Email:</strong> {appointmentData.userDetails.email}</p>
                                                    <p><strong>Phone:</strong> {appointmentData.userDetails.phone}</p>
                                                    <p><strong>Country:</strong> {appointmentData.userDetails.country}</p>
                                                </div>
                                            </motion.div>

                                            <motion.div variants={itemVariants}>
                                                <h4 className="font-semibold text-blue-300 mb-2">Duration</h4>
                                                <p className="text-gray-300">{appointmentData.service?.duration}</p>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        className="bg-blue-900/30 p-4 rounded-lg border border-blue-700"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        <p className="text-blue-200 text-sm">
                                            📧 You will receive a confirmation email with the meeting link shortly after booking.
                                        </p>
                                    </motion.div>
                                </motion.div>
                            ) : (
                                // Show schedule viewing section if no booking data
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <motion.div
                                        className="bg-gray-700/50 p-6 rounded-lg border border-gray-600"
                                        whileHover={{ scale: 1.01 }}
                                    >
                                        <motion.div
                                            className="text-center space-y-4"
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <motion.div
                                                className="text-4xl mb-4"
                                                variants={itemVariants}
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ type: "spring", stiffness: 200 }}
                                            >
                                                📅
                                            </motion.div>
                                            <motion.h4
                                                className="text-lg font-semibold text-blue-300"
                                                variants={itemVariants}
                                            >
                                                Your Scheduled Appointments
                                            </motion.h4>
                                            <motion.p
                                                className="text-gray-300"
                                                variants={itemVariants}
                                            >
                                                You don't have any upcoming appointments scheduled.
                                            </motion.p>
                                            <motion.p
                                                className="text-sm text-gray-400"
                                                variants={itemVariants}
                                            >
                                                Complete the booking process to schedule a new appointment.
                                            </motion.p>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        className="bg-green-900/30 p-4 rounded-lg border border-green-700"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        <p className="text-green-200 text-sm">
                                            💡 <strong>Tip:</strong> Click on the other steps to start booking a new appointment.
                                        </p>
                                    </motion.div>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <motion.div
                    className="flex justify-between items-center mt-8 pt-6 border-t border-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <motion.button
                        onClick={handleBack}
                        disabled={currentStep === 0}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${currentStep === 0
                            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-600 text-white hover:bg-gray-500'
                            }`}
                        whileHover={currentStep !== 0 ? { scale: 1.05 } : {}}
                        whileTap={currentStep !== 0 ? { scale: 0.95 } : {}}
                    >
                        Back
                    </motion.button>

                    {currentStep < steps.length - 1 ? (
                        <motion.button
                            onClick={handleNext}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Next: {steps[currentStep + 1]}
                        </motion.button>
                    ) : (
                        // Only show Book Appointment button if we have complete booking data
                        appointmentData.service && appointmentData.date && appointmentData.time && appointmentData.userDetails.name ? (
                            <motion.button
                                onClick={handleSubmit}
                                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                Book Appointment
                            </motion.button>
                        ) : (
                            <motion.button
                                onClick={() => handleStepClick(0)}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Booking
                            </motion.button>
                        )
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
