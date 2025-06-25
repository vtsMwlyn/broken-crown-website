// import { useState } from 'react'
import SectionContainer from "./components/SectionContainer"

function App() {
  return (
    <>
      <SectionContainer className="h-screen" backgroundImage="url('/page-hero-bg.png')">
        <img src="/logo.svg" className="w-1/2" alt="Brimvahl Crown Logo" />
      </SectionContainer>
      <SectionContainer className="h-screen" backgroundImage="url('/characters-section-bg.png')">
        <h1 className="font-bold text-5xl text-white">Characters</h1>
      </SectionContainer>
      <SectionContainer className="h-screen" backgroundImage="url('/news-and-info-section-bg.png')">
        <h1 className="font-bold text-5xl text-white">News and Info</h1>
      </SectionContainer>
      <SectionContainer className="h-screen" backgroundImage="url('/gameplay-feature-section-bg.png')">
        <h1 className="font-bold text-5xl text-white">Gameplay Feature</h1>
      </SectionContainer>
      <SectionContainer className="h-screen" backgroundImage="url('/background-section-bg.png')">
        <h1 className="font-bold text-5xl text-white">Background</h1>
      </SectionContainer>
    </>
  )
}

export default App
