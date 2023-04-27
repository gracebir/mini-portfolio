import { useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'

function Header() {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }
  return (
    <header className="py-12 flex items-center lg:items-baseline justify-between px-4 lg:px-0">
      <a href="#home" className="text-white text-2xl font-extrabold">{"{ Gr. }"}</a>
      <div onClick={toggle} className="lg:hidden cursor-pointer duration-200 transition">
        {!open ? <GiHamburgerMenu size={35}/>: <AiOutlineClose size={35}/>}
      </div>
    <nav className={`absolute duration-300 bg-black lg:bg-none ${open ? `translate-x-0`: `translate-x-full`} lg:translate-x-0 lg:relative lg:w-fit lg:h-0  flex flex-col items-end px-5 lg:px-0 py-14 lg:py-0 gap-10 h-[100vh] w-[50%] right-0 top-0 z-10 lg:z-0 bg-[#191919]`}>
        <div onClick={toggle} className="lg:hidden float-left cursor-pointer"><AiOutlineClose size={35}/></div>
        <div className="flex flex-col lg:flex-row lg:w-fit w-full items-center gap-8">
            <a href="#home" className="text-xl font-medium hover:text-white duration-300">Home</a>
            <a href="#about" className="text-xl font-medium hover:text-white duration-300">About</a>
            <a href="#tech" className="text-xl font-medium hover:text-white duration-300">Tech Stack</a>
            <a href="#project" className="text-xl font-medium hover:text-white duration-300">Projects</a>
            <a href="#contact" className="text-xl font-medium hover:text-white duration-300">Contact</a>
            <div className="flex gap-4 items-center">
                <a href="#"><BsFacebook size={23}/></a>
                <a href="#"><AiFillTwitterCircle size={25}/></a>
                <a href="#"><BsLinkedin size={25}/></a> 
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
