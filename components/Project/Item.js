import { useCallback } from 'react'
import style from './Item.module.scss'

const ProjectItem = ({ onClick, id, title, belong }) => {
  const handleClick = useCallback(() => {
    onClick(id)
  }, [onClick])

  return (
    <div className={style.project_item} onClick={handleClick}>
      <div className={style.title}>{title}</div>
      <div className={style.belong}>{belong}</div>
    </div>
  )
}

ProjectItem.defaultProps = {
  id: null,
  onClick: () => {},
}

export default ProjectItem
