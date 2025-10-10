import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import reservesData from '../data/reserves.json';

function ReserveDetail() {
  const { id } = useParams();
  const [reserve, setReserve] = useState(null);

  useEffect(() => {
    const foundReserve = reservesData.find(r => r.id === id);
    setReserve(foundReserve);
  }, [id]);

  if (!reserve) {
    return (
      <div className="min-h-screen bg-hunter-darker flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-hunter-tan mb-4">
            Reserve Not Found
          </h2>
          <Link
            to="/reserves"
            className="text-hunter-green-light hover:text-hunter-tan transition-colors"
          >
            Back to Reserves
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hunter-darker">
      {/* Hero Image Section */}
      {reserve.image && (
        <div className="relative h-96 overflow-hidden">
          <img 
            src={reserve.image} 
            alt={reserve.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hunter-darker/50 to-hunter-darker"></div>
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
      {!reserve.image && (
        <Hero
          title={reserve.name}
          subtitle={reserve.location}
          backgroundClass="bg-gradient-to-r from-hunter-green to-hunter-brown"
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/reserves"
          className="inline-flex items-center text-hunter-green-light hover:text-hunter-tan transition-colors mb-8"
        >
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

        {/* Reserve Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="bg-hunter-dark rounded-lg p-8 border border-hunter-brown mb-8">
              <h2 className="text-3xl font-bold text-hunter-tan mb-4">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {reserve.description}
              </p>
            </section>

            {/* Featured Species */}
            <section className="bg-hunter-dark rounded-lg p-8 border border-hunter-brown">
              <h2 className="text-3xl font-bold text-hunter-tan mb-6">
                Featured Species
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {reserve.featured_species.map((species, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-hunter-darker rounded-lg"
                  >
                    <span className="text-hunter-green-light mr-3 text-xl">•</span>
                    <span className="text-gray-300">{species}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-hunter-dark rounded-lg p-6 border border-hunter-brown sticky top-20">
              <h3 className="text-2xl font-bold text-hunter-tan mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Location</p>
                  <p className="text-gray-300 font-medium">{reserve.location}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Size</p>
                  <p className="text-gray-300 font-medium">{reserve.size}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Terrain</p>
                  <p className="text-gray-300 font-medium">{reserve.terrain}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Availability</p>
                  <p className="text-gray-300 font-medium">
                    {reserve.dlc_required ? 'DLC Required' : 'Base Game'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReserveDetail;

