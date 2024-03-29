/** @format */

import profile from "../assets/profile.jpg";

function Hero() {
    return (
        <section
            id='home'
            className='md:mt-0 lg:mt-0 px-4 lg:px-0 flex lg:py-0 items-center h-[100dvh] mb-32 lg:h-[87vh]'
        >
            <div className='flex flex-col-reverse lg:flex-row w-full lg:justify-between gap-20 items-center'>
                <h1 className='lg:text-6xl text-4xl font-bold lg:leading-[70px] leading-[50px]'>
                    Hi 👋,
                    <br /> My name is <br />
                    <span className='bg-gradient-to-r from-[#13B0F5] text-transparent via-[#13B0F5] to-[#E70FAA] bg-clip-text'>
                        Grace Birindwa
                    </span>{" "}
                    <br /> I build things for web
                </h1>
                <div className='border-8 bg-gradient-to-b w-[330px] lg:w-[350px] p-2 h-[330px] lg:h-[350px] rounded-full from-[#E70FAA] border-transparent via-[#13B0F5] to-[#E70FAA] bg-clip-border'>
                    <img
                        className='w-full h-full rounded-full border object-cover'
                        src={profile}
                        alt=''
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
