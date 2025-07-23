import { Link } from "react-router-dom"
import characters from "../../data/characters"

import SectionContainer from "../../../components/SectionContainer"
import LinkButton from "../../../components/Button";

const highlightedCharacters = ['flaire-eladryn', 'kazmiel-elandys', 'deathless-king'];

function CharacterCard({ character, className, style }) {
	const chara = characters.find(c => c.slug === character);

	return (
		<Link to={`/characters/${chara?.slug}`} className={`w-full relative flex flex-col items-center text-white transition-transform ease-in-out duration-500 hover:translate-y-[-30px] hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] cursor-pointer ${className}`} style={style}>
			<div className="w-full h-full relative flex flex-col items-center">
				<img src="/character-card.png" className="w-full h-full" alt="Brimvahl-Crown-Character-Card" />
				<img src={chara?.half} className="w-full h-full absolute p-4 z-5" alt="Brimvahl-Crown-Character-Sprite" />
				<h1 className="absolute top-8 left-8 text-6xl text-[#A27A4F] uppercase">{chara?.nickName[0]}</h1>
				<h1 className="absolute bottom-8 right-8 text-6xl text-[#A27A4F] uppercase">{chara?.nickName[0]}</h1>
			</div>
		</Link>
	)
}

export default function Characters() {
	return (
		<SectionContainer className="h-screen py-6" backgroundImage="url('/highlighted-characters-bg.png')">
			<div className="w-full h-full flex flex-col items-center justify-between">
				{/* Section Title */}
				<div className="w-fit relative">
					<img src="/title-card.png" className="w-[350px]" alt="Brimvahl-Crown-Title-Card" />
					<div className="absolute top-6 w-full flex justify-center items-center text-4xl">Characters</div>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-3 w-3/4 gap-10">
					<div>
						<CharacterCard character={highlightedCharacters[0]} />
					</div>
					<div>
						<CharacterCard character={highlightedCharacters[1]} />
					</div>
					<div>
						<CharacterCard character={highlightedCharacters[2]} />
					</div>
				</div>

				{/* View More */}
				<LinkButton to="/characters" text="View More" className="w-[250px]" />
			</div>
		</SectionContainer>
	)
}