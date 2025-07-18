import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import SectionContainer from "../../../components/SectionContainer"
import ArrowLeft from "../../../components/ArrowLeft";
import ArrowRight from "../../../components/ArrowRight";

// Sample data
const factions = [
	{
		name: 'The Elandys Family',
		icon: '/characters/elandysfamilyph.png',
		desc: 'Once revered as the world’s most powerful bloodline, the Elandys family stands as the last surviving lineage of seraphs. Their dwindling numbers have led to generations of inbreeding and mixed unions, weakening their once-unrivaled divine heritage. Now, they cling to power through cunning, legacy, and the fading embers of their celestial might.',
		characters: [
			{
				name: 'Mariel Elandys – The Last True Seraph',
				desc: 'The current Queen of Eldynia and the final pure-blooded seraph, Mariel rules with calculated aggression and unshakable confidence. Though she lacks the overwhelming strength of her ancestors, her sharp wit and commanding presence deter challengers. Through sheer force of will, she maintains the illusion of invincibility, ensuring her kingdom’s survival in an era of decline.',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
			},
			{
				name: 'Kazmiel Elandys – The Pantocrator',
				image: '/characters/kazmiel.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Mariel’s firstborn, a half-seraph, was born without wings, a mark of no divinity. Yet, when her father was slain, Kazmiel awakened her latent power, manifesting glowing wings and ascending as one of history’s most formidable warriors. Her plundering missions brought immeasurable wealth to Eldynia, but her love for a lowlander led to her abandoning war. Deemed a traitor to the crown, she was exiled, removed from history.',
			},
			{
				name: 'Vael Elandys – The Crown’s Final Hope',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'The second child of Queen Mariel, Vael was born with wings, a symbol of his boundless potential. As a youth, he achieved the impossible by drawing the legendary Seraphic Blade Extharion from the stone at Castle Vrosk’s gardens, a feat none before him could accomplish. With his prodigious strength and divine destiny, he represents Eldynia’s brightest hope for restoration.',
			},
			{
				name: 'Flaire Eldryn – The Grand Mage',
				image: '/characters/flaire.png',
				icon: '/character-icon-placeholder.png',
				desc: 'The enigmatic Grand Mage of Eldynia, Flaire serves as both advisor and caretaker to the royal family. Despite her claims of being human, her unnaturally long life, spanning even the Queen’s reign, hints at hidden origins. Knowledgeable, discreet, and impossibly ancient, she has guided three generations of Elandys rulers, her true motives as veiled as her past.',
			},
			{
				name: '????? - The Deathless King',
				image: '/characters/deathlessking.png',
				icon: '/character-icon-placeholder.png',
				desc: 'A swordsman with extraordinary powers.',
			},
		]
	},
	{
		name: 'Brimvahl Guards',
		icon: '/characters/brimvahlguardsph.png',
		desc: 'The Brimvahl Guards are elite warriors hardened through countless battles and pillaging campaigns. Personally trained by grandmaster Kazmiel and grand mage Flaire, they master both spear combat and fundamental battle magic, making them versatile and formidable opponents on any battlefield. Their extensive experience and dual expertise in martial and arcane warfare establish them as one of Eldynia\'s most respected and feared fighting forces. They are now led by their new grandmaster Trixarina Moonwhisper.',
		characters: [
			{
				name: 'Elite guard Tarva',
				image: '/characters/femaleeliteguard.png',
				icon: '/character-icon-placeholder.png',
				desc: 'The Tarva units are typically female faunakins, specializing in locating treasures, swift plundering, and eliminating enemy cavalry units; their faunakin traits allow them to sense treasure locations, move with exceptional agility and flexibility, and communicate with the beasts ridden by cavalry, making them ideal for these tasks. Their armor is designed for speed, offering protection only to vital areas.',
			},
			{
				name: 'Elite guard Tarvon',
				image: '/characters/maleeliteguard.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Composed primarily of male humans for their adaptability and inconspicuousness, Tarvon units specialize in covert infiltration, targeted assassinations, and the neutralization of enemy artillery. Their armor is fully enclosed, featuring a protective hood to minimize exposure to lethal injuries. Designed for stealth and precision, these operatives execute high-risk missions behind enemy lines with lethal efficiency.',
			},	
			{
				name: 'Elite guard Durnas',
				image: '/characters/bruteguard.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Durnas units are predominantly composed of orcs and even giants, leveraging their immense strength and near-impenetrable defenses. While their size may hinder speed, they compensate with devastating offensive capabilities and unmatched resilience. Their primary role is to overwhelm and demoralize enemy forces, serving as the vanguard in large-scale assaults to crush opposition through sheer force.',
			},
			{
				name: 'Normal guard',
				image: '/characters/normalguard.png',
				icon: '/character-icon-placeholder.png',
				desc: 'The Guards represent Eldynia’s most coveted profession, offering unmatched pay, residence in Castle Vrosk, and open recruitment to all, regardless of background and status. The sole requirement? Surviving the grueling Arena Challenge, where applicants must endure five minutes against an elite guard. Those who succeed join the ranks of Eldynia’s guards and on their path to become an elite guard after surviving a minimum of 5 pillage missions.',
			},
			{
				name: 'Unknown 5',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Another unknown character again, still searching for its information...',
			}
		]
	},
	{
		name: 'Unknown Faction 1',
		icon: '/characters/factionph1.png',
		desc: 'The unknown faction 1 is literally unknown, no one ever met or see the faction. Maybe someday someone will figure this mysterious unknown faction?',
		characters: [
			{
				name: 'Unknown 1',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Unknown character, still searching for its information...',
			},
			{
				name: 'Unknown 2',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Also unknown character, still searching for its information...',
			},
			{
				name: 'Unknown 3',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Another unknown character again, still searching for its information...',
			},
			{
				name: 'Unknown 4',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Also unknown character, still searching for its information...',
			},
			{
				name: 'Unknown 5',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Another unknown character again, still searching for its information...',
			}
		]
	},
	{
		name: 'Unknown Faction 2',
		icon: '/characters/factionph2.png',
		desc: 'The unknown faction 2 is literally unknown, no one ever met or see the faction. Maybe someday someone will figure this mysterious unknown faction?',
		characters: [
			{
				name: 'Unknown 1',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Unknown character, still searching for its information...',
			},
			{
				name: 'Unknown 2',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Also unknown character, still searching for its information...',
			},
			{
				name: 'Unknown 3',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Another unknown character again, still searching for its information...',
			},
			{
				name: 'Unknown 4',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Also unknown character, still searching for its information...',
			},
			{
				name: 'Unknown 5',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Another unknown character again, still searching for its information...',
			}
		]
	},
	{
		name: 'Unknown Faction 3',
		icon: '/characters/factionph3.png',
		desc: 'The unknown faction 3 is literally unknown, no one ever met or see the faction. Maybe someday someone will figure this mysterious unknown faction?',
		characters: [
			{
				name: 'Unknown 1',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Unknown character, still searching for its information...',
			},
			{
				name: 'Unknown 2',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Also unknown character, still searching for its information...',
			},
			{
				name: 'Unknown 3',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Another unknown character again, still searching for its information...',
			},
			{
				name: 'Unknown 4',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Also unknown character, still searching for its information...',
			},
			{
				name: 'Unknown 5',
				image: '/characters/unknown-portrait.png',
				icon: '/character-icon-placeholder.png',
				desc: 'Another unknown character again, still searching for its information...',
			}
		]
	}
];

