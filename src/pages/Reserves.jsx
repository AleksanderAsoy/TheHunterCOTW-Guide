import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Card from '../components/Card';
import reservesData from '../data/reserves.json';

function Reserves() {
  const [reserves, setReserves] = useState([]);

  useEffect(() => {
    setReserves(reservesData);
  }, []);

  return (
    <div className="min-h-screen bg-hunter-darker">
      <Hero
        title="Hunting Reserves"
        subtitle="Explore 17 unique reserves from around the world"
        backgroundClass="bg-gradient-to-r from-hunter-green to-hunter-green-light"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-gray-300 text-lg leading-relaxed">
            Each reserve in TheHunter: Call of the Wild offers a unique hunting experience
            with distinct terrain, weather conditions, and wildlife. From the farmlands of
            Germany to the frozen taiga of Siberia, every location presents new challenges
            and opportunities for hunters.
          </p>
        </section>

        {/* Reserves Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reserves.map((reserve) => (
              <Card
                key={reserve.id}
                title={reserve.name}
                description={reserve.description}
                badge={reserve.dlc_required ? 'DLC' : 'Base Game'}
                details={[
                  `Location: ${reserve.location}`,
                  `Size: ${reserve.size}`,
                  `Terrain: ${reserve.terrain}`,
                ]}
                link={`/reserves/${reserve.id}`}
              />
            ))}
          </div>
        </section>

        {/* Coming Soon Notice */}
        {reserves.length < 17 && (
          <section className="mt-12 bg-hunter-dark rounded-lg p-8 border border-hunter-brown text-center">
            <h3 className="text-2xl font-bold text-hunter-tan mb-4">
              More Reserves Coming Soon
            </h3>
            <p className="text-gray-300">
              We're currently adding detailed information for all 17 reserves. Check back
              soon for updates on additional locations including Vurhonga Savanna, Silver
              Ridge Peaks, and more!
            </p>
          </section>
        )}
      </div>
    </div>
  );
}

export default Reserves;

