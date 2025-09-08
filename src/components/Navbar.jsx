import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()
  const [isExpanded, setIsExpanded] = useState(false)
  const [isAtThePageTop, setIsAtThePageTop] = useState(true)

  useEffect(() => {
    if (location.pathname === "/") {
      setIsAtThePageTop(true)

      const handleScroll = () => {
        setIsAtThePageTop(window.scrollY < window.innerHeight / 4)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    } else {
      setIsAtThePageTop(false)
    }
  }, [location.pathname])

  return (
    <nav className="w-screen fixed top-0 z-50 h-[100px]">
      <img
        src="/battlements-top.webp"
        alt="Brimvahl-Crown-Navbar-BG"
        className="w-screen h-full absolute scale-100 sm:scale-125 md:scale-110 lg:scale-100 origin-top transition-transform duration-500"
      />

      <div className="hidden md:flex justify-between items-center w-11/12 xl:w-5/6 mx-auto relative">
        <img
          src="/navbar-logo.webp"
          alt="Brimvahl-Crown-Navbar-Logo"
          className={`h-[150px] md:h-[150px] lg:h-[180px] relative top-0 transition ease-in-out duration-1000 ${
            isAtThePageTop ? "translate-y-[-250px]" : "translate-y-0"
          }`}
        />

        <div className="flex gap-3 ml-10 relative top-[-40px] h-25">
          <Link to="/" className="relative text-white hover:text-yellow-500">
            <img src="/navbar-menu-bg-blue.webp" alt="menu" className="w-[160px]" />
            <div className="absolute top-6 text-center w-full">Homepage</div>
          </Link>
          <Link to="/characters" className="relative text-white hover:text-yellow-500">
            <img src="/navbar-menu-bg-blue.webp" alt="menu" className="w-[160px]" />
            <div className="absolute top-6 text-center w-full">Characters</div>
          </Link>
          <Link to="/background" className="relative text-white hover:text-yellow-500">
            <img src="/navbar-menu-bg-blue.webp" alt="menu" className="w-[160px]" />
            <div className="absolute top-6 text-center w-full">Background</div>
          </Link>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative top-[-20px] text-white hover:text-yellow-500 flex flex-col items-center"
          >
            <img
              src="/navbar-menu-bg-red.webp"
              alt="Navbar-Menu"
              className={`w-[160px] transition duration-500 ${
                isExpanded ? "translate-y-0" : "translate-y-[-100px]"
              }`}
            />
            <div
              className={`absolute top-0 w-5/6 text-center transition duration-500 ${
                isExpanded ? "translate-y-[185px] scale-0" : "translate-y-[55px] scale-100"
              }`}
            >
              More
            </div>
            <img
              src="/navbar-more-arrow.webp"
              alt="More-Arrow"
              className={`absolute transition duration-500 ${
                isExpanded ? "translate-y-[200px] rotate-180" : "translate-y-[90px] rotate-0"
              } w-[40px]`}
            />
            <div
              className={`absolute top-0 flex flex-col items-center gap-6 transition duration-500 ${
                isExpanded ? "translate-y-[110px] opacity-100" : "-translate-y-[50px] opacity-0"
              }`}
            >
              <Link to="/merch" className="text-white hover:text-yellow-500">
                Merch
              </Link>
              <Link to="/fan-arts" className="text-white hover:text-yellow-500">
                Fan Arts
              </Link>
            </div>
          </button>
        </div>
      </div>

      <div className="md:hidden overflow-hidden flex justify-between items-center px-4 sticky top-0">
        <img
          src="/navbar-logo.webp"
          alt="Brimvahl-Crown-Navbar-Logo"
          className={`h-[100px] sm:h-[150px] relative z-50 top-0 transition ease-in-out duration-1000 ${
            isAtThePageTop ? "translate-y-[-250px]" : "translate-y-[-67px] sm:translate-y-[-45px]"
          }`}
        />

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative flex flex-col items-center text-white hover:text-yellow-500 transition"
        >
          <img
            src="/navbar-menu-bg-red.webp"
            alt="Navbar Menu"
            className={`w-[120px] transition-transform duration-500 ${
              isExpanded ? "translate-y-[-10px]" : "-translate-y-[110px]"
            }`}
          />
          <div
            className={`absolute top-0 w-5/6 text-center text-lg font-base transition duration-500 ${
              isExpanded ? "translate-y-[160px] scale-0 opacity-0" : "translate-y-[20px] scale-100 opacity-100"
            }`}
          >
            Menu
          </div>
          <img
            src="/navbar-more-arrow.webp"
            alt="More Arrow"
            className={`absolute left-1/2 -translate-x-1/2 w-[40px] transition duration-500 ${
              isExpanded ? "translate-y-[160px] rotate-180 scale-75" : "translate-y-[60px] rotate-0"
            }`}
          />
          <div
            className={`absolute top-0 mt-[20px] flex flex-col items-center w-[100px] text-sm font-medium transition duration-500 ${
              isExpanded ? "translate-y-0 opacity-100" : "-translate-y-[50px] opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col gap-3 font-base pb-10">
              <Link to="/" className="text-white hover:text-yellow-500">
                Homepage
              </Link>
              <Link to="/characters" className="text-white hover:text-yellow-500">
                Characters
              </Link>
              <Link to="/background" className="text-white hover:text-yellow-500">
                Background
              </Link>
              <Link to="/merch" className="text-white hover:text-yellow-500">
                Merch
              </Link>
              <Link to="/fan-arts" className="text-white hover:text-yellow-500">
                Fan Arts
              </Link>
            </div>
          </div>
        </button>
      </div>
    </nav>
  )
}
