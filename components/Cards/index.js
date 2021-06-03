import React from 'react'

import cx from 'classnames'
import style from './index.module.scss'

const Card = ({ children, noShadow }) => {
  const cardClassName = cx(style.card, {
    [style.no_shadow]: noShadow,
  })
  return <div className={cardClassName}>{children}</div>
}

export default React.memo(Card)
