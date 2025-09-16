import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="w-full text-black md:text-lg lg:text-xl 3xl:text-4xl flex flex-col items-center relative"
      style={{ background: 'url("/footer-bg.webp") no-repeat center / cover' }}
    >
      <div className="w-11/12 xl:w-5/6 max-w-[1500px] flex flex-col xl:flex-row gap-10 xl:gap-20 py-12 md:py-20 relative z-5">
        {/* Brand */}
        <div className="w-full xl:w-1/3 flex flex-col text-center sm:text-left">
          <h1 className="font-bold mb-4 md:mb-8">Brimvahl Crown</h1>
          <p className="font-semibold">
            Copyright &copy; 2025 - All Rights Reserved
          </p>
          <p>Chubby Puppy - Sangnila</p>
        </div>

        <div className="w-full xl:w-2/3 grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-0">
          {/* Links 1 */}
          <div className="w-full flex flex-col text-center sm:text-left">
            <h1 className="font-bold mb-4 md:mb-8">Brimvahl Crown</h1>
            <Link to="#" className="hover:text-yellow-800 hover:font-semibold">
              Characters
            </Link>
            <Link to="#" className="hover:text-yellow-800 hover:font-semibold">
              News and Info
            </Link>
            <Link to="#" className="hover:text-yellow-800 hover:font-semibold">
              Gameplay Feature
            </Link>
            <Link to="#" className="hover:text-yellow-800 hover:font-semibold">
              Background
            </Link>
            <Link to="#" className="hover:text-yellow-800 hover:font-semibold">
              Merch
            </Link>
            <Link to="#" className="hover:text-yellow-800 hover:font-semibold">
              Fan Arts
            </Link>
          </div>

          {/* Socials */}
          <div className="w-full flex flex-col text-center sm:text-left">
            <h1 className="font-bold mb-4 md:mb-8">Follow Our Social Media</h1>
            <Link to="#" className="hover:text-yellow-800 hover:font-semibold">
              <i class="bi bi-youtube"></i> YouTube
            </Link>
            <Link to="#" className="hover:text-yellow-800 hover:font-semibold">
              <i className="bi bi-instagram"></i> Instagram
            </Link>
            <Link to="#" className="hover:text-yellow-800 hover:font-semibold">
              <i className="bi bi-facebook"></i> Facebook
            </Link>
            <Link to="#" className="hover:text-yellow-800 hover:font-semibold">
              <i className="bi bi-twitter-x"></i> X
            </Link>
            <Link to="#" className="hover:text-yellow-800 hover:font-semibold">
              <i className="bi bi-discord"></i> Discord
            </Link>
            <Link to="#" className="hover:text-yellow-800 hover:font-semibold">
              <i className="bi bi-reddit"></i> Reddit
            </Link>
            <Link to="#" className="hover:text-yellow-800 hover:font-semibold">
              <i className="bi bi-bluesky"></i> Bluesky
            </Link>
          </div>

          {/* Contact */}
          <div className="w-full flex flex-col text-center sm:text-left">
            <h1 className="font-bold mb-4 md:mb-8">Contact</h1>
            <Link
              to="mailto:admin@brimvahlcrown.com"
              className="hover:text-yellow-800 hover:font-semibold"
            >
              <i class="bi bi-envelope-fill"></i> admin@brimvahlcrown.com
            </Link>
            <Link
              to="https://wa.me/6591190186"
              target="_blank"
              className="hover:text-yellow-800 hover:font-semibold"
            >
              <i class="bi bi-whatsapp"></i> +65 9119 0186
            </Link>
            <Link
              to="https://maps.app.goo.gl/j6wrFCFZNP8RuGN18"
              target="_blank"
              className="hover:text-yellow-800 hover:font-semibold"
            >
              <i class="bi bi-geo-alt-fill"></i> 60 Paya Lebar Road, # 10-20
              Paya Lebar Square Singapore 409051
            </Link>
          </div>
        </div>
      </div>

      {/* Back to home */}
      <Link
        to="/"
        className="absolute -top-6 sm:-top-8 md:-top-10 right-5 md:right-10 lg:right-20 z-20 text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]"
      >
        <img
          src="/footer-menu-bg-red.webp"
          className="w-[80px] xs:w-[90px] sm:w-[110px] xl:w-[130px]"
          alt="Brimvahl-Crown-Navbar-Menu"
        />
        <div
          className="absolute w-full text-center
        top-3 xs:top-4 sm:top-3 md:top-4
        text-[10px] xs:text-xs sm:text-sm md:text-[15px] xl:text-[20px]"
        >
          Back to
          <br />
          Home
        </div>
      </Link>
    </footer>
  );
}
