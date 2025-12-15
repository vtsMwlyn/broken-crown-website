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

      console.log("status:", res.status);
      console.log("ok:", res.ok);

      const text = await res.text();
      console.log("RAW RESPONSE:", text);

      const data = await res.json();
      console.log(data);
      setMessage(data.message || "Signed up successfully!");

      setEmail("");
      setName("");
    } catch (err) {
      console.log(err)
      setMessage("Something went wrong. Try again.");
    } finally {
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

          <button
            type="submit"
            disabled={loading}
            className="mt-4 py-3 bg-black text-white text-xl hover:bg-black/80 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Sign Up"}
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
