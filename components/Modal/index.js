import React from 'react'
import cx from 'classnames'
import style from './index.module.scss'

const Modal = ({ children, active, onBackgroundClick }) => {
  return (
    <div className={cx(style.modal, { [style.active]: active })}>
      <div onClick={onBackgroundClick} className={style.dimmed}></div>
      <div className={style.content}>{children}</div>
    </div>
  )
}

Modal.defaultProps = {
  onBackgroundClick: () => {},
}

export default React.memo(Modal)
