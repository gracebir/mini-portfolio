import { navModalType } from "../utils/type"
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'

function NavMob({ visible, onClose }: navModalType) {
    const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLElement
        if (target.id === 'container') onClose()
    }
    if (!visible) return null
    return (
        <div onClick={handleClose} id="container" className="fixed lg:hidden inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-between">
            <div className="rounded-[20px] h-[40vh] bg-black w-full mt-32 mx-10 flex flex-col py-8 items-center gap-6">
                <a href="#home" onClick={() => onClose()} className="text-xl font-medium hover:text-white duration-300">Home</a>
                <a href="#about" onClick={() => onClose()} className="text-xl font-medium hover:text-white duration-300">About</a>
                <a href="#tech" onClick={() => onClose()} className="text-xl font-medium hover:text-white duration-300">Tech Stack</a>
                <a href="#projects" onClick={() => onClose()} className="text-xl font-medium hover:text-white duration-300">Projects</a>
                <a href="#contact" onClick={() => onClose()} className="text-xl font-medium hover:text-white duration-300">Contact</a>
                <div className="flex gap-4 items-center">
                    <a href="#"><BsFacebook size={23} /></a>
                    <a href="#"><AiFillTwitterCircle size={25} /></a>
                    <a href="#"><BsLinkedin size={25} /></a>
                </div>
            </div>
        </div>
    )
}

export default NavMob
