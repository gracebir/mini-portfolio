import { styles } from "../utils/classNames"
import { services } from "../utils/data"
import { serviceType } from "../utils/type"

const ServiceCard = ({title, icon}:serviceType) => {
    return (
      <div className="xs:w-[250px] w-full">
        <div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div 
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title}
            className="w=16 h-16 object-contain"
             />
             <h3 className="text-white text-[20px] text-center font-bold">{title}</h3>
          </div>
        </div>
      </div >
    )
  }

function About() {
  return (
    <section id='about' className={styles.sections}>
      <div className={styles.FlexCol}>
        <h1 className={styles.Title}>About me</h1>
        <p className='text-secondary text-[1.1925rem] max-w-4xl mx-auto leading-[30px]'>
      I'm a skilled software engineer with experience with Typescipt and Javascript
      , and expertise in libraries like React, Three.js, Next.js, and Node.js. I'm a
      quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions
       that solve real-world problems. let's work together to bring your ideas to life!
      </p>
      </div>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-8">
      {services.map((service, i)=> (
        <ServiceCard key={i} {...service} />
      ))}
      </div>
    </section>
  )
}

export default About
