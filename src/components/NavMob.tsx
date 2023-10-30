/** @format */

import { navModalType } from "../utils/type";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { headerLinks } from "../utils/data";
import NavLink from "./elements/NavLink";

function NavMob({ visible, onClose }: navModalType) {
    const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLElement;
        if (target.id === "container") onClose();
    };
    if (!visible) return null;
    return (
        <div
            onClick={handleClose}
            id='container'
            className='fixed lg:hidden inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-between'
        >
            <div className='rounded-[20px] h-[45vh] bg-black w-full mt-32 mx-10 flex flex-col py-7 items-center gap-5'>
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
            </div>
        </div>
    );
}

export default NavMob;
