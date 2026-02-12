export default function CharaWeaponFrame({ img, className, customImageClassName }){
    return (
        <div className={`relative flex flex-col items-center ${className}`}>
            <img src="/frame.webp" className="w-full h-full" />
            <div className="absolute bottom-2.5 h-4/5 rounded-b-4xl rounded-t-[100%] w-4/5 bg-slate-100 overflow-hidden">
                <img src={img} className={`absolute top-15 xl:top-20 scale-250 object-cover ${customImageClassName}`} />
            </div>
        </div>
    )
}