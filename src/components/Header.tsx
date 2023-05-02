import { useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiFillTwitterCircle } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import NavMob from "./NavMob";

function Header() {
  const [open, setOpen] = useState(false)
  const [scrollValue, setScrollValue] = useState(0)
  const [lastScroll, setLastScroll] = useState(0)
  const [scrollClass, setScrollClass] = useState("");
  // scroll behaviar
  window.addEventListener('scroll', () => {
    setScrollValue(window.pageYOffset)
    if (scrollValue > lastScroll) {
      // scroll dow
      setScrollClass("-translate-y-full")
    }
    if (scrollValue < lastScroll) {
      // scroll up
      setScrollClass("translate-y-0")
    }
    setLastScroll(scrollValue)
  })

  const toggle = () => {
    setOpen(!open)
  }
  const onClose = () => setOpen(false)
  return (
    <header className={`w-full fixed top-0 duration-300 z-10 left-0 ${scrollValue > 100 ? `bg-black ${scrollClass}` : `bg-none`}`}>
      <div className="py-8 lg:py-9 flex max-w-7xl mx-auto items-center lg:items-baseline justify-between px-6 lg:px-0">
        <a href="#home" className="bg-gradient-to-r from-[#13B0F5] text-transparent via-[#E70FAA] to-[#E70FAA] bg-clip-text text-2xl font-extrabold">{"{ Grac. }"}</a>
        <div onClick={toggle} className="lg:hidden cursor-pointer duration-200 transition">
          {!open ? <GiHamburgerMenu size={35} /> : <AiOutlineClose size={35} />}
        </div>
        <NavMob visible={open} onClose={onClose} />
        <nav className="hidden lg:flex flex-col lg:flex-row lg:w-fit w-full items-center gap-8">
          <Link spy={true} smooth={true} offset={-70} duration={500} to="home" className="text-xl font-medium cursor-pointer py-3 hover:border-b-2 hover:border-white duration-300">Home</Link>
          <Link spy={true} smooth={true} offset={-70} duration={500} to="about" className="text-xl py-3 hover:border-b-2 hover:border-white font-medium cursor-pointer duration-300">About</Link>
          <Link spy={true} smooth={true} offset={-70} duration={500} to="tech" className="text-xl py-3 hover:border-b-2 hover:border-white font-medium cursor-pointer duration-300">Tech Stack</Link>
          <Link spy={true} smooth={true} offset={-70} duration={500} to="experience" className="text-xl py-3 hover:border-b-2 hover:border-white font-medium cursor-pointer duration-300">Work</Link>
          <Link spy={true} smooth={true} offset={-70} duration={500} to="projects" className="text-xl py-3 hover:border-b-2 hover:border-white font-medium cursor-pointer duration-300">Projects</Link>
          <div className="flex gap-4 items-center">
            <a href="https://github.com/gracebir" target="_blank"><BsGithub size={23} /></a>
            <a href="https://twitter.com/BirindwaGrace2" target="_blank"><AiFillTwitterCircle size={25} /></a>
            <a href="https://www.linkedin.com/in/nshokano-grace-33b305185" target="_blank"><BsLinkedin size={25} /></a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
