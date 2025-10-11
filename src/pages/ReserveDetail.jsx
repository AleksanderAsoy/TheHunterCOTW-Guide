/**
 * ReserveDetail Page Component
 * 
 * Displays detailed information about a specific hunting reserve.
 * The reserve ID is extracted from the URL parameter.
 * 
 * Content includes:
 * - Hero section with reserve name and location
 * - Overview with full description
 * - Quick Facts sidebar (size, terrain, DLC status)
 * - Featured species list
 * - Back button to return to reserves list
 * 
 * If reserve is not found, shows a 404-style error message.
 */

import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import reservesData from '../data/reserves.json';
import { CSS_CLASSES } from '../utils/constants';

function ReserveDetail() {
  // Extract reserve ID from URL (e.g., /reserves/hirschfelden -> "hirschfelden")
  const { id } = useParams();
  
  // State to store the selected reserve
  const [reserve, setReserve] = useState(null);

  // Find and load the reserve when component mounts or ID changes
  useEffect(() => {
    const foundReserve = reservesData.find(r => r.id === id);
    setReserve(foundReserve);
  }, [id]);

  // Show error message if reserve not found
  if (!reserve) {
    return (
      <div className={`${CSS_CLASSES.pageContainer} flex items-center justify-center`}>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-hunter-tan mb-4">
            Reserve Not Found
          </h2>
          <Link
            to="/reserves"
            className={CSS_CLASSES.textLink}
          >
            Back to Reserves
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={CSS_CLASSES.pageContainer}>
      
      {/* Hero Section - Shows image if available, otherwise uses Hero component */}
      {reserve.image && (
        <div className="relative h-96 overflow-hidden">
          <img 
            src={reserve.image} 
            alt={reserve.name}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hunter-darker/50 to-hunter-darker"></div>
          
          {/* Centered text over image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                {reserve.name}
              </h1>
              <p className="text-2xl md:text-3xl text-hunter-tan drop-shadow-lg">
                {reserve.location}
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Fallback to Hero component if no image */}
      {!reserve.image && (
        <Hero
          title={reserve.name}
          subtitle={reserve.location}
          backgroundClass="bg-gradient-to-r from-orange-500 to-orange-600"
        />
      )}

      <div className={CSS_CLASSES.contentContainer}>
        
        {/* Back Button */}
        <Link
          to="/reserves"
          className={`${CSS_CLASSES.textLink} inline-flex items-center mb-8`}
        >
          {/* Arrow Left Icon */}
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back to Reserves
        </Link>

        {/* Main Content Grid: Description (2/3) and Quick Facts (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Overview/Description (takes 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <section className={CSS_CLASSES.card}>
              <h2 className={CSS_CLASSES.sectionHeadingLeft}>
                Overview
              </h2>
              <p className={CSS_CLASSES.bodyText}>
                {reserve.description}
              </p>
            </section>
          </div>

          {/* Right Column: Quick Facts Sidebar (takes 1 column on large screens) */}
          <div className="lg:col-span-1">
            <section className={CSS_CLASSES.card}>
              <h2 className={CSS_CLASSES.sectionHeadingLeft}>
                Quick Facts
              </h2>
              <div className="space-y-4">
                {/* Size */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-1">Size</h3>
                  <p className="text-hunter-tan">{reserve.size}</p>
                </div>
                
                {/* Terrain */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-1">Terrain</h3>
                  <p className="text-hunter-tan">{reserve.terrain}</p>
                </div>
                
                {/* DLC Status */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-1">Availability</h3>
                  <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                    reserve.dlc_required 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-hunter-green text-white'
                  }`}>
                    {reserve.dlc_required ? 'DLC Required' : 'Base Game'}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Featured Species Section (full width below) */}
        {reserve.featured_species && reserve.featured_species.length > 0 && (
          <section className={`mt-8 ${CSS_CLASSES.card}`}>
            <h2 className={CSS_CLASSES.sectionHeadingLeft}>
              Featured Species
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {reserve.featured_species.map((species, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-hunter-darker rounded-lg"
                >
                  <span className="text-orange-500 mr-3 text-xl">•</span>
                  <span className="text-gray-300">{species}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default ReserveDetail;
