import { Link } from "react-router-dom"
import characters from "../../data/characters"

import SectionContainer from "../../../components/SectionContainer"
import LinkButton from "../../../components/Button";

const highlightedCharacters = ['flaire-eladryn', 'kazmiel-elandys', 'deathless-king'];

function CharacterCard({ character, className, style }) {
  const chara = characters.find(c => c.slug === character);

  return (
    <Link
      to={`/characters/${chara?.slug}`}
      className={`w-full relative flex flex-col items-center text-white transition-transform ease-in-out duration-500 hover:translate-y-[-30px] hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] cursor-pointer ${className}`}
      style={style}
    >
      <div className="w-full h-full relative flex flex-col items-center">
        <img
          src="/character-card.webp"
          className="w-full h-full"
          alt="Brimvahl-Crown-Character-Card"
        />
        <img
          src={chara?.half}
          className="w-full h-full absolute p-4 z-5"
          alt="Brimvahl-Crown-Character-Sprite"
        />
        <h1 className="absolute top-8 left-8 text-4xl md:text-6xl text-[#A27A4F] uppercase">
          {chara?.nickName[0]}
        </h1>
        <h1 className="absolute bottom-8 right-8 text-4xl md:text-6xl text-[#A27A4F] uppercase">
          {chara?.nickName[0]}
        </h1>
      </div>
    </Link>
  )
}

export default function Characters() {
  return (
    <SectionContainer className="min-h-screen py-6 px-4" backgroundImage="url('/highlighted-characters-bg.webp')">
      <div className="w-full h-full flex flex-col items-center justify-between gap-8">
        
        {/* Section Title */}
        <div className="w-fit relative">
          <img
            src="/title-card.webp"
            className="w-[250px] md:w-[350px]"
            alt="Brimvahl-Crown-Title-Card"
          />
          <div className="font-2 absolute top-5 md:top-7 w-full flex justify-center items-center text-2xl md:text-4xl uppercase font-bold">
            Characters
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full md:w-3/4 gap-6 md:gap-10">
          {highlightedCharacters.map((slug, i) => (
            <CharacterCard key={i} character={slug} />
          ))}
        </div>

        {/* View More */}
        <LinkButton to="/characters" text="View More" className="w-[200px] md:w-[250px]" />
      </div>
    </SectionContainer>
  )
}
