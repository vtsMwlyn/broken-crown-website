import { HashLink } from "react-router-hash-link"

export default function Navbar() {
	return (
		<nav className="w-full fixed top-4 z-100 flex gap-6 bg-stone-950 h-[90px]">
			<img src="/fancy-border-2.png" className="w-full h-full absolute" alt="Brimvahl-Crown-Fancy-Border" />
			<div className="flex w-11/12 xl:w-5/6">
				<img src="/logo-navbar.png" className="h-[120px] relative top-[-10px] ml-60" alt="Brimvahl-Crown-Navbar-Logo" />
				<div className="relative top-14 flex gap-3 ml-10">
					<HashLink to="#" className="relative text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]" smooth>
						<img src="/navbar-menu-bg-blue.png" className="w-[160px]" alt="Brimvahl-Crown-Navbar-Menu" />
						<div className="absolute top-3 text-center w-full">Homepage</div>
					</HashLink>
					<HashLink to="#characters" className="relative text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]" smooth>
						<img src="/navbar-menu-bg-blue.png" className="w-[160px]" alt="Brimvahl-Crown-Navbar-Menu" />
						<div className="absolute top-3 text-center w-full">Characters</div>
					</HashLink>
					<HashLink to="#news-and-info" className="relative text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]" smooth>
						<img src="/navbar-menu-bg-red.png" className="w-[160px]" alt="Brimvahl-Crown-Navbar-Menu" />
						<div className="absolute top-3 text-center w-full">News & Info</div>
					</HashLink>
					<HashLink to="#more" className="relative text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]" smooth>
						<img src="/navbar-menu-bg-red.png" className="w-[160px]" alt="Brimvahl-Crown-Navbar-Menu" />
						<div className="absolute top-3 text-center w-full">More</div>
					</HashLink>
				</div>
			</div>
		</nav>
	)
}