import { useState, useEffect, useRef } from 'react'
import Intro from '@/components/Intro'


const IntroContainer = () => {
  const [scroll, setScroll] = useState({
    percentage: 0
  })
  const backgroundPlaceholder = useRef()


  useEffect(() => {
    const scrollHandler = () => setScroll((scroll) => ({
      ...scroll,
      percentage: Math.min((window.scrollY - backgroundPlaceholder.current.offsetTop) / (backgroundPlaceholder.current.offsetHeight - window.innerHeight), 1)
    }))
    
    
    window.addEventListener('scroll', scrollHandler)


    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])


  return (
    <Intro
      refBackgroundPlaceholder={backgroundPlaceholder}
      percentage={scroll.percentage}
      backgroundHeight="200vh"
      isIntro={true}
    ></Intro>
  )
}


export default IntroContainer