import { Link } from "react-scroll"

function Footer() {
  return (
    <footer className="text-[18px] text-center lg:text-start flex flex-col-reverse gap-5 lg:flex-row lg:justify-between mb-10">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
        <Link className="cursor-pointer" spy={true} smooth={true} offset={-70} duration={500} to="home">Home</Link>
        <Link className="cursor-pointer" spy={true} smooth={true} offset={-70} duration={500} to="about">About</Link>
        <Link className="cursor-pointer" spy={true} smooth={true} offset={-70} duration={500} to="tech">Tech Stack</Link>
        <Link className="cursor-pointer" spy={true} smooth={true} offset={-70} duration={500} to="experience">Work</Link>
        <Link className="cursor-pointer" spy={true} smooth={true} offset={-70} duration={500} to="projects">Projects</Link>
      </div>
      <p>Built by &nbsp;
        <span className="bg-gradient-to-r from-[#13B0F5] text-transparent via-[#13B0F5] to-[#E70FAA] bg-clip-text">Grace birindwa</span> with &nbsp;
        <span className="bg-gradient-to-r from-[#E70FAA] text-transparent via-[#E70FAA] to-[#13B0F5] bg-clip-text">Love</span>&nbsp; & &nbsp;
        <span className="bg-gradient-to-r from-[#E70FAA] text-transparent via-[#E70FAA] to-[#13B0F5] bg-clip-text">Tea</span></p>
    </footer>
  )
}

export default Footer
