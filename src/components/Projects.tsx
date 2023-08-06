import { styles } from "../utils/classNames"
import { projects } from "../utils/data"
import Card from "./Card"

function Projects() {
  return (
    <section id="projects" className={styles.sections}>
      <div className={`${styles.FlexCol}`}>
        <h1 className={`${styles.Title}`}>Projects</h1>
        <p className={`${styles.SubTile}`}>Things I’ve built so far</p>
      </div>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-16">
        {projects.map((project, _) => (
          <Card
            key={project.id}
            title={project.title}
            techStacks={project.techStacks}
            description={project.description}
            image={project.image} />
        ))}
      </div>
    </section>
  )
}

export default Projects
