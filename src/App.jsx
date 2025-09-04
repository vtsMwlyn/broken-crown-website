import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
// hello world
import Home from './pages/homepage/Index';
import Characters from './pages/Characters';
import CharacterSingle from './pages/CharacterSingle';
import Merch from './pages/Merch';
import FanArts from './pages/FanArts';
import Background from './pages/Background';

import SectionSeparator from "./components/SectionSeparator"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import 'bootstrap-icons/font/bootstrap-icons.css';

function ScrollToTop () {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col items-stretch">
      
        <Navbar />
          
        <main className="w-full min-h-screen">
          <ScrollToTop />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:slug" element={<CharacterSingle />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/fan-arts" element={<FanArts />} />
            <Route path="/background" element={<Background />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
      
      </div>
    </Router>
  )
}
