import { useCallback, useMemo } from 'react'
import Icon from '@mdi/react'
import { mdiPlusCircleOutline, mdiMinusCircleOutline } from '@mdi/js'
import cx from 'classnames'
import style from './Item.module.scss'


const CareerItem = ({ id, name, description, start, end, position, onButtonClick, active }) => {
  const careerText = useMemo(() => {
    let result = start
    result += ' ~ '

    if (end) result += end
    else result += '현재'
    
    result = result.replace(/-/g, '/')
    return `${position}, ${result}`
  }, [start, end, position])
  const iconPath = useMemo(() => {
    return active ? mdiMinusCircleOutline : mdiPlusCircleOutline
  }, [active])
  const buttonRightClassName = useMemo(() => {
    return cx(style.button_right, {
      [style.button_green]: active !== true,
      [style.button_red]: active === true
    })
  }, [active])
  const handleMoreButtonClick = useCallback((e) => {
    if (typeof onButtonClick !== 'function') return


    onButtonClick({
      event: e,
      id
    })
  }, [id, onButtonClick])

  return (
    <div className={style.career_item}>
      <div className={cx(style.text_box, { [style.hidden]: active })}>
        <div className={style.name}>{name}</div>
        <div className={style.career_text}>{careerText}</div>
      </div>
      <div className={cx(style.career_desc, { [style.active]: active })}>
        {description}
      </div>
      <button className={buttonRightClassName} type="button" onClick={handleMoreButtonClick}>
        <Icon size="1em" path={iconPath} />
      </button>
    </div>
  )
}


export default CareerItem