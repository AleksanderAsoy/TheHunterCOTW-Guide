/**
 * Card Component
 * 
 * Reusable card component for displaying reserves, animals, or other content.
 * Features:
 * - Optional image at top
 * - Title with optional badge
 * - Description text
 * - Optional detail list (bullet points)
 * - Optional "Learn More" button linking to detail page
 * 
 * Props:
 * @param {string} title - Card title (required)
 * @param {string} description - Card description text (required)
 * @param {string} link - URL to link to (optional)
 * @param {string} badge - Badge text (e.g., "Base Game", "Class 6") (optional)
 * @param {Array<string>} details - Array of detail strings to display as list (optional)
 * @param {string} image - Image URL for card header (optional)
 */

import { Link } from 'react-router-dom';
import { CSS_CLASSES } from '../utils/constants';

function Card({ title, description, link, badge, details, image }) {
  return (
    <div className="bg-hunter-dark rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-hunter-brown flex flex-col h-full">
      
      {/* Optional Image Header */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy" // Lazy load images for better performance
          />
          {/* Badge positioned over image */}
          {badge && (
            <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-orange-500 text-white shadow-lg">
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Title and Badge (if no image) */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-hunter-tan flex-1 pr-2">{title}</h3>
          {/* Show badge next to title only if no image is present */}
          {!image && badge && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-500 text-white whitespace-nowrap flex-shrink-0">
              {badge}
            </span>
          )}
        </div>
        
        {/* Description - Clamps to 3 lines max */}
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        {/* Optional Details List */}
        {details && details.length > 0 && (
          <div className="space-y-2 mb-4">
            {details.map((detail, index) => (
              <div key={index} className="flex items-center text-sm text-gray-400">
                <span className="mr-2 text-orange-500">•</span>
                {detail}
              </div>
            ))}
          </div>
        )}
        
        {/* Optional "Learn More" Link Button */}
        {link && (
          <Link
            to={link}
            className={`${CSS_CLASSES.primaryButton} mt-auto`}
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;