export default function Characters() {
	/* SWIPER NAVIGATION BUTTONS MECHANISM */
	const characterSwiperRef = useRef(null); // Create a reference for the Swiper instance
	const factionSwiperRef = useRef(null);

	// Function to handle the next slide
	function handleNext(swiperRef) {
		if (swiperRef.current) {
			swiperRef.current.swiper.slideNext();
		}
	};

	// Function to handle the previous slide
	function handlePrev(swiperRef) {
		if (swiperRef.current) {
			swiperRef.current.swiper.slidePrev();
		}
	};

	const [activeFaction, setActiveFaction] = useState(factions[0])
	const [activeCharacter, setActiveCharacter] = useState(factions[0].characters[0]);

	// Function to handle the slide change event
	const handleFactionSlideChange = (swiper) => {
		const currentIndex = swiper.realIndex;
		const currentFaction = factions[currentIndex];
		setActiveFaction(currentFaction);
		setActiveCharacter(currentFaction.characters[0]);

		// Add this line to reset the character swiper's position
		if (characterSwiperRef.current) {
			characterSwiperRef?.current?.swiper?.slideToLoop(0);
		}
	};

	const handleCharacterSlideChange = (swiper) => {
		const currentIndex = swiper.realIndex;
		const currentCharacter = activeFaction.characters[currentIndex];
		setActiveCharacter(currentCharacter);
	};

	return (
		<SectionContainer className="min-h-screen" id="characters" backgroundImage="url('/characters-bg.png')" isFullWidth={true}>
			{/* Section Title */}
			<div className="absolute top-0 z-6 h-1/6">
				<img src="/title-card.png" className="w-[350px]" alt="Brimvahl-Crown-Title-Card" />
				<div className="absolute top-6 w-full flex justify-center items-center text-4xl">Characters</div>
			</div>

			<div className="w-full flex items-stretch h-full relative z-5">
				{/* Left side */}
				<div className="w-2/5 flex flex-col justify-center items-center">
					{/* Character name */}
					<div className="relative mt-[50px]">
						<img src="/title-card.png" className="w-[380px]" alt="Brimvahl-Crown-Title-Card" />
						<div className="absolute top-7 w-full flex justify-center items-center text-4xl">{activeFaction ? activeFaction.name : activeFaction[0].name}</div>
					</div>

					{/* Card */}
					<div className="relative flex flex-col items-center w-7/8 mt-10">
						<img src="/normal-text-card.png" className="w-full h-full absolute top-0" alt="Brimvahl-Crown-Text-Card" />
						<div className="w-3/4 text-base relative py-8">
							<p className="w-full">{activeFaction ? activeFaction.desc : activeFaction[0].desc}</p>
						</div>
					</div>

					{/* Selector (Temporary disabled, will be moved to characters page) */}
					{/* <div className="flex gap-5 justify-center w-3/4 mt-6" id="character-icon">
						<ArrowLeft onClick={() => handlePrev(characterSwiperRef)} />

						<Swiper
							onSlideChange={handleCharacterSlideChange}
							className="w-2/3 cursor-grab"
							slidesPerView={3}
							centeredSlides={true}
							spaceBetween={0}
							ref={characterSwiperRef}
							loop
						>
							{activeFaction.characters?.map((c, index) => (
								<SwiperSlide key={index} onClick={() => characterSwiperRef.current?.swiper.slideToLoop(index)}>
									<img src={c.icon} className="scale-[0.7] transition duration-300 ease-in-out" alt="Brimvahl-Crown-Character-Icon" />
								</SwiperSlide>
							))}
						</Swiper>

						<ArrowRight onClick={() => handleNext(characterSwiperRef)} />
					</div> */}
				</div>

				{/* Middle side */}
				<div className="w-1/5 h-full flex flex-col items-center bg-green-100">
					<div className="absolute top-0 w-full h-full flex flex-col items-center">
						<div className="h-1/3 w-1/5 flex items-center justify-center bg-[#101010]">
							<div className="bg-[#D9D9D9] rounded-full w-60 h-60"></div>
						</div>
						<div className="h-1/3 w-1/5 flex items-center justify-center bg-[#2A2A2A]">
							<div className="bg-[#D9D9D9] rounded-full w-60 h-60"></div>
						</div>
						<div className="h-1/3 w-1/5 flex items-center justify-center bg-[#101010]">
							<div className="bg-[#D9D9D9] rounded-full w-60 h-60"></div>
						</div>
					</div>

					{/* Selector */}
					<div className="flex flex-col h-screen justify-center w-full" id="faction-section">
						<div className="w-full h-full flex flex-col items-center gap-5 relative">
							<ArrowLeft className="rotate-[90deg] absolute z-5 top-50" onClick={() => handlePrev(factionSwiperRef)} />

							<Swiper
								direction={'vertical'}
								onSlideChange={handleFactionSlideChange}
								className="w-full h-full cursor-grab"
								slidesPerView={3}
								centeredSlides={true}
								spaceBetween={0}
								ref={factionSwiperRef}
								loop
							>
								{factions && factions.map((f, index) => (
									<SwiperSlide key={index} onClick={() => factionSwiperRef.current?.swiper.slideToLoop(index)}>
										<div className="w-full h-full flex items-center justify-center">
											<img src={f.icon} className="transition-all ease-in-out duration-300 w-50 h-50 brightness-25" alt="Brimvahl-Crown-Faction-Icon" />
										</div>
									</SwiperSlide>
								))}
							</Swiper>

							<ArrowRight className="rotate-[90deg] absolute z-5 bottom-50" onClick={() => handleNext(factionSwiperRef)} />
						</div>
					</div>
				</div>
				
				{/* Character photo (right side) */}
				<div className="w-2/5 h-full relative">
					<div className="w-full h-1/2 flex items-center justify-center bg-[#6D6D6D]">
						<p>Faction Image</p>
					</div>
					<div className="w-full h-1/2 flex items-center justify-center">
						<div className="w-fit grid grid-cols-3">
							{activeFaction.characters?.map((c, index) => (
								<div key={index} className="w-35 h-35 flex items-center justify-center">
									<img src={c.icon} className="w-full h-full" alt="Brimvahl-Crown-Character-Icon" />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}