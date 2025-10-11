/**
 * Profile Page Component
 * 
 * Currently displays a "Coming Soon" placeholder.
 * 
 * Future features will include:
 * - User authentication and login system
 * - Personal harvest statistics and tracking
 * - Trophy room with your best kills
 * - Automatic sync from game save files
 * - Harvest history timeline
 * - Favorite reserves and animals
 * - Personal hunting achievements
 */

import Hero from '../components/Hero';
import { CSS_CLASSES } from '../utils/constants';

function Profile() {
  return (
    <div className={CSS_CLASSES.pageContainer}>
      {/* Hero Section */}
      <Hero
        title="Hunter Profile"
        subtitle="Track your hunting journey and achievements"
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
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>

            {/* Title */}
            <h2 className="text-4xl font-bold text-hunter-tan mb-4">
              Coming Soon
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-8">
              We're developing a comprehensive profile system that will track your hunting 
              achievements and statistics. This section will include:
            </p>

            {/* Feature List */}
            <ul className="text-left text-gray-300 space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">✓</span>
                Personal harvest tracking and statistics
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">✓</span>
                Trophy room showcasing your best kills
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">✓</span>
                Automatic sync from game save files
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">✓</span>
                Harvest history timeline and analytics
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">✓</span>
                Favorite reserves and species tracking
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">✓</span>
                Personal hunting achievements and milestones
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">✓</span>
                User authentication and account management
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

export default Profile;

