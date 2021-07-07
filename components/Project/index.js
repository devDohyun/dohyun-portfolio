import ProjectList from './List'
import style from './index.module.scss'

const Project = ({ projects = [], onClickActiveButton }) => {
  return (
    <div className={style.project}>
      <div className="container">
        <div className={style.title}>
          지금까지 맡아온
          <br />
          크고작은 프로젝트.
        </div>
        <ProjectList items={projects} onClickActiveButton={onClickActiveButton} />
        <div className={style.more_text}>외 9개의 더 작은 프로젝트에도 참여하였습니다.</div>
      </div>
    </div>
  )
}

export default Project
