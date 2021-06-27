import { useState, useEffect, useRef } from 'react'
import Intro from '@/components/Intro'

const IntroContainer = () => {
  const [scroll, setScroll] = useState({
    percentage: 0,
  })
  const containerRef = useRef()

  useEffect(() => {
    const scrollHandler = () =>
      setScroll((scroll) => ({
        ...scroll,
        percentage: Math.min((window.scrollY - containerRef.current.offsetTop) / (containerRef.current.offsetHeight - window.innerHeight), 1),
      }))

    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <div ref={containerRef}>
      <Intro percentage={scroll.percentage} backgroundHeight="200vh" isIntro={true}></Intro>
    </div>
  )
}

export default IntroContainer
