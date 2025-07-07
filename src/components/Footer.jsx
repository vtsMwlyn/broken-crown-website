import { Link } from "react-router-dom"

export default function Footer() {
	return (
		<footer className="w-full text-black text-xl flex flex-col items-center" style={{background: 'url("/footer-bg.png") no-repeat center / cover'}}>
			<div className="flex w-11/12 xl:w-5/6 max-w-[1500px] py-20 gap-40 relative z-5">
				<div className="flex flex-col">
					<h1 className="font-bold mb-8">Brimvahl Crown</h1>
					<p className="font-semibold">Copyright &copy; 2025 - All Rights Reserved</p>
					<p>Sangnila Interactive Media and Technology</p>
				</div>

				<div className="flex flex-col">
					<h1 className="font-bold mb-8">Follow Our Social Media</h1>
					<Link to="#" className="text-black hover:text-yellow-800 hover:font-semibold"><i class="bi bi-instagram"></i> Instagram</Link>
					<Link to="#" className="text-black hover:text-yellow-800 hover:font-semibold"><i class="bi bi-facebook"></i> Facebook</Link>
					<Link to="#" className="text-black hover:text-yellow-800 hover:font-semibold"><i class="bi bi-twitter-x"></i> X</Link>
					<Link to="#" className="text-black hover:text-yellow-800 hover:font-semibold"><i class="bi bi-discord"></i> Discord</Link>
					<Link to="#" className="text-black hover:text-yellow-800 hover:font-semibold"><i class="bi bi-reddit"></i> Reddit</Link>
					<Link to="#" className="text-black hover:text-yellow-800 hover:font-semibold"><i class="bi bi-bluesky"></i> Bluesky</Link>
				</div>

				<div className="flex flex-col">
					<h1 className="font-bold mb-8">Something</h1>
					<Link to="#" className="text-black hover:text-yellow-800 hover:font-semibold">Link</Link>
					<Link to="#" className="text-black hover:text-yellow-800 hover:font-semibold">Link</Link>
					<Link to="#" className="text-black hover:text-yellow-800 hover:font-semibold">Link</Link>
					<Link to="#" className="text-black hover:text-yellow-800 hover:font-semibold">Link</Link>
				</div>

				<div className="flex flex-col">
					<h1 className="font-bold mb-8">Something Again</h1>
					<Link to="#" className="text-black hover:text-yellow-800 hover:font-semibold">Link</Link>
					<Link to="#" className="text-black hover:text-yellow-800 hover:font-semibold">Link</Link>
					<Link to="#" className="text-black hover:text-yellow-800 hover:font-semibold">Link</Link>
					<Link to="#" className="text-black hover:text-yellow-800 hover:font-semibold">Link</Link>
				</div>
			</div>
		</footer>
	)
}