/**
 * Animals Page Component
 * 
 * Displays all wildlife species in the game with filtering by class.
 * 
 * Features:
 * - Filter buttons to show all animals or filter by class (1-9)
 * - Grid layout of animal cards
 * - Each card shows: name, description, class, weight, difficulty
 * - Educational section explaining animal classes
 * 
 * Animal Classes range from 1 (smallest) to 9 (largest/most dangerous)
 * The animals data is loaded from src/data/animals.json
 */

import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import animalsData from '../data/animals.json';
import { CSS_CLASSES } from '../utils/constants';

function Animals() {
  // State for animals data and selected filter
  const [animals, setAnimals] = useState([]);
  const [selectedClass, setSelectedClass] = useState('all');

  // Load animals data when component mounts
  useEffect(() => {
    setAnimals(animalsData);
  }, []);

  // Filter animals based on selected class
  const filteredAnimals = selectedClass === 'all' 
    ? animals 
    : animals.filter(animal => animal.class === parseInt(selectedClass));

  // Extract unique classes from animals data for filter buttons
  const animalClasses = [...new Set(animals.map(animal => animal.class))].sort((a, b) => a - b);

  return (
    <div className={CSS_CLASSES.pageContainer}>
      {/* Hero Section */}
      <Hero
        title="Wildlife Guide"
        subtitle="Master the hunt with detailed information on over 100 species"
      />

      <div className={CSS_CLASSES.contentContainer}>
        
        {/* Introduction and Class Filter */}
        <section className="mb-12">
          <p className={`${CSS_CLASSES.bodyText} mb-6`}>
            TheHunter: Call of the Wild features a diverse array of wildlife across 9 animal
            classes. Each class represents different size ranges and requires specific weapons
            and strategies. Understanding animal behavior, habitats, and the appropriate
            equipment is key to successful hunting.
          </p>

          {/* Class Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {/* "All Classes" Button */}
            <button
              onClick={() => setSelectedClass('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                selectedClass === 'all'
                  ? 'bg-orange-500 text-white'
                  : 'bg-hunter-dark text-gray-300 hover:bg-hunter-brown'
              }`}
            >
              All Classes
            </button>
            
            {/* Individual Class Buttons (1-9) */}
            {animalClasses.map((classNum) => (
              <button
                key={classNum}
                onClick={() => setSelectedClass(classNum.toString())}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  selectedClass === classNum.toString()
                    ? 'bg-orange-500 text-white'
                    : 'bg-hunter-dark text-gray-300 hover:bg-hunter-brown'
                }`}
              >
                Class {classNum}
              </button>
            ))}
          </div>
        </section>

        {/* Animals Grid */}
        <section>
          <h2 className="text-2xl font-bold text-hunter-tan mb-6">
            {selectedClass === 'all' 
              ? `All Animals (${filteredAnimals.length})` 
              : `Class ${selectedClass} Animals (${filteredAnimals.length})`
            }
          </h2>
          
          {/* Grid layout: 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAnimals.map(animal => (
              <Card
                key={animal.id}
                title={animal.name}
                description={animal.description}
                badge={`Class ${animal.class}`}
                details={[
                  `Scientific Name: ${animal.latin_name}`,
                  `Weight: ${animal.weight_range}`,
                  `Difficulty: ${animal.difficulty}`,
                ]}
              />
            ))}
          </div>
        </section>

        {/* Understanding Animal Classes - Educational Section */}
        <section className={`mt-16 ${CSS_CLASSES.card}`}>
          <h2 className={CSS_CLASSES.sectionHeadingLeft}>
            Understanding Animal Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Small Game (Classes 1-3) */}
            <div>
              <h3 className={CSS_CLASSES.subheading}>
                Small Game (Class 1-3)
              </h3>
              <p className="text-gray-300">
                Includes rabbits, foxes, and coyotes. These animals require lighter calibers 
                like .22 LR, .17 HMR, or shotguns.
              </p>
            </div>

            {/* Medium Game (Classes 4-6) */}
            <div>
              <h3 className={CSS_CLASSES.subheading}>
                Medium Game (Class 4-6)
              </h3>
              <p className="text-gray-300">
                Deer, boar, and elk fall into this category. Recommended calibers include 
                .243, .270, .308, and 7mm.
              </p>
            </div>

            {/* Large Game (Classes 7-9) */}
            <div>
              <h3 className={CSS_CLASSES.subheading}>
                Large Game (Class 7-9)
              </h3>
              <p className="text-gray-300">
                Dangerous animals like bears and bison. These require powerful calibers 
                such as .300, .338, .45-70, and .470.
              </p>
            </div>
          </div>
        </section>

        {/* Future Content Notice */}
        {animals.length < 100 && (
          <section className={`mt-12 ${CSS_CLASSES.card} text-center`}>
            <h3 className="text-2xl font-bold text-hunter-tan mb-4">
              More Animals Coming Soon
            </h3>
            <p className="text-gray-300">
              We're continuously adding more animals to the guide. Stay tuned for detailed 
              information on waterfowl, small birds, and many more species!
            </p>
          </section>
        )}
      </div>
    </div>
  );
}

export default Animals;
