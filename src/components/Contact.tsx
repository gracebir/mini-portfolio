import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function Contact() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:justify-between items-center">
      <a href="#home" className="bg-gradient-to-r from-[#13B0F5] text-transparent via-[#E70FAA] to-[#E70FAA] bg-clip-text text-2xl font-extrabold">{"{ Grac. }"}</a>
      <div className="flex flex-col items-center lg:flex-row gap-4 lg:gap-10">
        <span className="text-[18px] font-mediu">+250 780 869 394</span>
        <span className="text-[18px] font-medium">birindwan@gmail.com</span>
        <div className="flex gap-4 items-center">
          <a href="https://github.com/gracebir" target="_blank"><BsGithub size={23} /></a>
          <a href="https://twitter.com/BirindwaGrace2" target="_blank"><AiFillTwitterCircle size={25} /></a>
          <a href="https://www.linkedin.com/in/nshokano-grace-33b305185" target="_blank"><BsLinkedin size={25} /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
