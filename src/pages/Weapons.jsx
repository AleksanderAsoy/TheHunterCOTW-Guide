/**
 * Weapons Page Component
 * 
 * Currently displays a "Coming Soon" placeholder.
 * 
 * Future content will include:
 * - Complete rifle catalog with caliber specifications
 * - Shotgun varieties and ammunition types
 * - Bow and crossbow options
 * - Handguns and revolvers
 * - Weapon recommendations by animal class
 * - Sight and scope comparisons
 */

import Hero from '../components/Hero';
import { CSS_CLASSES } from '../utils/constants';

function Weapons() {
  return (
    <div className={CSS_CLASSES.pageContainer}>
      {/* Hero Section */}
      <Hero
        title="Weapons Arsenal"
        subtitle="Master your tools for the perfect hunt"
      />

      <div className={CSS_CLASSES.contentContainer}>
        
        {/* Coming Soon Message */}
        <section className={`${CSS_CLASSES.card} text-center`}>
          <div className="max-w-2xl mx-auto">
            
            {/* Icon */}
            <svg
              className="w-24 h-24 mx-auto mb-6 text-orange-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>

            {/* Title */}
            <h2 className="text-4xl font-bold text-hunter-tan mb-4">
              Coming Soon
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-8">
              We're currently compiling detailed information about all weapons in 
              TheHunter: Call of the Wild. This section will include:
            </p>

            {/* Feature List */}
            <ul className="text-left text-gray-300 space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">✓</span>
                Complete rifle catalog with caliber specifications
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">✓</span>
                Shotgun varieties and ammunition types
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">✓</span>
                Bow and crossbow options
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">✓</span>
                Handguns and revolvers
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">✓</span>
                Weapon recommendations by animal class
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">✓</span>
                Sight and scope comparisons
              </li>
            </ul>

            {/* Footer Text */}
            <p className="text-gray-400 italic">
              Check back soon for updates!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Weapons;
