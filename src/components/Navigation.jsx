import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-hunter-darker shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-hunter-green-accent">
              TheHunter
            </span>
            <span className="text-2xl font-bold text-hunter-tan">
              COTW Guide
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-hunter-green-accent transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/reserves"
              className="text-gray-300 hover:text-hunter-green-accent transition-colors duration-200 font-medium"
            >
              Reserves
            </Link>
            <Link
              to="/animals"
              className="text-gray-300 hover:text-hunter-green-accent transition-colors duration-200 font-medium"
            >
              Animals
            </Link>
            <Link
              to="/weapons"
              className="text-gray-300 hover:text-hunter-green-accent transition-colors duration-200 font-medium"
            >
              Weapons
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-hunter-green-light focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link
              to="/"
              className="block py-2 text-gray-300 hover:text-hunter-green-light transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/reserves"
              className="block py-2 text-gray-300 hover:text-hunter-green-light transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Reserves
            </Link>
            <Link
              to="/animals"
              className="block py-2 text-gray-300 hover:text-hunter-green-light transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Animals
            </Link>
            <Link
              to="/weapons"
              className="block py-2 text-gray-300 hover:text-hunter-green-light transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Weapons
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;

