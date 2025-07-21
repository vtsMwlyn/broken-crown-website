import { useRef, useState } from 'react';
import { PageFlip } from 'page-flip';
import '../flipbook.css'; // Your styles

import SectionContainer from "../components/SectionContainer"
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";
import { useEffect } from 'react';

const backgrounds = [
	{
		title: 'Elydnia',
		desc: 'Known as the Island of Eternal Winter, is a barren and inhospitable land where vegetation cannot thrive, and resources are exceedingly scarce. To sustain their survival, its inhabitants are forced to raid neighboring nations relentlessly. The island is geographically divided into two distinct regions: the Highlands and the Lowlands. The Highlands are home to affluent supporters of the Queen, who benefit from the spoils of conquest, while the Lowlands house those who oppose her pillaging ways, living in impoverished conditions as a result.'
	},
	{
		title: 'Town square',
		desc: 'The vibrant heart of Fennora Village, this bustling square serves as the settlement\'s sole hub of activity. Villagers gather daily to barter at makeshift stalls, purchase provisions, and exchange news, transforming the space into a lively mosaic of commerce and community. From dusk till dawn, the square thrums with the rhythms of life, remaining the only place where the last lowland village truly feels alive.'
	},
	{
		title: 'Outskirts',
		desc: 'Once considered part of Fennora Village, these lawless land have been abandoned to chaos. Now dominated by the notorious Laughing Death bandits, the region serves as their base camp of operations, rendering travel through the area perilous.'
	},
	{
		title: 'Sylphor cave',
		desc: 'This mysterious cavern serves as the primary source of seraphalum ore, its depths illuminated by pools of radiant golden water whose origins remain unknown. Though nobody can explain its luminous properties, many reverently regard it as sacred, dubbing it "holy water" and attributing mystical significance to its glow. The cave\'s eerie luminescence and valuable ore make it both a vital resource and a site of whispered legends in Eldynia.'
	},
	{
		title: 'Serapheum arena',
		desc: 'Forged from the spoils of countless raids on Nyxopolis, this arena stands as Eldynia\'s answer to mockery of foreign decadence. More than mere entertainment, the arena serves as a proving ground where people could endure trials to become guards, settle disputes between citizens, and find out the true mightiest warrior. Its a testament to Eldynia\'s belief that only the strong has the right to lead.'
	},
];

const galeries = [
	['/background/elydnia1.png', '/background/elydnia2.png', '/background/elydnia3.jpg'],
	['/background/townsquare3.png', '/background/townsquare2.webp', '/background/townsquare1.png'],
	['/background/outskirt3.png', '/background/outskirt2.png', '/background/outskirt1.png'],
	['/background/sylphorcave1.webp', '/background/sylphorcave2.jpg', '/background/sylphorcave3.webp'],
	['/background/seraphiumarena1.png', '/background/seraphiumarena2.png', '/background/seraphiumarena3.png'],
];

