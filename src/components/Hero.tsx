import profile from "../assets/da.avif"

function Hero() {
    return (
        <section id="home" className="flex flex-col gap-20 py-12 px-4 lg:px-0 lg:py-0 items-center lg:flex-row lg:justify-between lg:items-center h-[86vh] lg:h-[87vh]">
            <h1 className="lg:text-6xl text-4xl font-bold lg:leading-[70px] leading-[50px]">
                Hi 👋,<br /> My name is <br />
                <span className="bg-gradient-to-r from-[#13B0F5] text-transparent via-[#13B0F5] to-[#E70FAA] bg-clip-text">Grace Birindwa</span> <br /> I build things for web
            </h1>
            <div className="border-8 bg-gradient-to-b w-[350px] p-2 h-[350px] rounded-full from-[#E70FAA] border-transparent via-[#13B0F5] to-[#E70FAA] bg-clip-border">
                <img className="w-full h-full rounded-full border objet-fit" src={profile} alt="" />
            </div>
        </section>
    )
}

export default Hero
