export default function SectionContainer({children, className, id, backgroundImage}) {
	return (
		<div className="w-full flex justify-center" id={id} style={{background: `${backgroundImage} no-repeat center center / cover`}}>
			<div className={`w-11/12 xl:w-5/6 max-w-[1500px] flex flex-col justify-center items-center ${className}`}>
				{children}
			</div>
		</div>
	)
}