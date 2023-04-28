import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experienceType } from '../utils/type'
import { experiences } from '../utils/data'
import { styles } from '../utils/classNames'

const ExperienceCard = ({title, company_name, icon, iconBg, date, points}:experienceType) => {
  return (
    <VerticalTimelineElement
    contentStyle={{
      background: "#363636",
      color:"#fff"
    }}
    contentArrowStyle={{
      borderRight: '7px solid #232631'
    }}
    date={date}
    iconStyle={{background: iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
        className="w-[60%] h-[60%] object-contain"
        src={icon} 
        alt={company_name} />
      </div>
    }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{title}</h3>
        <p className='text-secondary text-[1rem] font-semibold'>{company_name}</p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, i)=>(
          <li 
          className="text-white-100 text-[.75rem] pl-1 tracking-wider"
          key={`experience-point-${i}`}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}


function Experience() {
  return (
    <section id="experience" className={styles.sections}>
      <div className={`${styles.FlexCol}`}>
        <h1 className={`${styles.Title}`}>Work experience</h1>
        <p className={`${styles.SubTile}`}>What I have done so far.</p>
      </div>
      <div className='flex flex-col'>
        <VerticalTimeline>
          {experiences.map((exp,i)=> (
            <ExperienceCard key={i} {...exp}/>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Experience
