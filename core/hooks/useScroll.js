import { useEffect, useRef, useState } from 'react'

const useScroll = () => {
  const [state, setState] = useState({
    progress: null,
    progressTotal: null,
    inLastView: false,
  })
  const domRef = useRef()

  const listener = () => {
    if (!window) return console.warn('useScroll Hook: Window is not found.')

    const dom = domRef.current
    const over = window.scrollY - dom.offsetTop
    const target = dom.offsetTop + dom.offsetHeight

    if (over < 0) return

    const progress = over / (target - window.innerHeight)
    const progressTotal = over / target

    setState((state) => ({ ...state, progress, progressTotal, inLastView: target - over <= window.innerHeight }))
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)

    return () => window.removeEventListener('scroll', listener)
  })

  return [state, domRef]
}

export default useScroll
