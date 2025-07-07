export default function ArrowLeft({ onClick, className, style }) {
	return (
		<button onClick={onClick} className={`hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] animate-arrow-left ${className}`} style={{ style }}>
			<img src="/arrow-left.png" className="w-25" alt="Brimvahl-Crown-Arrow" />
		</button>
	)
}