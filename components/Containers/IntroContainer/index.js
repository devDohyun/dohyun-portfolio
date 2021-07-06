import { useScroll } from '@/core/hooks'
import Intro from '@/components/Intro'
import { useMemo } from 'react'

const IntroContainer = () => {
  const [scrollState, domRef] = useScroll()
  const progress = useMemo(() => {
    const p = scrollState.progress

    if (p > 1) return 1
    if (p < 0) return 0

    return p
  })

  return (
    <div ref={domRef}>
      <Intro progress={progress} sticky scrollAmount="300vh"></Intro>
    </div>
  )
}

export default IntroContainer
