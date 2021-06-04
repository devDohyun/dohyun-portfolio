import React from 'react'

import cx from 'classnames'
import style from './index.module.scss'

const CardTitle = ({ children, large }) => {
  const titleClassname = cx(style.card_title, {
    [style.large]: large,
  })
  return <div className={titleClassname}>{children}</div>
}

export default React.memo(CardTitle)
