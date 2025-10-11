/**
 * Navigation Component
 * 
 * Main navigation bar for TheHunter: COTW Guide.
 * Features:
 * - Sticky header that stays at top of viewport
 * - Responsive design (desktop horizontal menu, mobile hamburger menu)
 * - Orange hover effects matching site theme
 * - Automatic menu closing on mobile when link is clicked
 */

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NAV_LINKS, CSS_CLASSES } from '../utils/constants';

function Navigation() {
  // State to control mobile menu open/closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-hunter-darker shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - Links to homepage */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-orange-500">
              TheHunter
            </span>
            <span className="text-2xl font-bold text-hunter-tan">
              COTW Guide
            </span>
          </Link>

          {/* Desktop Navigation - Hidden on mobile (md:flex shows on medium+ screens) */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={CSS_CLASSES.navLinkDesktop}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Only visible on mobile screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-orange-500 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Toggle between hamburger (☰) and close (✕) icon */}
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Only shown when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={CSS_CLASSES.navLinkMobile}
                onClick={() => setIsMenuOpen(false)} // Close menu after clicking link
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
