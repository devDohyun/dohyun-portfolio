import { useMemo } from 'react'
import cx from 'classnames'
import AnimateWave from '../Animate/Wave'

import style from './index.module.scss'
import { easeOutQuint } from '@/core/timing-functions'

const Intro = ({ progress = 0, sticky = false, scrollAmount }) => {
  const figure = useMemo(() => easeOutQuint(progress), [progress])
  const contentClassnames = cx(style.content, {
    [style.sticky]: sticky && figure < 1,
    [style.left]: figure >= 1,
  })

  return (
    <div className={style.intro}>
      {sticky && scrollAmount && <div style={{ height: scrollAmount }}></div>}
      <div className={contentClassnames}>
        <div className={style.canvas_wrapper}>
          <AnimateWave progress={figure} />
        </div>
        <div className={cx(style.text_wrapper, { [style.active]: figure > 0.85 })}>
          <div className="container">
            <div className={cx(style.title, style.animate)}>
              <div>안녕하세요.</div>
              <div>
                <span className={cx(style.text_behind, { [style.active]: figure > 0.85 })}>UX에 진심을 담는</span>
                <span className={style.highlight}>Web Front-End&nbsp;</span> 개발자
              </div>
              <div>
                <span className={cx(style.text_behind, { [style.active]: figure > 0.85 })}>안도현</span>
                <span className={cx(style.highlight)}>안도현</span>입니다.
              </div>
            </div>
            <div className={cx(style.subtitle, style.animate)}>아래로 내려서 더-보기</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
