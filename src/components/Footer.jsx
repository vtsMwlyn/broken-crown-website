import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer
      className="w-full text-black md:text-lg lg:text-xl 2xl:text-4xl flex flex-col items-center relative"
      style={{ background: 'url("/footer-bg.webp") no-repeat center / cover' }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 w-11/12 xl:w-5/6 max-w-full py-12 md:py-20 relative z-5">
        {/* Brand */}
        <div className="flex flex-col text-center sm:text-left space-y-10">
          <h1 className="font-bold mb-4 md:mb-8">Brimvahl Crown</h1>
          <p className="font-semibold leading-normal">Copyright &copy; 2025 - All Rights Reserved</p>
          <p className="leading-normal">Sangnila Interactive Media and Technology</p>
        </div>

        {/* Socials */}
        <div className="flex flex-col text-center sm:text-left space-y-5">
          <h1 className="font-bold mb-4 md:mb-8">Follow Our Social Media</h1>
          <Link to="#" className="hover:text-yellow-800 hover:font-semibold"><i className="bi bi-instagram"></i> Instagram</Link>
          <Link to="#" className="hover:text-yellow-800 hover:font-semibold"><i className="bi bi-facebook"></i> Facebook</Link>
          <Link to="#" className="hover:text-yellow-800 hover:font-semibold"><i className="bi bi-twitter-x"></i> X</Link>
          <Link to="#" className="hover:text-yellow-800 hover:font-semibold"><i className="bi bi-discord"></i> Discord</Link>
          <Link to="#" className="hover:text-yellow-800 hover:font-semibold"><i className="bi bi-reddit"></i> Reddit</Link>
          <Link to="#" className="hover:text-yellow-800 hover:font-semibold"><i className="bi bi-bluesky"></i> Bluesky</Link>
        </div>

        {/* Links 1 */}
        <div className="flex flex-col text-center sm:text-left space-y-5">
          <h1 className="font-bold mb-4 md:mb-8">Something</h1>
          <Link to="#" className="hover:text-yellow-800 hover:font-semibold">Link</Link>
          <Link to="#" className="hover:text-yellow-800 hover:font-semibold">Link</Link>
          <Link to="#" className="hover:text-yellow-800 hover:font-semibold">Link</Link>
          <Link to="#" className="hover:text-yellow-800 hover:font-semibold">Link</Link>
        </div>

        {/* Links 2 */}
        <div className="flex flex-col text-center sm:text-left space-y-5">
          <h1 className="font-bold mb-4 md:mb-8">Something Again</h1>
          <Link to="#" className="hover:text-yellow-800 hover:font-semibold">Link</Link>
          <Link to="#" className="hover:text-yellow-800 hover:font-semibold">Link</Link>
          <Link to="#" className="hover:text-yellow-800 hover:font-semibold">Link</Link>
          <Link to="#" className="hover:text-yellow-800 hover:font-semibold">Link</Link>
        </div>
      </div>

      {/* Back to home */}
      <Link
        to="/"
        className="absolute -top-6 sm:-top-8 md:-top-10 right-5 md:right-10 lg:right-20 z-20 text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]"
      >
        <img
          src="/footer-menu-bg-red.webp"
          className="w-[120px] sm:w-[140px] md:w-[160px] xl:w-[200px]"
          alt="Brimvahl-Crown-Navbar-Menu"
        />
        <div className="absolute top-4 sm:top-5 md:top-6 text-center w-full text-xs sm:text-sm md:text-base xl:text-3xl">
          Back to<br />Home
        </div>
      </Link>
    </footer>
  )
}
