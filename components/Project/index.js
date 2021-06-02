import ProjectList from './List'
import style from './index.module.scss'

const Project = ({ projects = [], onItemClick }) => {
  return (
    <div className={style.project}>
      <div className="container">
        <div className={style.content}>
          <ProjectList items={projects} onItemClick={onItemClick} />
        </div>
      </div>
    </div>
  )
}

export default Project
