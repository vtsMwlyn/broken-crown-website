import { Link } from "react-router-dom"

import SectionContainer from "../components/SectionContainer"

export default function PageHero() {
	return (
		<SectionContainer className="min-h-screen" backgroundImage="url('/page-hero-bg.png')">
			<div className="flex w-full mt-22 pb-10 items-center">
				{/* Featured image (left side) */}
				<div className="flex w-1/2 justify-center">
					<img src="/page-hero-main-image.png" className="w-3/4" alt="Brimvahl-Crown-Main" />
				</div>

				{/* Right side */}
				<div className="flex flex-col justify-center items-center w-1/2">
					{/* Logo and text card */}
					<div className="w-full flex flex-col items-center justify-center">
						<img src="/logo.svg" className="w-11/12 z-5" alt="Brimvahl-Crown-Logo" />
						<div className="relative flex flex-col items-center w-full mt-[-150px]">
							<img src="/page-hero-text-card.png" className="w-full h-full absolute top-0" alt="Brimvahl-Crown-Text-Card" />
							<div className="w-3/4 text-lg relative py-18">	
								<p className="w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores quibusdam veritatis ad laborum cum natus totam nam tempore, ex, reprehenderit maxime!.</p>
								<p className="mt-4 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet hic iste corrupti commodi!</p>
							</div>
						</div>
					</div>

					{/* Download button */}
					<div className="flex gap-4">
						<Link to="https://www.google.com/" target="_blank" className="relative text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]">
							<img src="/button-bg.png" className="w-[180px]" alt="Brimvahl-Crown-Button" />
							<div className="absolute top-4 left-3 w-5/6 text-center">Download PC</div>
						</Link>
						<Link to="https://www.google.com/" target="_blank" className="relative text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]">
							<img src="/button-bg.png" className="w-[180px]" alt="Brimvahl-Crown-Button" />
							<div className="absolute top-4 left-3 w-5/6 text-center">Download Mobile</div>
						</Link>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}