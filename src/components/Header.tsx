import { useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiFillTwitterCircle } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import NavMob from "./NavMob";

function Header() {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }
  const onClose = () => setOpen(false)
  return (
    <header className="py-12 flex items-center lg:items-baseline justify-between px-4 lg:px-0">
      <a href="#home" className="bg-gradient-to-r from-[#13B0F5] text-transparent via-[#E70FAA] to-[#E70FAA] bg-clip-text text-2xl font-extrabold">{"{ Grac. }"}</a>
      <div onClick={toggle} className="lg:hidden cursor-pointer duration-200 transition">
        {!open ? <GiHamburgerMenu size={35} /> : <AiOutlineClose size={35} />}
      </div>
      <NavMob visible={open} onClose={onClose}/>
      <nav className="hidden lg:flex flex-col lg:flex-row lg:w-fit w-full items-center gap-8">
        <Link spy={true} smooth={true} offset={-70} duration={500} to="home" className="text-xl font-medium cursor-pointer hover:text-white duration-300">Home</Link>
        <Link spy={true} smooth={true} offset={-70} duration={500}  to="about" className="text-xl font-medium cursor-pointer hover:text-white duration-300">About</Link>
        <Link spy={true} smooth={true} offset={-70} duration={500}  to="tech" className="text-xl font-medium cursor-pointer hover:text-white duration-300">Tech Stack</Link>
        <Link spy={true} smooth={true} offset={-70} duration={500}  to="experience" className="text-xl font-medium cursor-pointer hover:text-white duration-300">Work</Link>
        <Link spy={true} smooth={true} offset={-70} duration={500}  to="projects" className="text-xl font-medium cursor-pointer hover:text-white duration-300">Projects</Link>
        <div className="flex gap-4 items-center">
          <a href="https://github.com/gracebir" target="_blank"><BsGithub size={23} /></a>
          <a href="https://twitter.com/BirindwaGrace2" target="_blank"><AiFillTwitterCircle size={25} /></a>
          <a href="https://www.linkedin.com/in/nshokano-grace-33b305185" target="_blank"><BsLinkedin size={25} /></a>
        </div>
      </nav>
    </header>
  )
}

export default Header
