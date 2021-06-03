import React from 'react'

import cx from 'classnames'
import style from './index.module.scss'

const Image = ({ src, className = [], ratio = 1 }) => {
  return <div className={cx(style.image_card, ...className)} style={{ backgroundImage: `url(${src})`, paddingBottom: `${ratio * 100}%` }}></div>
}

export default React.memo(Image)
