// import { useState } from 'react'
import SectionContainer from "./components/SectionContainer"

function App() {
  return (
    <>
      <SectionContainer className="h-screen">
        <img src="/logo.svg" className="w-1/2" alt="Brimvahl Crown Logo" />
      </SectionContainer>
      <SectionContainer className="h-screen">
        <h1 className="font-bold text-5xl">Characters</h1>
      </SectionContainer>
      <SectionContainer className="h-screen">
        <h1 className="font-bold text-5xl">News and Info</h1>
      </SectionContainer>
      <SectionContainer className="h-screen">
        <h1 className="font-bold text-5xl">Gameplay Feature</h1>
      </SectionContainer>
      <SectionContainer className="h-screen">
        <h1 className="font-bold text-5xl">Background</h1>
      </SectionContainer>
    </>
  )
}

export default App
