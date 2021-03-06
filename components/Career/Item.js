import { useCallback, useMemo } from 'react'
import Icon from '@mdi/react'
import { mdiPlusCircleOutline, mdiMinusCircleOutline } from '@mdi/js'
import cx from 'classnames'
import style from './Item.module.scss'

const CareerItem = ({ id, name, description, start, end, position, onButtonClick, active }) => {
  const careerText = useMemo(() => {
    let result = start.slice(0, -3)
    result += ' ~ '

    if (end) result += end.slice(0, -3)
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
      [style.button_red]: active === true,
    })
  }, [active])
  const handleMoreButtonClick = useCallback(
    (e) => {
      if (typeof onButtonClick !== 'function') return

      onButtonClick({
        event: e,
        id,
      })
    },
    [id, onButtonClick]
  )

  return (
    <div className={cx(style.career_item, { [style.active]: active })}>
      <div className={style.text_box}>
        <div className={style.name}>{name}</div>
        <div className={style.career_text}>{careerText}</div>
      </div>
      <div className={style.career_desc}>{description}</div>
      <button className={buttonRightClassName} type="button" onClick={handleMoreButtonClick}>
        <Icon size="1em" path={iconPath} />
      </button>
    </div>
  )
}

export default CareerItem
