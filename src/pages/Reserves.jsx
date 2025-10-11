/**
 * Reserves Page Component
 * 
 * Displays all 17 hunting reserves in a grid layout.
 * Each reserve is shown as a Card with:
 * - Name and location
 * - Description
 * - Key stats (size, terrain, animal count)
 * - Badge indicating if DLC is required
 * 
 * The reserves data is loaded from src/data/reserves.json
 */

import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import reservesData from '../data/reserves.json';
import { CSS_CLASSES } from '../utils/constants';

function Reserves() {
  // State to store reserves data
  const [reserves, setReserves] = useState([]);

  // Load reserves data when component mounts
  useEffect(() => {
    setReserves(reservesData);
  }, []);

  return (
    <div className={CSS_CLASSES.pageContainer}>
      {/* Hero Section */}
      <Hero
        title="Hunting Reserves"
        subtitle="Explore 17 unique reserves from around the world"
      />

      <div className={CSS_CLASSES.contentContainer}>
        
        {/* Introduction Text */}
        <section className="mb-12">
          <p className={`${CSS_CLASSES.bodyText} mb-4`}>
            TheHunter: Call of the Wild offers a vast array of breathtaking hunting reserves, 
            each meticulously crafted to provide a unique experience. From the dense forests of 
            Europe to the arid plains of Africa, every reserve presents its own challenges, 
            wildlife, and stunning landscapes.
          </p>
          <p className={CSS_CLASSES.bodyText}>
            Explore the details of each reserve below to plan your next adventure, discover 
            featured species, and learn about the terrain you'll encounter.
          </p>
        </section>

        {/* Reserves Grid */}
        <section>
          <h2 className={CSS_CLASSES.sectionHeading}>
            All Reserves ({reserves.length})
          </h2>
          
          {/* Grid layout: 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reserves.map((reserve) => (
              <Card
                key={reserve.id}
                title={reserve.name}
                description={reserve.description}
                link={`/reserves/${reserve.id}`}
                badge={reserve.dlc_required ? 'DLC Required' : 'Base Game'}
                details={[
                  `Location: ${reserve.location}`,
                  `Size: ${reserve.size}`,
                  `Terrain: ${reserve.terrain}`,
                ]}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Reserves;
