import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './pages/homepage/Index';
import Characters from './pages/assets/characters';
import CharacterSingle from './pages/assets/charactersingle';
import Merch from './pages/Merch';
import FanArts from './pages/FanArts';
import Background from './pages/assets/backgrounds';
import SignUp from './pages/SignUp';

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Socmed from './components/Socmed';

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
            <Route path="/character" element={<Characters />} />
            <Route path="/character/:slug" element={<CharacterSingle />} />
            <Route path="/assets/merchs" element={<Merch />} />
            <Route path="/fan-art" element={<FanArts />} />
            <Route path="/background" element={<Background />} />
            <Route path="/sign-up" element={<SignUp />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Socmed />
        <Footer />      
      </div>
    </Router>
  )
}