function Flipbook({ onNextClick, onPrevClick }) {
	const bookRef = useRef(null);
	const pageFlipInstance = useRef(null);
	
	const handleNextPage = () => {
		if (pageFlipInstance.current) {
			onNextClick();
			pageFlipInstance.current.flipNext();
		}
	};

	const handlePrevPage = () => {
		if (pageFlipInstance.current) {
			onPrevClick();
			pageFlipInstance.current.flipPrev();
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (bookRef.current) {
				pageFlipInstance.current = new PageFlip(bookRef.current, {
					width: 480,
					height: 550,
					showCover: false, // <-- Change this to false
					maxShadowOpacity: 0.5,
				});

				const pages = document.querySelectorAll('.my-page');
				if (pages.length > 0) {
					pageFlipInstance.current.loadFromHTML(pages);

					// Get the total number of pages
					const pageCount = pageFlipInstance.current.getPageCount();

					// Set initial z-index for all pages
					document.querySelectorAll('.my-page').forEach((page, index) => {
						page.style.zIndex = pageCount - index;
					});

					// Add an event listener for the 'flip' event
					pageFlipInstance.current.on('flip', (e) => {
						// e.data is the page number that was just flipped (e.g., 2)
						const currentPageNum = e.data;

						document.querySelectorAll('.my-page').forEach((page, index) => {
							if (index <= currentPageNum) {
								// Set z-index for pages on the left (already flipped)
								page.style.zIndex = index + 1;
							} else {
								// Set z-index for pages on the right
								page.style.zIndex = pageCount - index;
							}
						});
					});
				}
			}
		}, 100);

		return () => {
			clearTimeout(timer);
			if (pageFlipInstance.current) {
				pageFlipInstance.current.destroy();
				pageFlipInstance.current = null;
			}
		};
	}, []);

	return (
		<div className="flipbook-container cursor-grab" ref={bookRef}>
			{/* Dynamic pages */}
			{galeries.map((gallery, index) => (
				<div key={index}>
					<div className="my-page">
						<div className="page-content">
							<div className="flex flex-col w-3/4 h-full gap-10">
								<div className="bg-black w-full h-3/5" >
									<img src={gallery[0]} className="w-full h-full" style={{ objectFit: 'cover', objectPosition: 'center' }} alt="Brimvahl-Crown-Background-Galery" />
								</div>
								<div className="bg-black w-full h-2/5" >
									<img src={gallery[1]} className="w-full h-full" style={{ objectFit: 'cover', objectPosition: 'center' }} alt="Brimvahl-Crown-Background-Galery" />
								</div>
							</div>
						</div>
					</div>
					<div className="my-page">
						<div className="page-content">
							<div className="bg-black h-full w-3/4" >
								<img src={gallery[2]} className="w-full h-full" style={{ objectFit: 'cover', objectPosition: 'center' }} alt="Brimvahl-Crown-Background-Galery" />
							</div>
						</div>
					</div>
				</div>
			))}

			<ArrowLeft onClick={handlePrevPage} className="absolute left-[-120px] top-60 rotate-5" />
			<ArrowRight onClick={handleNextPage} className="absolute right-[-120px] top-70 rotate-5" />
		</div>
	);
	}

export default function Background() {
	const [currentPage, setCurrentPage] = useState(0);
	const [activeBackground, setActiveBackground] = useState(backgrounds[0]);

	const handleNextClick = () => {
		if (currentPage < backgrounds.length - 1) {
			let newCurrentPage = currentPage + 1;
			setCurrentPage(newCurrentPage);
			setActiveBackground(backgrounds[newCurrentPage]);
		}
	}

	const handlePrevClick = () => {
		if (currentPage > 0) {
			let newCurrentPage = currentPage - 1;
			setCurrentPage(newCurrentPage);
			setActiveBackground(backgrounds[newCurrentPage]);
		}
	}

	return (
		<SectionContainer className="min-h-screen pb-60" id="background" backgroundImage="url('/background-section-bg.png')">
			{/* Header */}
			<div className="bg-[#181818] w-full flex flex-col items-center text-white absolute top-40 left-0 text-4xl py-5">
				<div className="w-11/12 xl:w-5/6 max-w-[1500px] ml-40 relative">
					<h1>Background</h1>
					<img src="/fancy-underline.png" className="absolute top-5 left-[-100px] w-110" alt="Brimvahl-Crown-Fancy-Underline" />
				</div>
			</div>

			{/* Main content */}
			<div className="flex flex-col w-2/3 items-center relative mt-40">
				<img src="/book.png" className="h-[700px] mt-30 relative z-0" alt="Brimvahl-Crown-Background-Book" />

				{/* Galery on book */}
				<div className="absolute top-40 flex w-full h-3/5 gap-16 z-5 rotate-z-[7.5deg] rotate-x-25">
					<Flipbook onNextClick={handleNextClick} onPrevClick={handlePrevClick} />
				</div>

				{/* Card */}
				<div className="absolute flex flex-col items-center w-4/5 bottom-[-180px] z-10">
					<img src="/normal-text-card.png" className="w-5/6 h-5/6 absolute top-4" alt="Brimvahl-Crown-Text-Card" />
					<div className="w-3/4 text-base relative pt-10 pb-20 px-4">
						<h1 className="text-xl font-bold">{activeBackground.title}</h1>
						<p className="w-full mt-4">{activeBackground.desc}</p>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}