export default function ArrowLeft({ onClick, className = "", type = 1 }) {
  return (
    <button
      onClick={onClick}
      className={`hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] animate-arrow-left ${className}`}
    >
      <img
        src={type === 1 ? "/arrow-left.webp" : "/arrow-left-white.webp"}
        className={
          type === 1
            ? "extra-sm:w-15 sm:w-18 md:w-20 lg:w-24 xl:w-32 2xl:w-44"
            : "extra-sm:w-15 sm:w-8 md:w-12 lg:w-16 xl:w-32 2xl:w-44"
        }
        alt="Brimvahl-Crown-Arrow"
      />
    </button>
  );
}
