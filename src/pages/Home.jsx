/**
 * Home Page Component
 * 
 * The main landing page for TheHunter: COTW Guide.
 * 
 * Sections:
 * 1. Hero banner with title and subtitle
 * 2. Welcome section with introduction text
 * 3. "Explore the Guide" cards (Reserves, Animals, Weapons)
 * 4. Quick Hunting Tips grid
 * 5. Featured Reserve spotlight
 * 6. About This Project section with GitHub link
 */

import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Card from '../components/Card';
import FeaturedReserve from '../components/FeaturedReserve';
import { CSS_CLASSES } from '../utils/constants';

function Home() {
  return (
    <div className={CSS_CLASSES.pageContainer}>
      {/* Hero Section */}
      <Hero
        title="TheHunter: Call of the Wild"
        subtitle="Your comprehensive guide to mastering the ultimate hunting experience"
      />

      <div className={CSS_CLASSES.contentContainer}>
        
        {/* Welcome Section */}
        <section className={CSS_CLASSES.section}>
          <h2 className={CSS_CLASSES.sectionHeadingLeft}>
            Welcome to Your Hunting Adventure
          </h2>
          <p className={`${CSS_CLASSES.bodyText} mb-4`}>
            TheHunter: Call of the Wild is an immersive hunting simulation that offers
            players a realistic and expansive experience across stunning open-world reserves.
            This guide will help you navigate through the various reserves, understand animal
            behavior, choose the right weapons, and become a master hunter.
          </p>
          <p className={CSS_CLASSES.bodyText}>
            Whether you're tracking a majestic Red Deer in Hirschfelden or facing the
            dangerous Brown Bear in Medved-Taiga, this guide has everything you need to
            succeed.
          </p>
        </section>

        {/* Explore the Guide - Navigation Cards */}
        <section className={CSS_CLASSES.section}>
          <h2 className={CSS_CLASSES.sectionHeading}>
            Explore the Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Reserves"
              description="Discover 17 unique hunting reserves from around the world, each with distinct terrain, climate, and wildlife. From German farmlands to Siberian taiga."
              link="/reserves"
              badge="17 Locations"
            />
            <Card
              title="Animals"
              description="Learn about over 100 animal species across 9 different classes. Understand their behavior, habitats, and the best hunting strategies for each."
              link="/animals"
              badge="100+ Species"
            />
            <Card
              title="Weapons"
              description="Master a wide arsenal of rifles, shotguns, bows, and handguns. Learn which caliber works best for each animal class."
              link="/weapons"
              badge="Coming Soon"
            />
          </div>
        </section>

        {/* Quick Hunting Tips */}
        <section className={CSS_CLASSES.card}>
          <h2 className={CSS_CLASSES.sectionHeadingLeft}>
            Quick Hunting Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tip 1: Tracking */}
            <div>
              <h3 className={CSS_CLASSES.subheading}>
                Track Carefully
              </h3>
              <p className="text-gray-300">
                Pay attention to tracks, droppings, and calls. Each animal leaves distinct
                signs that can help you predict their location and behavior.
              </p>
            </div>

            {/* Tip 2: Wind Direction */}
            <div>
              <h3 className={CSS_CLASSES.subheading}>
                Mind the Wind
              </h3>
              <p className="text-gray-300">
                Always check wind direction. Animals have an excellent sense of smell and
                will flee if they catch your scent.
              </p>
            </div>

            {/* Tip 3: Weapon Selection */}
            <div>
              <h3 className={CSS_CLASSES.subheading}>
                Choose the Right Weapon
              </h3>
              <p className="text-gray-300">
                Using the correct caliber for each animal class is crucial for maintaining
                score integrity and ensuring ethical harvests.
              </p>
            </div>

            {/* Tip 4: Need Zones */}
            <div>
              <h3 className={CSS_CLASSES.subheading}>
                Learn Need Zones
              </h3>
              <p className="text-gray-300">
                Animals follow daily routines with feeding, drinking, and resting zones.
                Learn these patterns for successful hunts.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Reserve Spotlight */}
        <FeaturedReserve
          name="Askiy Ridge"
          subtitle="Alberta's Breathtaking Wilderness"
          size="25 km²"
          animalCount={19}
          difficulty="Expert Challenge"
          featuredSpecies={[
            "Grizzly Bear (Class 9)",
            "Moose (Class 7)",
            "Elk (Class 6)"
          ]}
          description="Experience the newest and most challenging reserve! Face dangerous Grizzly Bears, hunt massive Moose, and explore Alberta's stunning snowy wilderness with 19 species and exclusive missions."
          reserveId="askiy-ridge"
        />

        {/* About This Project */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-hunter-tan mb-4">
            About This Guide
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
            This is an unofficial guide created by a passionate hunter and computer science
            student. The goal is to provide a more structured, aesthetic, and informative
            resource than existing wikis.
          </p>
          {/* GitHub Repository Link */}
          <Link
            to="https://github.com/AleksanderAsoy/TheHunterCOTW-Guide"
            target="_blank"
            rel="noopener noreferrer"
            className={CSS_CLASSES.primaryButtonLarge}
          >
            {/* GitHub Icon */}
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Home;
