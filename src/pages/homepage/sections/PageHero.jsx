import { Link } from "react-router-dom"

import SectionContainer from "../../../components/SectionContainer"

export default function PageHero() {
	return (
		<SectionContainer className="min-h-screen">
			<video autoPlay muted loop className="w-screen h-screen object-cover object-center absolute top-0 left-0 z-[-10] brightness-[0.4]">
				<source src="/gi.mp4" type="video/mp4" />
			</video>

			<div className="flex h-full w-full mt-22 pb-10 justify-center items-end">
				<div className="flex flex-col justify-center items-center w-1/2">
					{/* Logo and text card */}
					<div className="w-full flex flex-col items-center justify-center animate-brimvahl-crown-logo">
						<img src="/logo-gold.png" className="w-11/12 z-5 drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]" alt="Brimvahl-Crown-Logo" />
					</div>

					{/* Download button */}
					<div className="flex gap-4 mt-10 mb-20">
						<Link to="https://store.steampowered.com/app/3179140/HR_Simulator/" target="_blank" className="relative text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]">
							<img src="/button-bg.png" className="w-[180px]" alt="Brimvahl-Crown-Button" />
							<div className="absolute top-4 left-3 w-5/6 text-center">Download PC</div>
						</Link>
						<Link to="https://play.google.com/store/apps/details?id=com.UnityTechnologies.com.unity.HRSimulator&pcampaignid=web_share" target="_blank" className="relative text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]">
							<img src="/button-bg.png" className="w-[180px]" alt="Brimvahl-Crown-Button" />
							<div className="absolute top-4 left-3 w-5/6 text-center">Download Mobile</div>
						</Link>
					</div>

					{/* Bottom Battlements */}
					<div className="w-full absolute bottom-0 z-10 flex gap-6 h-[100px]">
						<img src="/battlements-bottom.png" className="w-full h-full absolute" alt="Brimvahl-Crown-Bottom-Separator" />
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}