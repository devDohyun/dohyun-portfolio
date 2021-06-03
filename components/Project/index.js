import ProjectList from './List'
import style from './index.module.scss'

const Project = ({ projects = [] }) => {
  return (
    <div className={style.project}>
      <div className="container">
        <ProjectList items={projects} />
      </div>
    </div>
  )
}

export default Project
