export default function LinkButton({ className, style, to, newTab = true, text }) {
	return (
		<a href={to} target={`_${newTab === true ? 'blank' : 'self'}`} className={`relative text-white hover:text-yellow-500 hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] ${className}`} style={style}>
			<img src="/button-bg.webp" className="w-full" alt="Brimvahl-Crown-Button" />
			<div className="absolute top-3.5 w-full text-center text-xl">{text}</div>
		</a>
	)
}