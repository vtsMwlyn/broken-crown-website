import { useState } from "react";
import SectionContainer from "../components/SectionContainer";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://brimvahlcrown.com/api/subscribe.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      setMessage("Signed up successfully!");
      setEmail("");
      setName("");
    }
    catch (err) {
      setMessage("Something went wrong. Try again.");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full flex justify-center relative lg:min-h-screen px-4 xl:px-0"
      style={{
        background: "url('/merch-bg.webp') no-repeat center center / cover",
      }}
    >
      <div className="w-full flex flex-col items-center relative z-10">
        <h1 className="text-3xl xl:text-6xl text-white mt-40">
          Sign Up
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full xl:w-1/2 gap-4 mt-10"
        >
          <input
            type="email"
            className="py-2 px-4 bg-white text-xl xl:text-3xl"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            className="py-2 px-4 bg-white text-xl xl:text-3xl"
            placeholder="Name to be engraved"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <button className="w-[250px] self-center relative text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)]" type="submit" disabled={loading}>
            <img src="/button-bg.webp" className="w-full" alt="Brimvahl-Crown-Button" />
            <div className="absolute top-3.5 w-full text-center text-xl">{loading ? "Submitting..." : "Submit"}</div>
          </button>
        </form>

        {/* MESSAGE */}
        {message && (
          <p className="text-white mt-4 text-lg">{message}</p>
        )}

        {/* INFO TEXT WITH RADIAL */}
        <div className="w-full xl:w-2/3 relative mt-10">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.75)_45%,rgba(0,0,0,0)_100%)] rounded-full"
          ></div>

          <p className="relative z-10 text-center text-white text-xl px-6">
            If you've already signed up and wish to back us when our Kickstarter
            goes live, please use the same email and we will give the carved
            legends add-on for free.
          </p>
        </div>

        <img
          src="/kazmiel-sign-up.webp"
          className="w-full xl:w-1/2 mt-20"
          alt="Brimvahl Crown Sign Up"
        />
      </div>
    </div>
  );
}
