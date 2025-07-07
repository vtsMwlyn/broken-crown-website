import 'bootstrap-icons/font/bootstrap-icons.css';

import SectionSeparator from "./components/SectionSeparator"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import PageHero from "./sections/PageHero"
import Characters from "./sections/Characters"
import NewsAndInfo from "./sections/NewsAndInfo"
import GameplayFeature from "./sections/GameplayFeature"
import Background from "./sections/Background"

function App() {
  return (
    <>
      <Navbar />
      
      <PageHero /> 


      <Characters />


      <NewsAndInfo />


      <GameplayFeature />

      
      <Background />

      <Footer />
    </>
  )
}

export default App
