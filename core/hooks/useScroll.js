import { useEffect, useRef, useState } from 'react'

const useScroll = () => {
  const [state, setState] = useState({
    percentage: 0,
  })
  const domRef = useRef()

  const listener = () => {
    if (!window) return console.warn('useScroll Hook: Window is not found.')

    const dom = domRef.current
    const over = window.scrollY - dom.offsetTop

    if (over < 0) return

    const percentage = over / (dom.offsetTop + dom.offsetHeight)

    console.log(percentage)

    setState((state) => ({ ...state, percentage }))
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)

    return () => window.removeEventListener('scroll', listener)
  })

  return [state, domRef]
}

export default useScroll
