import { useParams } from "react-router-dom"
import characters from "../characters-data";

import SectionContainer from "../components/SectionContainer"
import { useState } from "react";
import { useEffect } from "react";

export default function CharacterSingle() {
	const params = useParams();
	const { slug } = params;

	const [character, setCharacter] = useState(null);

	useEffect(() => {
		setCharacter(characters.find(c => c.slug === slug));
	}, [slug]);

	return (
		<SectionContainer className="h-screen overflow-y-hidden pt-20" backgroundImage="url('/page-hero-bg.png')">
			<div className="w-full h-full flex items-center">
				<div className="w-full h-fit flex items-center">
					<div className="w-1/2 flex flex-col pr-20">
						{/* Character name and underline */}
						<div className="flex flex-col w-fit">
							<h1 className="text-4xl font-bold text-white pl-16 pr-4 uppercase">{character?.name}</h1>
							<div className="flex w-full items-center mt-4">
								<img src="/character-name-underline-verticle.png" className="w-10" alt="Brimvahl-Crown-Character-Underline" />
								<div className="h-2 w-full ml-[-10px] bg-[#C29948] rounded-r-lg"></div>
							</div>
						</div>

						{/* Character description */}
						<p className="pl-16 mt-6 text-xl text-white">{character?.desc}</p>

						{/* VA Credit */}
						<div className="flex items-center gap-4 pl-8 mt-8">
							<img src="/va-icon.svg" className="w-20 h-20" alt="Brimvahl-Crown-VA-Icon" />
							<h1 className="text-[#C29948] text-4xl">VA: {character?.VA}</h1>
						</div>
					</div>
					<div className="w-1/2 flex flex-col items-center relative">
						<img src="/character-circle.png" className="w-full" alt="Brimvahl-Crown-Character-Circle" />
						<img src={character?.image} className="w-3/4 absolute top-0 h-screen object-contain" alt="Brimvahl-Crown-Character-Sprite" />
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}