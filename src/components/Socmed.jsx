function SocmedButton({ link, children }){
    return (
        <a href={link} target="_blank" className="flex gap-5 text-white text-2xl xl:text-3xl hover:text-yellow-500 hover:font-semibold bg-yellow-900 p-4 translate-x-40 hover:translate-x-0 transition transform duration-300 ease-in-out">
            {children}
        </a> 
    )
}

export default function Socmed(){
    return (
        <div className="hidden xl:grid gap-4 fixed bottom-10 right-0 z-50">
            <SocmedButton link="#">
                <i className="bi bi-youtube"></i> YouTube
            </SocmedButton>
            <SocmedButton link="https://www.instagram.com/brimvahlcrowngame">
                <i className="bi bi-instagram"></i> Instagram
            </SocmedButton>
            <SocmedButton link="#">
                <i className="bi bi-facebook"></i> Facebook
            </SocmedButton>
            <SocmedButton link="https://x.com/brimvahlcrown">
                <i className="bi bi-twitter-x"></i> Twitter/X
            </SocmedButton>
            <SocmedButton link="#">
                <i className="bi bi-discord"></i> Discord
            </SocmedButton>
            <SocmedButton link="#">
                <i className="bi bi-reddit"></i> Reddit
            </SocmedButton>
            <SocmedButton link="#">
                <i className="bi bi-bluesky"></i> Bluesky
            </SocmedButton>
        </div>
    )
}