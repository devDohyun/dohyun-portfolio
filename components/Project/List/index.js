import Card from '@/components/Card'

import cx from 'classnames'

import style from './index.module.scss'
import CardTitle from '@/components/Card/Title'

const ProjectList = ({ items = [], onClickActiveButton }) => {
  return (
    <div className={style.project_list}>
      <div className={style.items_wrapper}>
        {items.map((item) => (
          <div key={item.id} className={cx(style.item, { [style.main]: item.main })}>
            <Card showActiveButton onClickActiveButton={() => onClickActiveButton(item)} light={item.light} dark={item.dark}>
              <div className={cx(style.card_content, style[`project_${item.id}`])}>
                <div className={style.title}>
                  <CardTitle large>{item.title}</CardTitle>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
