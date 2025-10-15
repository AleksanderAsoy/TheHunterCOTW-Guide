/**
 * DiamondTracker Component
 * 
 * A component that allows hunters to track which animals they have diamond trophies for
 * on a specific reserve. Uses localStorage to persist the data across sessions.
 * 
 * Features:
 * - Checkbox list of all species on the reserve
 * - Visual progress indicator (X/Y diamonds collected)
 * - Persistent storage using localStorage
 * - Responsive design with proper styling
 * 
 * @param {Object} props - Component properties
 * @param {string} props.reserveId - Unique identifier for the reserve
 * @param {Array<string>} props.species - Array of species names on this reserve
 * @returns {JSX.Element} The rendered diamond tracker component
 */

import { useState, useEffect } from 'react';
import { CSS_CLASSES } from '../utils/constants';

function DiamondTracker({ reserveId, species }) {
  // State to track which species have diamond trophies
  const [diamondSpecies, setDiamondSpecies] = useState(new Set());

  // Track if component has loaded initial data to prevent overwriting
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load saved diamond data from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem(`diamonds_${reserveId}`);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setDiamondSpecies(new Set(parsedData));
      } catch (error) {
        console.error('Error loading diamond data:', error);
      }
    }
    setHasLoaded(true);
  }, [reserveId]);

  // Save diamond data to localStorage whenever it changes (but only after initial load)
  useEffect(() => {
    if (hasLoaded) {
      const dataToSave = Array.from(diamondSpecies);
      localStorage.setItem(`diamonds_${reserveId}`, JSON.stringify(dataToSave));
    }
  }, [diamondSpecies, reserveId, hasLoaded]);

  /**
   * Toggle diamond status for a specific species
   * @param {string} speciesName - Name of the species to toggle
   */
  const toggleDiamond = (speciesName) => {
    setDiamondSpecies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(speciesName)) {
        newSet.delete(speciesName);
      } else {
        newSet.add(speciesName);
      }
      return newSet;
    });
  };

  // Calculate progress statistics
  const totalSpecies = species.length;
  const diamondsCollected = diamondSpecies.size;
  const progressPercentage = totalSpecies > 0 ? Math.round((diamondsCollected / totalSpecies) * 100) : 0;

  return (
    <section className={CSS_CLASSES.card}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={CSS_CLASSES.sectionHeadingLeft}>
          Diamond Trophy Tracker
        </h2>
        
        {/* Progress Indicator */}
        <div className="text-right">
          <div className="text-2xl font-bold text-orange-500">
            {diamondsCollected}/{totalSpecies}
          </div>
          <div className="text-sm text-gray-400">
            {progressPercentage}% Complete
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="w-full bg-hunter-darker rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Species Checkbox Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {species.map((speciesName, index) => {
          const hasDiamond = diamondSpecies.has(speciesName);
          
          return (
            <label
              key={index}
              className={`
                flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200
                ${hasDiamond 
                  ? 'bg-orange-500/20 border-2 border-orange-500' 
                  : 'bg-hunter-darker border-2 border-transparent hover:border-orange-500/50'
                }
              `}
            >
              <input
                type="checkbox"
                checked={hasDiamond}
                onChange={() => toggleDiamond(speciesName)}
                className="sr-only" // Hide the default checkbox
              />
              
              {/* Custom Checkbox */}
              <div className={`
                w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-all duration-200
                ${hasDiamond 
                  ? 'bg-orange-500 border-orange-500' 
                  : 'border-gray-400 hover:border-orange-500'
                }
              `}>
                {hasDiamond && (
                  <svg 
                    className="w-3 h-3 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                )}
              </div>
              
              {/* Species Name */}
              <span className={`
                text-sm font-medium transition-colors duration-200
                ${hasDiamond ? 'text-orange-500' : 'text-gray-300'}
              `}>
                {speciesName}
              </span>
            </label>
          );
        })}
      </div>

      {/* Reset Button */}
      {diamondsCollected > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setDiamondSpecies(new Set())}
            className="px-4 py-2 text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200 underline"
          >
            Reset Progress
          </button>
        </div>
      )}
    </section>
  );
}

export default DiamondTracker;
