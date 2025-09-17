import { Link } from "react-router-dom"

import SectionContainer from "../../../components/SectionContainer"
import LinkButton from "../../../components/Button"

export default function PageHero() {
	return (
		<SectionContainer className="min-h-screen">
			<img src="/pageherobg.webp" className="w-screen h-screen absolute brightness-60 object-cover object-right xl:object-center" alt="Brimvahl-Crown-Homepage-Image" />

			<div className="flex h-full w-full mt-10 lg:mt-22 lg:pb-10 justify-center items-center xl:items-end">
				<div className="flex flex-col justify-center items-center w-11/12 sm:w-4/5 md:w-1/2 text-center">
					{/* Logo and text card */}
					<div className="w-full flex flex-col items-center justify-center animate-brimvahl-crown-logo">
						<img
							src="/logo-homepage.webp"
							className="w-full xl:w-3/4 z-5 drop-shadow-[#000000]"
							alt="Brimvahl-Crown-Logo"
						/>
					</div>

					{/* Download button */}
					<div className="flex flex-col sm:flex-row gap-4 mt-5 w-full justify-center items-center">
						<LinkButton
							to="https://store.steampowered.com/app/3179140/HR_Simulator/"
							text="Download Now"
							className="w-[250px]"
						/>
					</div>

					{/* Scroll to bottom to view more */}
					<div className="mt-6 flex flex-col items-center w-fit mb-12 sm:mb-16">
						<p className="text-white text-xs sm:text-sm">
							Scroll down for more info
						</p>
						<img
							src="/arrow-down-white.webp"
							className="w-6 sm:w-8 md:w-10 mt-2"
							alt="Brimvahl-Crown-Arrow"
						/>
					</div>

					{/* Bottom Battlements */}
					<div className="w-full absolute bottom-0 z-10 flex gap-6 h-[60px] sm:h-[80px] md:h-[100px]">
						<img
							src="/battlements-bottom.webp"
							className="w-full h-full absolute"
							alt="Brimvahl-Crown-Bottom-Separator"
						/>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}
