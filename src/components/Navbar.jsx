import { HashLink } from "react-router-hash-link"

export default function Navbar() {
	return (
		<nav className="w-full fixed top-0 z-100">
			<img src="/navbar-bg.png" className="w-full" alt="Brimvahl-Crown-Navbar" />
			<div className="flex w-full absolute top-2 pl-50 gap-6">
				<img src="/logo-navbar.png" className="h-[120px]" alt="Brimvahl-Crown-Navbar-Logo" />
				<div className="relative top-14 flex gap-3">
					<HashLink to="#" className="relative text-white hover:text-yellow-500" smooth>
						<img src="/navbar-menu-bg-blue.png" className="h-[50px]" alt="Brimvahl-Crown-Navbar-Menu" />
						<div className="absolute top-2 left-3.5 text-center w-4/5">Homepage</div>
					</HashLink>
					<HashLink to="#characters" className="relative text-white hover:text-yellow-500" smooth>
						<img src="/navbar-menu-bg-blue.png" className="h-[50px]" alt="Brimvahl-Crown-Navbar-Menu" />
						<div className="absolute top-2 left-3.5 text-center w-4/5">Characters</div>
					</HashLink>
					<HashLink to="#news-and-info" className="relative text-white hover:text-yellow-500" smooth>
						<img src="/navbar-menu-bg-red.png" className="h-[50px]" alt="Brimvahl-Crown-Navbar-Menu" />
						<div className="absolute top-2 left-3.5 text-center w-4/5">News & Info</div>
					</HashLink>
					<HashLink to="#more" className="relative text-white hover:text-yellow-500" smooth>
						<img src="/navbar-menu-bg-red.png" className="h-[50px]" alt="Brimvahl-Crown-Navbar-Menu" />
						<div className="absolute top-2 left-3.5 text-center w-4/5">More</div>
					</HashLink>
				</div>
			</div>
		</nav>
	)
}