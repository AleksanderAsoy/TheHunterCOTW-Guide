/**
 * App Component - Main Application Entry Point
 * 
 * This is the root component that sets up routing and layout for the entire application.
 * 
 * Routing Structure:
 * - / : Home page
 * - /reserves : List of all reserves
 * - /reserves/:id : Individual reserve detail page
 * - /animals : List of all animals
 * - /weapons : Weapons page (coming soon)
 * - /profile : Profile page with harvest tracking (coming soon)
 * 
 * Layout Structure:
 * - Navigation (sticky header)
 * - Main content area (routes)
 * - Footer (sticky at bottom)
 * 
 * The basename="/TheHunterCOTW-Guide" is set for GitHub Pages deployment.
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Reserves from './pages/Reserves';
import ReserveDetail from './pages/ReserveDetail';
import Animals from './pages/Animals';
import Weapons from './pages/Weapons';
import Profile from './pages/Profile';

function App() {
  return (
    // Router with GitHub Pages basename
    <Router basename="/TheHunterCOTW-Guide">
      {/* Main container: flex column to push footer to bottom */}
      <div className="flex flex-col min-h-screen bg-hunter-darker">
        
        {/* Sticky Navigation Header */}
        <Navigation />
        
        {/* Main Content Area - grows to fill space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reserves" element={<Reserves />} />
            <Route path="/reserves/:id" element={<ReserveDetail />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/weapons" element={<Weapons />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        
        {/* Footer - always at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
