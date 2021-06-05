import React from 'react'
import Icon from '@mdi/react'
import { mdiPlusCircle } from '@mdi/js'

import cx from 'classnames'
import style from './index.module.scss'

const Card = ({ children, noShadow, showActiveButton, onClickActiveButton, dark, light }) => {
  const cardClassName = cx(style.card, {
    [style.no_shadow]: noShadow,
  })
  return (
    <div className={cardClassName}>
      {children}
      {showActiveButton && (
        <button className={cx(style.active_button, { [style.dark]: dark, [style.light]: light })} type="button" onClick={onClickActiveButton}>
          <Icon path={mdiPlusCircle} size="1em" />
        </button>
      )}
    </div>
  )
}

Card.defaultProps = {
  onClickActiveButton: () => {},
}

export default React.memo(Card)
