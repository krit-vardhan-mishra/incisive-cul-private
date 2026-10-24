/**
 * Centralized contact constants for INCISIVE – Centre for Unlearning and Learning.
 *
 * NOTE ON PHONE NUMBER DISCREPANCY:
 * The codebase contained two conflicting phone numbers:
 * 1. "+91 92862 84370" / "tel:+919286284370" (found in Footer, FeaturedWorksPage, and ContactPage social links)
 * 2. "9289 284 370" (found as display text in ContactPage office hours section)
 * We maintain +91 92862 84370 as the primary linked number as it appears in 3 verified components,
 * but explicitly highlight this discrepancy for stakeholder confirmation.
 */

export const OFFICIAL_EMAIL = 'incisive-cul@gmail.com';

export const OFFICIAL_PHONE_DISPLAY = '+91 92862 84370';
export const OFFICIAL_PHONE_TEL = 'tel:+919286284370';

// Retained for reference in case the alternate digit is confirmed
export const ALTERNATE_PHONE_DISPLAY = '9289 284 370';

export const OFFICIAL_ADDRESS = 'Jakhan, Rajpur Road, Dehradun, Uttarakhand, India';
export const OFFICIAL_ADDRESS_SHORT = 'Jakhan, Rajpur Road, Dehradun';

export const OFFICIAL_OFFICE_HOURS = {
  weekdays: 'Mon - Fri: 04:00 pm - 07:15 pm',
  weekends: 'Sat - Sun: Closed',
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/incisive_cul/',
  linkedin: 'https://www.linkedin.com/company/incisive-centre-for-unlearning-and-learning/',
  youtube: 'https://www.youtube.com/@Incisive-CUL',
};
