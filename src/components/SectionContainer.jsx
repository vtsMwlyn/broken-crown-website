export default function SectionContainer({children, className, id, backgroundImage, isFullWidth = false}) {
	return (
		<div className="w-full flex justify-center relative" id={id} style={{background: `${backgroundImage} no-repeat center center / cover`}}>
			<div className={`${isFullWidth ? 'w-full' : 'w-11/12 xl:w-5/6 max-w-[2000px]'} flex flex-col justify-center items-center ${className}`}>
				{children}
			</div>
		</div>
	)
}