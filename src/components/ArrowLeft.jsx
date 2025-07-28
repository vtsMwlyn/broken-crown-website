export default function ArrowLeft({ onClick, className, style, type = 1 }) {
	return (
		<button onClick={onClick} className={`hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] animate-arrow-left ${className}`} style={{ style }}>
			<img src={type === 1 ? '/arrow-left.webp' : '/arrow-left-white.webp'} className={type == 1 ? 'w-25' : 'w-15'} alt="Brimvahl-Crown-Arrow" />
		</button>
	)
}