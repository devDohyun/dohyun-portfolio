import Card from '@/components/Card'
import { useCallback, useRef } from 'react'

import cx from 'classnames'

import style from './List.module.scss'

const ProjectList = ({ items = [] }) => {
  const activeId = useRef(null)
  const itemsComputed = items.map((item) => ({ ...item, active: activeId.current === item.id }))
  const handleClickActiveButton = useCallback(
    (item) => {
      activeId.current = item.id
    },
    [items]
  )

  return (
    <div className={style.project_list}>
      <div className={style.items_wrapper}>
        {itemsComputed.map((item) => (
          <div key={item.id} className={style.item}>
            <Card showActiveButton onClickActiveButton={handleClickActiveButton} flip={item.active}>
              <div className={cx(style.card_content, style[`project_${item.id}`])}>test</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
