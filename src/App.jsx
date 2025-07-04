// import { useState } from 'react'
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
      {/* <SectionSeparator /> */}

      <Characters />
      {/* <SectionSeparator /> */}

      <NewsAndInfo />
      {/* <SectionSeparator /> */}

      <GameplayFeature />
      {/* <SectionSeparator /> */}
      
      <Background />

      <Footer />
    </>
  )
}

export default App
