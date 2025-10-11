/**
 * Constants and reusable values for TheHunter: Call of the Wild Guide
 * 
 * This file contains all shared constants used throughout the application:
 * - CSS class combinations (to avoid repetition)
 * - Navigation configuration
 * - Common styling patterns
 * 
 * Using constants ensures consistency and makes maintenance easier.
 */

// ============================================================================
// CSS CLASS COMBINATIONS
// ============================================================================
// These are commonly repeated Tailwind class combinations extracted to avoid
// duplication and ensure consistent styling across the application.

export const CSS_CLASSES = {
  // Navigation link styles
  navLink: "text-gray-300 hover:text-orange-500 transition-colors duration-200",
  navLinkDesktop: "text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium",
  navLinkMobile: "block py-2 text-gray-300 hover:text-orange-500 transition-colors duration-200",
  
  // Button styles
  primaryButton: "inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-200",
  primaryButtonLarge: "inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200",
  
  // Link styles (for text links, not navigation)
  textLink: "text-orange-500 hover:text-hunter-tan transition-colors",
  
  // Page layout
  pageContainer: "min-h-screen bg-hunter-darker",
  contentContainer: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
  
  // Section styles
  section: "mb-16",
  sectionHeading: "text-3xl font-bold text-hunter-tan mb-8 text-center",
  sectionHeadingLeft: "text-3xl font-bold text-hunter-tan mb-6",
  
  // Text styles
  bodyText: "text-gray-300 text-lg leading-relaxed",
  subheading: "text-xl font-semibold text-orange-500 mb-3",
  
  // Card/Box styles
  card: "bg-hunter-dark rounded-lg p-8 border border-hunter-brown",
};

// ============================================================================
// NAVIGATION CONFIGURATION
// ============================================================================
// Navigation links used in both desktop and mobile menus.
// Using an array allows us to map over it instead of duplicating code.

export const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/reserves", label: "Reserves" },
  { path: "/animals", label: "Animals" },
  { path: "/weapons", label: "Weapons" },
];

