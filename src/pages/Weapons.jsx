import Hero from '../components/Hero';

function Weapons() {
  return (
    <div className="min-h-screen bg-hunter-darker">
      <Hero
        title="Weapons Arsenal"
        subtitle="Master your tools for the perfect hunt"
        backgroundClass="bg-gradient-to-r from-hunter-orange via-hunter-orange-light to-hunter-orange-dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Coming Soon Message */}
        <section className="bg-hunter-dark rounded-lg p-12 border border-hunter-brown text-center">
          <div className="max-w-2xl mx-auto">
            <svg
              className="w-24 h-24 mx-auto mb-6 text-hunter-green-light"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <h2 className="text-4xl font-bold text-hunter-tan mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We're currently compiling detailed information about all weapons in
              TheHunter: Call of the Wild. This section will include:
            </p>
            <ul className="text-left text-gray-300 space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-hunter-green-light mr-3">✓</span>
                Complete rifle catalog with caliber specifications
              </li>
              <li className="flex items-center">
                <span className="text-hunter-green-light mr-3">✓</span>
                Shotgun varieties and ammunition types
              </li>
              <li className="flex items-center">
                <span className="text-hunter-green-light mr-3">✓</span>
                Bow and crossbow options
              </li>
              <li className="flex items-center">
                <span className="text-hunter-green-light mr-3">✓</span>
                Handguns and revolvers
              </li>
              <li className="flex items-center">
                <span className="text-hunter-green-light mr-3">✓</span>
                Weapon recommendations by animal class
              </li>
              <li className="flex items-center">
                <span className="text-hunter-green-light mr-3">✓</span>
                Sight and scope comparisons
              </li>
            </ul>
            <p className="text-gray-400 italic">
              Check back soon for updates!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Weapons;

