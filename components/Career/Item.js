import { useCallback, useMemo } from 'react'
import Icon from '@mdi/react'
import { mdiPlusCircleOutline } from '@mdi/js'
import style from './Item.module.scss'


const CareerItem = ({ id, name, description, start, end, position, onButtonClick }) => {
  const period = useMemo(() => {
    let result = start
    result += ' ~ '

    if (end) result += end
    else result += '현재'
    
    return result
  }, [start, end])
  const handleMoreButtonClick = useCallback((e) => {
    if (typeof onButtonClick !== 'function') return


    onButtonClick({
      event: e,
      id
    })
  }, [id, onButtonClick])

  return (
    <div className={style.career_item}>
      <div>
        <div className={style.name}>{name}</div>
        <div className={style.period}>{period}</div>
      </div>
      <button className={style.button_more} type="button" onClick={handleMoreButtonClick}>
        <Icon size="1em" path={mdiPlusCircleOutline} />
      </button>
    </div>
  )
}


export default CareerItem