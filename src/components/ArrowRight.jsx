export default function ArrowRight({ onClick, className, style, type = 1 }) {
  return (
    <button
      onClick={onClick}
      className={`hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] animate-arrow-right ${className}`}
      style={{ style }}
    >
      <img
        src={type === 1 ? "/arrow-right.webp" : "/arrow-right-white.webp"}
        className={type == 1 ? "w-13 sm:w-20 md:w-25 xl:w-28 3xl:w-40" : "w-15"}
        alt="Brimvahl-Crown-Arrow"
      />
    </button>
  );
}
