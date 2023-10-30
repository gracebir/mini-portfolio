/** @format */

import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { projectType } from "../utils/type";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

function Card({
    id,
    title,
    description,
    image,
    code,
    live,
    techStacks,
}: projectType) {
    const [open, setOpen] = useState(false);
    return (
        <div className='lg:w-[373px] w-[300px] h-[567px] group rounded-[20px] bg-[#363636] flex flex-col'>
            <div className='w-full h-[260px] relative overflow-hidden'>
                <img
                    className='w-full scale-100 hover:scale-125 transition duration-500 h-full rounded-tl-[20px] rounded-tr-[20px] object-cover'
                    src={image}
                    alt=''
                />
            </div>
            <div className='px-6 py-4 flex flex-col gap-2'>
                <h3 className='lg:text-[1.75rem] text-[1.4rem] font-medium'>
                    {title}
                </h3>
                <p className='text-[1rem] lg:text-[1.125rem] text-gray-400 font-light'>
                    {description?.toString().substring(0, 128)}{" "}
                    <button
                        onClick={() => setOpen(true)}
                        className='underline text-white font-medium'
                    >
                        read more..
                    </button>
                </p>
                <p className='text-[1rem] font-light'>
                    {" "}
                    <span className='font-semibold'>Tech stack</span>:{" "}
                    {techStacks.join(", ")}
                </p>
                <div className='flex flex-row justify-between'>
                    <a
                        className='flex gap-2 items-center cursor-pointer'
                        target='_blank'
                        href={live}
                    >
                        <BsLink45Deg size={20} />
                        <span className='underline leading-[1px]'>
                            Demo Live
                        </span>
                    </a>
                    <a
                        className='flex gap-2 items-center cursor-pointer'
                        target='_blank'
                        href={code}
                    >
                        <AiFillGithub size={20} />
                        <span className='underline leading-[1px]'>
                            View Code
                        </span>
                    </a>
                </div>
            </div>
            {open && <ProjectModal setOpen={setOpen} id={id} />}
        </div>
    );
}

export default Card;
