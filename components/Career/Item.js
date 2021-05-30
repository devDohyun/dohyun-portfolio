import { useMemo } from 'react'
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js'
import style from './Item.module.scss'


const CareerItem = ({ name, description, start, end, position }) => {
  const period = useMemo(() => {
    return start
  }, [start, end])


  return (
    <div className={style.career_item}>
      <div>
        <div className={style.name}>{name}</div>
        <div className={style.period}>{period}</div>
      </div>
      <button className={style.button_more} type="button">
        <Icon size="1em" path={mdiPlusCircleOutline} />
      </button>
    </div>
  )
}


export default CareerItem