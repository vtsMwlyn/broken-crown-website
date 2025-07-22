import { Link } from "react-router-dom"
import characters from "../../data/characters"

import SectionContainer from "../../../components/SectionContainer"

const highlightedCharacters = ['flaire-eladryn', 'kazmiel-elandys', 'deathless-king'];

function CharacterCard({ character, className, style, children }) {
	const chara = characters.find(c => c.slug === character);

	return (
		<div className={`w-full relative flex flex-col items-center transition ease-in-out duration-500 ${className}`} style={style}>
			<div className="w-full relative flex flex-col items-center">
				<img src="/character-card.png" className="w-full" alt="Brimvahl-Crown-Character-Card" />
				<img src={chara?.sprite} className="h-3/4 absolute top-10" alt="Brimvahl-Crown-Character-Sprite" />
				<h1 className="absolute bottom-8 left-8 text-3xl text-white uppercase">{chara?.nickName}</h1>
			</div>
			<p className="text-white text-xl w-full px-6 mt-4">{chara?.desc.split('.')[0]}</p>

			{children}
		</div>
	)
}

export default function Characters() {
	return (
		<SectionContainer className="min-h-screen py-20 pb-40" backgroundImage="url('/characters-bg.png')">
			<div className="w-full h-full flex flex-col items-center">
				{/* Section Title */}
				<div className="w-fit relative">
					<img src="/title-card.png" className="w-[350px]" alt="Brimvahl-Crown-Title-Card" />
					<div className="absolute top-6 w-full flex justify-center items-center text-4xl">Characters</div>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-3 w-3/4 gap-10 mt-10">
					<CharacterCard character={highlightedCharacters[0]} className="transform translate-y-30" />
					<CharacterCard character={highlightedCharacters[1]}>
						<Link to="/characters" target="_blank" className="relative mt-10 text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]">
							<img src="/button-bg.png" className="w-[180px]" alt="Brimvahl-Crown-Button" />
							<div className="absolute top-4 left-3 w-5/6 text-center text-xl">View More</div>
						</Link>
					</CharacterCard>
					<CharacterCard character={highlightedCharacters[2]} className="transform translate-y-30" />
				</div>
			</div>
		</SectionContainer>
	)
}