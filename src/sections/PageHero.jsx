import { Link } from "react-router-dom"

import SectionContainer from "../components/SectionContainer"

export default function PageHero() {
	return (
		<SectionContainer className="h-screen" backgroundImage="url('/page-hero-bg.png')">
			<div className="flex w-full mt-22 items-center">
				<div className="flex w-1/2 justify-center">
					<img src="/page-hero-main-image.png" className="w-3/4" alt="Brimvahl-Crown-Main" />
				</div>
				<div className="flex justify-center items-center w-1/2">
					<div className="w-full flex flex-col items-center justify-center mt-20">
						<img src="/logo.svg" className="w-11/12 z-5" alt="Brimvahl-Crown-Logo" />
						<div className="relative flex flex-col items-center w-full top-[-150px]">
							<img src="/page-hero-text-card.png" className="w-full" alt="Brimvahl-Crown-Text-Card" />
							<div className="absolute top-16 left-20 w-3/4 text-lg">
								<p className="w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolores quibusdam veritatis ad laborum cum natus totam nam tempore, ex, reprehenderit maxime!.</p>
								<p className="mt-4 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet hic iste corrupti commodi!</p>
							</div>
							<div className="flex gap-4">
								<Link to="https://www.google.com/" target="_blank" className="relative text-white hover:text-yellow-400">
									<img src="/button-bg.png" className="h-[50px]" alt="Brimvahl-Crown-Button" />
									<div className="absolute top-3 left-3 w-5/6 text-center">Download PC</div>
								</Link>
								<Link to="https://www.google.com/" target="_blank" className="relative text-white hover:text-yellow-400">
									<img src="/button-bg.png" className="h-[50px]" alt="Brimvahl-Crown-Button" />
									<div className="absolute top-3 left-3 w-5/6 text-center">Download Mobile</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}