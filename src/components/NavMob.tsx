import { navModalType } from "../utils/type"
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Link } from "react-scroll"

function NavMob({ visible, onClose }: navModalType) {
    const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLElement
        if (target.id === 'container') onClose()
    }
    if (!visible) return null
    return (
        <div onClick={handleClose} id="container" className="fixed lg:hidden inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-between">
            <div className="rounded-[20px] h-[45vh] bg-black w-full mt-32 mx-10 flex flex-col py-7 items-center gap-5">
                <Link spy={true} smooth={true} offset={-70} duration={500} to="home" onClick={() => onClose()} className="text-xl font-medium cursor-pointer hover:text-white duration-300">Home</Link>
                <Link spy={true} smooth={true} offset={-70} duration={500} to="about" onClick={() => onClose()} className="text-xl font-medium cursor-pointer hover:text-white duration-300">About</Link>
                <Link spy={true} smooth={true} offset={-70} duration={500} to="tech" onClick={() => onClose()} className="text-xl font-medium cursor-pointer hover:text-white duration-300">Tech Stack</Link>
                <Link spy={true} smooth={true} offset={-70} duration={500} to="experience" onClick={() => onClose()} className="text-xl font-medium cursor-pointer hover:text-white duration-300">Work</Link>
                <Link spy={true} smooth={true} offset={-70} duration={500} to="projects" onClick={() => onClose()} className="text-xl font-medium cursor-pointer hover:text-white duration-300">Projects</Link>
                <div className="flex gap-4 items-center">
                    <a href="https://github.com/gracebir" target="_blank"><BsGithub size={23} /></a>
                    <a href="https://twitter.com/BirindwaGrace2" target="_blank"><AiFillTwitterCircle size={25} /></a>
                    <a href="https://www.linkedin.com/in/nshokano-grace-33b305185" target="_blank"><BsLinkedin size={25} /></a>
                </div>
            </div>
        </div>
    )
}

export default NavMob
