export default function SectionContainer({children, className}) {
	return (
		<div className="w-full flex justify-center">
			<div className={`w-11/12 xl:w-5/6 flex flex-col justify-center items-center ${className}`}>
				{children}
			</div>
		</div>
	)
}