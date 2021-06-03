import Card from '@/components/Card'
import style from './List.module.scss'

const ProjectList = ({ items = [] }) => {
  return (
    <div className={style.project_list}>
      <div className={style.items_wrapper}>
        {items.map(item => (
          <div key={item.id} className={style.item}>
            <Card>div</Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
