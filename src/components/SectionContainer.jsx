export default function SectionContainer({children, className, backgroundImage}) {
	return (
		<div className="w-full flex justify-center" style={{background: `${backgroundImage} no-repeat center center / cover`}}>
			<div className={`w-11/12 xl:w-5/6 flex flex-col justify-center items-center ${className}`}>
				{children}
			</div>
		</div>
	)
}