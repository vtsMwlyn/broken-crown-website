// import { useLocation } from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
	// const location = useLocation();

	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<nav className="w-full fixed top-0 z-100 flex gap-6 h-[100px]">
			<img src="/battlements-top.png" className="w-full h-full absolute" alt="Brimvahl-Crown-Navbar-BG" />
			<div className="flex w-11/12 xl:w-5/6">
				<img src="/navbar-logo.png" className="h-[220px] relative top-[-10px] ml-60" alt="Brimvahl-Crown-Navbar-Logo" />
				<div className="relative top-[-20px] flex gap-3 ml-10">
					<Link to="/" className="relative text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]">
						<img src="/navbar-menu-bg-blue.png" className="w-[160px]" alt="Brimvahl-Crown-Navbar-Menu" />
						<div className="absolute top-8 text-center w-full">Homepage</div>
					</Link>
					<Link to="/characters" className="relative text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]">
						<img src="/navbar-menu-bg-blue.png" className="w-[160px]" alt="Brimvahl-Crown-Navbar-Menu" />
						<div className="absolute top-8 text-center w-full">Characters</div>
					</Link>
					<Link to="/background" className="relative text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]">
						<img src="/navbar-menu-bg-blue.png" className="w-[160px]" alt="Brimvahl-Crown-Navbar-Menu" />
						<div className="absolute top-8 text-center w-full">Background</div>
					</Link>
					<button onClick={() => setIsExpanded(!isExpanded)} className="relative top-[-20px] text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] flex flex-col items-center">
						{/* Trigger button */}
						<img src="/navbar-menu-bg-red.png" className={`w-[160px] transition ease-in-out duration-500 transform ${isExpanded ? 'translate-y-0' : 'translate-y-[-150px]'}`} alt="Brimvahl-Crown-Navbar-Menu" />
						<div className="absolute top-13 text-center w-5/6">More</div>
						<img src="/navbar-more-arrow.png" className={`absolute transition ease-in-out top-0 duration-500 transform ${isExpanded ? 'translate-y-[220px] rotate-[180deg]' : 'translate-y-[90px] rotate-[0deg]'} left-15 w-[40px]`} alt="Brimvahl-Crown-More-Arrow" />

						{/* More menu list */}
						<div className={`w-full flex flex-col items-center absolute transition ease-in-out top-0 duration-500 transform ${isExpanded ? 'translate-y-[120px] opacity-100' : 'translate-y-[-30px] opacity-0'} gap-6 w-[40px]`}>
							<Link to="/merch" className="relative w-full text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]">Merch</Link>
							<Link to="/fan-arts" className="relative w-full text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]">Fan Arts</Link>
						</div>
					</button>
					{/* <Link to="/merch" className="relative text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]">
						<img src="/navbar-menu-bg-blue.png" className="w-[160px]" alt="Brimvahl-Crown-Navbar-Menu" />
						<div className="absolute top-3 text-center w-full">Merch</div>
					</Link>
					<Link to="/fan-arts" className="relative text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]">
						<img src="/navbar-menu-bg-blue.png" className="w-[160px]" alt="Brimvahl-Crown-Navbar-Menu" />
						<div className="absolute top-3 text-center w-full">Fan Arts</div>
					</Link> */}
				</div>
			</div>
		</nav>
	)
}