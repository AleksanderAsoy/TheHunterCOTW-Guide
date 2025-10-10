import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Reserves from './pages/Reserves';
import ReserveDetail from './pages/ReserveDetail';
import Animals from './pages/Animals';
import Weapons from './pages/Weapons';

function App() {
  return (
    <Router basename="/TheHunterCOTW-Guide">
      <div className="flex flex-col min-h-screen bg-hunter-darker">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reserves" element={<Reserves />} />
            <Route path="/reserves/:id" element={<ReserveDetail />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/weapons" element={<Weapons />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
