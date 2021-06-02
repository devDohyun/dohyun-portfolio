import ProjectItem from './Item'
import style from './List.module.scss'

const ProjectList = ({ items = [], onItemClick }) => {
  return (
    <div className={style.project_list}>
      <div className={style.items_wrapper}>
        {items.map(item => (
          <ProjectItem key={item.id} onClick={onItemClick} {...item} />
        ))}
      </div>
      <div className={style.others_text}>이외 8개의 크고작은 프로젝트가 있습니다.</div>
    </div>
  )
}

export default ProjectList
