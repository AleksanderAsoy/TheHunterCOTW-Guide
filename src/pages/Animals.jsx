import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import animalsData from '../data/animals.json';

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [selectedClass, setSelectedClass] = useState('all');

  useEffect(() => {
    setAnimals(animalsData);
  }, []);

  // Filter animals by class
  const filteredAnimals = selectedClass === 'all' 
    ? animals 
    : animals.filter(animal => animal.class === parseInt(selectedClass));

  // Get unique classes for filter
  const animalClasses = [...new Set(animals.map(animal => animal.class))].sort((a, b) => a - b);

  return (
    <div className="min-h-screen bg-hunter-darker">
      <Hero
        title="Wildlife Guide"
        subtitle="Master the hunt with detailed information on over 100 species"
        backgroundClass="bg-hunter-orange"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            TheHunter: Call of the Wild features a diverse array of wildlife across 9 animal
            classes. Each class represents different size ranges and requires specific weapons
            and strategies. Understanding animal behavior, habitats, and the appropriate
            equipment is key to successful hunting.
          </p>

          {/* Class Filter */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedClass('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                selectedClass === 'all'
                  ? 'bg-hunter-green-light text-white'
                  : 'bg-hunter-dark text-gray-300 hover:bg-hunter-brown'
              }`}
            >
              All Classes
            </button>
            {animalClasses.map((classNum) => (
              <button
                key={classNum}
                onClick={() => setSelectedClass(classNum.toString())}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  selectedClass === classNum.toString()
                    ? 'bg-hunter-green-light text-white'
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
              : `Class ${selectedClass} Animals (${filteredAnimals.length})`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAnimals.map((animal) => (
              <Card
                key={animal.id}
                title={animal.name}
                description={animal.description}
                badge={`Class ${animal.class}`}
                image={animal.image}
                details={[
                  `Scientific Name: ${animal.latin_name}`,
                  `Weight: ${animal.weight_range}`,
                  `Difficulty: ${animal.difficulty}`,
                ]}
              />
            ))}
          </div>
        </section>

        {/* Class Information */}
        <section className="mt-16 bg-hunter-dark rounded-lg p-8 border border-hunter-brown">
          <h2 className="text-3xl font-bold text-hunter-tan mb-6">
            Understanding Animal Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-hunter-green-light mb-3">
                Small Game (Class 1-3)
              </h3>
              <p className="text-gray-300">
                Includes rabbits, foxes, and coyotes. These animals require lighter calibers
                like .22 LR, .17 HMR, or shotguns.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-hunter-green-light mb-3">
                Medium Game (Class 4-6)
              </h3>
              <p className="text-gray-300">
                Deer, boar, and elk fall into this category. Recommended calibers include
                .243, .270, .308, and 7mm.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-hunter-green-light mb-3">
                Large Game (Class 7-9)
              </h3>
              <p className="text-gray-300">
                Dangerous animals like bears and bison. These require powerful calibers such
                as .300, .338, .45-70, and .470.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Notice */}
        {animals.length < 100 && (
          <section className="mt-12 bg-hunter-dark rounded-lg p-8 border border-hunter-brown text-center">
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

