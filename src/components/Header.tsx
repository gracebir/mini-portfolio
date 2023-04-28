import { useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
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
        <a href="#home" className="text-xl font-medium hover:text-white duration-300">Home</a>
        <a href="#about" className="text-xl font-medium hover:text-white duration-300">About</a>
        <a href="#tech" className="text-xl font-medium hover:text-white duration-300">Tech Stack</a>
        <a href="#projects" className="text-xl font-medium hover:text-white duration-300">Projects</a>
        <a href="#contact" className="text-xl font-medium hover:text-white duration-300">Contact</a>
        <div className="flex gap-4 items-center">
          <a href="#"><BsFacebook size={23} /></a>
          <a href="#"><AiFillTwitterCircle size={25} /></a>
          <a href="#"><BsLinkedin size={25} /></a>
        </div>
      </nav>
    </header>
  )
}

export default Header
