import { useScroll } from '@/core/hooks'
import Intro from '@/components/Intro'

const IntroContainer = () => {
  const [scrollState, domRef] = useScroll()

  return (
    <div ref={domRef}>
      <Intro progress={scrollState.progress} sticky scrollAmount="300vh"></Intro>
    </div>
  )
}

export default IntroContainer
