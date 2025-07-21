import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Link } from "react-router-dom";
import factions from "../factions-data";
import characters from "../characters-data";

import SectionContainer from "../components/SectionContainer"
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";

export default function Characters() {
	/* SWIPER NAVIGATION BUTTONS MECHANISM */
	// const characterSwiperRef = useRef(null); // Create a reference for the Swiper instance
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
	// const [activeCharacter, setActiveCharacter] = useState(factions[0].characters[0]);

	// Function to handle the slide change event
	const handleFactionSlideChange = (swiper) => {
		const currentIndex = swiper.realIndex;
		const currentFaction = factions[currentIndex];
		setActiveFaction(currentFaction);
		// setActiveCharacter(currentFaction.characters[0]);

		// Add this line to reset the character swiper's position
		// if (characterSwiperRef.current) {
		// 	characterSwiperRef?.current?.swiper?.slideToLoop(0);
		// }
	};

	// const handleCharacterSlideChange = (swiper) => {
	// 	const currentIndex = swiper.realIndex;
	// 	const currentCharacter = activeFaction.characters[currentIndex];
	// 	setActiveCharacter(currentCharacter);
	// };
	
	
	return (
		<SectionContainer className="min-h-screen pt-13" id="characters" backgroundImage="url('/characters-bg.png')" isFullWidth={true}>
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
							<div className="bg-[#6D6D6D] rounded-full w-55 h-55"></div>
						</div>
						<div className="h-1/3 w-1/5 flex items-center justify-center bg-[#2A2A2A]">
							<div className="bg-[#D9D9D9] rounded-full w-55 h-55"></div>
						</div>
						<div className="h-1/3 w-1/5 flex items-center justify-center bg-[#101010]">
							<div className="bg-[#6D6D6D] rounded-full w-55 h-55"></div>
						</div>
					</div>

					{/* Selector */}
					<div className="flex flex-col h-screen justify-center w-full" id="faction-section">
						<div className="w-full h-full flex flex-col items-center gap-5 relative">
							<div className="absolute z-5 top-[30vh] bg-white rounded-full h-15 w-15">
								<ArrowLeft className="rotate-[90deg] scale-[0.7]" onClick={() => handlePrev(factionSwiperRef)} />
							</div>

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

							<div className="absolute z-5 bottom-[30vh] bg-white rounded-full h-15 w-15">
								<ArrowRight className="rotate-[90deg] scale-[0.7]" onClick={() => handleNext(factionSwiperRef)} />
							</div>
						</div>
					</div>
				</div>
				
				{/* Character photo (right side) */}
				<div className="w-2/5 h-full relative">
					<div className="w-full h-1/2 bg-white">
						<img className="w-full h-full object-cover object-center" src={activeFaction ? activeFaction.banner : activeFaction[0].banner} alt="Brimvahl-Crown-Faction-Banner" />
					</div>
					<div className="w-full h-1/2 flex items-center px-10">
						<div className="w-fit grid-container">
							{activeFaction && characters.filter(c => c.faction === activeFaction.slug)?.map((c, index) => (
								<Link to={`/characters/${c.slug}`} key={index} className="w-30 flex items-center justify-center hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] cursor-pointer">
									<img src={c.icon} alt="Brimvahl-Crown-Character-Border" />
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}