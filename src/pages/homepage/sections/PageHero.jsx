import { Link } from "react-router-dom"

import SectionContainer from "../../../components/SectionContainer"
import LinkButton from "../../../components/Button"

export default function PageHero() {
	return (
		<SectionContainer className="min-h-screen">
			<video autoPlay muted loop className="w-screen h-screen object-cover object-center absolute top-0 left-0 z-[-10] brightness-[0.4]" style={{ objectFit: 'cover' }}>
				<source src="/page-hero-animation2.mp4" type="video/mp4" />
			</video>

			<div className="flex h-full w-full mt-22 pb-10 justify-center items-end">
				<div className="flex flex-col justify-center items-center w-1/2">
					{/* Logo and text card */}
					<div className="w-full flex flex-col items-center justify-center animate-brimvahl-crown-logo">
						<img src="/logo-homepage.webp" className="w-3/4 z-5 drop-shadow-[#000000]" alt="Brimvahl-Crown-Logo" />
					</div>

					{/* Download button */}
					<div className="flex gap-4 mt-5">
						<LinkButton to="https://store.steampowered.com/app/3179140/HR_Simulator/" text="Download Now" className="w-[250px]" />
					</div>

					{/* Scroll to bottom to view more */}
					<div className="mt-6 flex flex-col items-center w-fit mb-16">
						<p className="text-white text-sm">Scroll down for more info</p>
						<img src="/arrow-down-white.webp" className="w-10 mt-2" alt="Brimvahl-Crown-Arrow" />
					</div>

					{/* Bottom Battlements */}
					<div className="w-full absolute bottom-0 z-10 flex gap-6 h-[100px]">
						<img src="/battlements-bottom.webp" className="w-full h-full absolute" alt="Brimvahl-Crown-Bottom-Separator" />
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}