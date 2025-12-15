import SectionContainer from "../components/SectionContainer"

export default function SignUp() {
  return (
    <div
      className="w-full flex justify-center relative lg:min-h-screen px-4 xl:px-0"
      style={{ background: `url('/merch-bg.webp') no-repeat center center / cover` }}
    >
      <div className="w-full flex flex-col items-center relative z-5">
        <h1 className="text-3xl xl:text-6xl text-white mt-40 xl:mt-40">Sign Up</h1>

        <form className="flex flex-col w-full xl:w-1/2 gap-4 mt-10">
          <input type="text" className="py-2 px-4 bg-white text-3xl" placeholder="Email" />
          <input type="text" className="py-2 px-4 bg-white text-3xl" placeholder="Name to be engraved" />
        </form>

        <div className="w-full xl:w-2/3 relative mt-10">
          <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.75)_45%,rgba(0,0,0,0)_100%)] rounded-full">
          </div>
          <p className="text-center text-white text-xl w-full bg-radial from-transparent via-black/40 to-transparent z-5 relative">If you've already signed up and with to back us when our kickstarter goes live, please use the same email and we will give the carved legends add-on for free.</p>
        </div>
        
        <img src="/kazmiel-sign-up.webp" className="w-full xl:w-1/2 mt-30" alt="Brimvahl Crown Sign Up" />
      </div>
    </div>
  )
}
