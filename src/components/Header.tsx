/** @format */

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiFillTwitterCircle } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import NavMob from "./NavMob";
import { headerLinks } from "../utils/data";
import NavLink from "./elements/NavLink";

function Header() {
    const [open, setOpen] = useState(false);
    const [scrollValue, setScrollValue] = useState(0);
    const [lastScroll, setLastScroll] = useState(0);
    const [scrollClass, setScrollClass] = useState("");
    // scroll behaviar
    window.addEventListener("scroll", () => {
        setScrollValue(window.pageYOffset);
        if (scrollValue > lastScroll) {
            // scroll dow
            setScrollClass("-translate-y-full");
        }
        if (scrollValue < lastScroll) {
            // scroll up
            setScrollClass("translate-y-0");
        }
        setLastScroll(scrollValue);
    });

    const toggle = () => {
        setOpen(!open);
    };
    const onClose = () => setOpen(false);
    return (
        <header
            className={`w-full fixed top-0 duration-300 z-10 left-0 ${
                scrollValue > 100 ? `bg-black ${scrollClass}` : `bg-none`
            }`}
        >
            <div className='h-24 lg:h-28 py-5  flex max-w-7xl mx-auto items-center lg:items-baseline justify-between px-6 lg:px-0'>
                <a
                    href='#home'
                    className='bg-gradient-to-r from-[#13B0F5] text-transparent via-[#E70FAA] to-[#E70FAA] bg-clip-text text-2xl font-extrabold'
                >
                    {"{ Grac. }"}
                </a>
                <div
                    onClick={toggle}
                    className='lg:hidden cursor-pointer duration-200 transition'
                >
                    {!open ? (
                        <GiHamburgerMenu size={35} />
                    ) : (
                        <AiOutlineClose size={35} />
                    )}
                </div>
                <NavMob visible={open} onClose={onClose} />
                <nav className='hidden lg:flex flex-col lg:flex-row lg:w-fit w-full items-center gap-8'>
                    {headerLinks.map(({ id, linkName }) => (
                        <NavLink
                            onClick={() => onClose()}
                            key={id}
                            id={id}
                            linkName={linkName}
                        />
                    ))}
                    <div className='flex gap-4 items-center'>
                        <a href='https://github.com/gracebir' target='_blank'>
                            <BsGithub size={23} />
                        </a>
                        <a
                            href='https://twitter.com/BirindwaGrace2'
                            target='_blank'
                        >
                            <AiFillTwitterCircle size={25} />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/nshokano-grace-33b305185'
                            target='_blank'
                        >
                            <BsLinkedin size={25} />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
