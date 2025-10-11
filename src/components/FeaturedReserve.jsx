/**
 * FeaturedReserve Component
 * 
 * Displays a spotlight/featured section for a hunting reserve.
 * Shows reserve name, key stats, featured species, and description.
 * 
 * Props:
 * @param {string} name - Reserve name (e.g., "Askiy Ridge")
 * @param {string} subtitle - Short description (e.g., "Alberta's Breathtaking Wilderness")
 * @param {string} size - Reserve size (e.g., "25 km²")
 * @param {number} animalCount - Number of species
 * @param {string} difficulty - Difficulty level (e.g., "Expert Challenge", "Beginner Friendly")
 * @param {Array<string>} featuredSpecies - Array of 3 featured animals
 * @param {string} description - Why hunt here description
 * @param {string} reserveId - ID for linking to detail page
 */

import { Link } from 'react-router-dom';
import { CSS_CLASSES } from '../utils/constants';

function FeaturedReserve({
  name,
  subtitle,
  size,
  animalCount,
  difficulty,
  featuredSpecies,
  description,
  reserveId,
}) {
  return (
    <section className="mt-16 mb-16">
      {/* Section Heading */}
      <h2 className={CSS_CLASSES.sectionHeading}>
        Featured Reserve
      </h2>

      {/* Featured Reserve Card */}
      <div className="bg-hunter-dark rounded-lg overflow-hidden border border-hunter-brown shadow-lg">
        
        {/* Hero Banner with Reserve Name */}
        <div className="relative h-64 bg-gradient-to-r from-hunter-brown to-hunter-brown-light flex items-center justify-center">
          <div className="text-center text-white z-10">
            <h3 className="text-4xl font-bold mb-2">{name}</h3>
            <p className="text-xl text-hunter-tan">{subtitle}</p>
          </div>
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Content Section - 3 Column Grid */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Column 1: Reserve Stats */}
            <div>
              <h4 className={CSS_CLASSES.subheading}>Reserve Stats</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Size:</span>
                  <span className="text-hunter-tan">{size}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Animals:</span>
                  <span className="text-hunter-tan">{animalCount} Species</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Difficulty:</span>
                  <span className="text-orange-500">{difficulty}</span>
                </div>
              </div>
            </div>

            {/* Column 2: Featured Species */}
            <div>
              <h4 className={CSS_CLASSES.subheading}>Featured Species</h4>
              <div className="space-y-2">
                {featuredSpecies.map((species, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-300">{species}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Description and CTA */}
            <div>
              <h4 className={CSS_CLASSES.subheading}>Why Hunt Here?</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {description}
              </p>
              <Link
                to={`/reserves/${reserveId}`}
                className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-200 text-sm"
              >
                Explore Reserve
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedReserve;

