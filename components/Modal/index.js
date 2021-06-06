import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import style from './index.module.scss'

const lockBackground = () => {
  const body = document.body
  const store = {
    position: body.style.position,
  }
  const scrollY = window.scrollY

  body.style.position = 'fixed'
  body.style.top = `-${scrollY}px`
  body.style.width = '100%'
  body.style.height = '100%'

  return store
}
const releaseBackground = (store = {}) => {
  const body = document.body
  const top = body.style.top

  body.style.position = store.position || ''
  body.style.top = ''
  body.style.width = ''
  body.style.height = ''

  if (top) window.scrollTo({ top: parseInt(top) * -1 })
}

const Modal = ({ children, active, onBackgroundClick }) => {
  const [bodyState, setBodyState] = useState({ isLocked: false, styles: {} })

  useEffect(() => {
    if (active) setBodyState((state) => ({ ...state, isLocked: true, styles: lockBackground() }))
    else if (active === false) {
      if (bodyState.isLocked) releaseBackground(bodyState.styles)
      setBodyState((state) => ({ ...state, isLocked: false, styles: {} }))
    }
  }, [active])
  useEffect(() => releaseBackground, [])

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
