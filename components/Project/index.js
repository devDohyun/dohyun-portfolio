import ProjectList from './List'
import style from './index.module.scss'

const Project = ({ projects = [], onClickActiveButton }) => {
  return (
    <div className={style.project}>
      <div className="container">
        <ProjectList items={projects} onClickActiveButton={onClickActiveButton} />
      </div>
    </div>
  )
}

export default Project
