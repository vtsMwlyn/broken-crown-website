import { useParams } from "react-router-dom"
import characters from "./data/characters";
import weapons from "./data/weapons";

import SectionContainer from "../components/SectionContainer"
import { useState, useRef, useEffect } from "react";

export default function CharacterSingle() {
	const params = useParams();
	const { slug } = params;

	const [currentlyShowing, setCurrentlyShowing] = useState('character');
	const [character, setCharacter] = useState(null);
	const [weapon, setWeapon] = useState(null);
	const [isPlayingAudio, setIsPlayingAudio] = useState(false);
	const audioRef = useRef(null);

	useEffect(() => {
		const kyarakutaa = characters.find(c => c.slug === slug);

		if (kyarakutaa) {
			setCharacter(kyarakutaa);
			setWeapon(weapons.find(w => w.slug === kyarakutaa.weapon));
		}
	}, [slug]);

	const toggleAudioPlay = () => {
		if (isPlayingAudio) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlayingAudio(!isPlayingAudio);
	}

	return (
		<SectionContainer className="h-screen overflow-y-hidden pt-20" backgroundImage="url('/single-character-bg.png')">
			<div className="w-full h-full flex items-center">
				<div className="w-full h-fit flex items-center">
					<div className="w-1/2 flex flex-col pr-20">
						{/* Character/Weapon name and underline */}
						<div className="flex flex-col w-full">
							<h1 className="text-4xl font-bold text-white pl-16 pr-4 uppercase">{currentlyShowing === 'character' ? character?.fullName : weapon?.name}</h1>
							{currentlyShowing === 'character' && character?.title !== null && (
								<h2 className="text-white pl-16 pr-4 text-xl">{character?.title}</h2>
							)}
							<div className="flex w-full items-center">
								<img src="/character-name-underline-verticle.png" className="w-10" alt="Brimvahl-Crown-Character-Underline" />
								<div className="h-2 w-full ml-[-10px] bg-[#C29948] rounded-r-lg"></div>
							</div>
						</div>

						{/* VA Credit */}
						{currentlyShowing === 'character' && (
							<div className="flex items-center gap-4 pl-16">
								<audio src={character?.voiceline} ref={audioRef} onEnded={() => setIsPlayingAudio(false)} />
								<button onClick={toggleAudioPlay} className="w-10 h-10">
									<img src="/va-icon.svg" className="w-full-h-full" alt="Brimvahl-Crown-VA-Icon" />
								</button>
								<h1 className="text-[#C29948] text-xl">VA: {character?.VA}</h1>
							</div>
						)}

						{/* Character/Weapon description */}
						<p className="pl-8 mt-6 text-xl text-white">{currentlyShowing === 'character' ? character?.desc : weapon?.desc}</p>
					</div>
					<div className="w-1/2 flex flex-col items-center relative">
						{/* Character/Weapon Sprite */}
						<img src="/character-circle.png" className="w-full" alt="Brimvahl-Crown-Character-Circle" />
						<img src={currentlyShowing === 'character' ? character?.sprite : weapon?.sprite} className="w-3/4 absolute top-0 h-screen object-contain" alt="Brimvahl-Crown-Character-Sprite" />

						{/* Switch Character/Weapon */}
						<button onClick={() => setCurrentlyShowing('character')} className="w-25 absolute top-50 right-16 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] cursor-pointer">
							<img src={character?.icon} className="w-full object-contain" alt="Brimvahl-Crown-Character-Sprite" />
						</button>
						<button onClick={() => setCurrentlyShowing('weapon')} className="w-25 absolute bottom-50 right-16 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] cursor-pointer">
							<img src={weapon?.icon} className="w-full object-contain" alt="Brimvahl-Crown-Character-Sprite" />
						</button>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}