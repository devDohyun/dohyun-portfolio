import { useScroll } from '@/core/hooks'
import cx from 'classnames'
import BusinessCard from '@/components/BusinessCard'

import style from './index.module.scss'

const Profile = ({ profileInfo = {} }) => {
  const [scrollState, scrolldRef] = useScroll()

  return (
    <div ref={scrolldRef} className={style.profile}>
      <div className="container">
        <div className={style.title}>
          사용자에게 더 나은 경험을
          <br />
          제공하기 위해 노력합니다.
        </div>
      </div>
      <div className={cx(style.business_card_wrapper, style.animated, { [style.active]: scrollState.progress !== null })}>
        <BusinessCard {...profileInfo} />
      </div>
    </div>
  )
}

export default Profile
