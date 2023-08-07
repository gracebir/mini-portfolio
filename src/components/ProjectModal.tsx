import { projectModalProp } from "../utils/type"
import { IoMdClose } from 'react-icons/io'
import { BsGithub } from 'react-icons/bs'
import { AiFillEye } from 'react-icons/ai'
import { projects } from "../utils/data"

const ProjectModal = ({ setOpen, id }: projectModalProp) => {
    const project = projects.find((item, _) => item.id === id)
    return (
        <div className="fixed inset-0 backdrop-blur-sm right-0 w-full h-screen flex items-center z-50">
            <div className="max-w-5xl lg:h-3/4 h-screen bg-[#191919] mx-auto flex-1 p-4 rounded-md">
                <button className="text-white" onClick={() => setOpen(false)}>
                    <IoMdClose className="text-2xl" />
                </button>
                <div className="px-4 flex flex-col gap-4 lg:gap-6">
                    <div className="flex flex-col lg:flex-row gap-2">
                        <div className="lg:h-80 h-[50vh] max-w-3xl flex-1">
                            <img className="lg:h-full h-64 w-full object-cover" src={project?.image} alt={project?.title} />
                        </div>
                        <div className="flex flex-row lg:flex-col gap-4">
                            <a href={project?.code} target="_blank" className="flex items-center gap-2 px-2 py-1 border border-gray-600 hover:border-gray-400 rounded-md">
                                View code <BsGithub />
                            </a>
                            <a href={project?.live} target="_blank" className="flex items-center gap-2 px-2 py-1 border border-gray-600 hover:border-gray-400 rounded-md">
                                View Demo <AiFillEye />
                            </a>
                        </div>
                    </div>
                    <div className="max-w-3xl space-y-3">
                        <h1 className="text-2xl lg:text-3xl font-bold">{project?.title}</h1>
                        <p>{project?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal