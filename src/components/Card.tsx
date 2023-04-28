import { AiFillGithub } from 'react-icons/ai'
import { BsLink45Deg } from 'react-icons/bs'
import { projectType } from '../utils/type';

function Card({title, description, image, code, live}:projectType) {
    return (
        <div className="w-[373px] h-[567px] rounded-[20px] bg-[#363636] flex flex-col">
            <div className="w-full h-[260px]">
                <img className='w-full h-full object-cover' src={image} alt="" />
            </div>
            <div className="px-6 py-4 flex flex-col gap-2">
                <h3 className="text-[1.75em] font-medium">{title}</h3>
                <p className='text-[1.125rem] font-light'>{description}</p>
                <p className='text-[1rem] font-light'> <span className='font-semibold'>Tech stack</span>: HTML , JavaScript, SASS, React</p>
                <div className="flex flex-row justify-between">
                    <a className='flex gap-2 items-center' href={live}>
                        <BsLink45Deg size={20} />
                        <span className='underline leading-[1px]'>Demo Live</span>
                    </a>
                    <a className='flex gap-2 items-center' href={code}>
                        <AiFillGithub size={20} />
                        <span className='underline leading-[1px]'>View Code</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card
