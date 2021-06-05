import React from 'react'
import cx from 'classnames'
import style from './index.module.scss'

const Modal = ({ children, active }) => {
  return (
    <div className={cx(style.modal, { [style.active]: active })}>
      <div className={style.dimmed}></div>
      <div className={style.content}>{children}</div>
    </div>
  )
}

export default React.memo(Modal)
