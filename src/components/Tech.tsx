/** @format */

import { styles } from "../utils/classNames";
import { techStacks } from "../utils/data";
function Tech() {
    return (
        <section id='tech' className={styles.sections}>
            <div className={`${styles.FlexCol}`}>
                <h1 className={`${styles.Title}`}>My Tech Stack</h1>
                <p className={`${styles.SubTile}`}>
                    Technologies I’ve been working with recently
                </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12'>
                {techStacks.map((tech, i) => (
                    <div
                        key={i}
                        className='flex flex-col transform hover:translate-x-4 duration-200 items-center gap-2'
                    >
                        <p className='font-semibold'>{tech.title}</p>
                        <div className='w-[113px] h-[101px]'>
                            <img
                                className='w-[113px] h-[101px] object-contain'
                                src={tech.imageUrl}
                                alt={tech.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Tech;
