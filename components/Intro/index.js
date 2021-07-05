import cx from 'classnames'
import AnimateWave from '../Animate/Wave'
import style from './index.module.scss'

const Intro = ({ progress = 0, sticky = false, scrollAmount }) => {
  const contentClassnames = cx(style.content, {
    [style.sticky]: sticky && progress < 1,
    [style.left]: progress >= 1,
  })

  return (
    <div className={style.intro}>
      {sticky && scrollAmount && <div style={{ height: scrollAmount }}></div>}
      <div className={contentClassnames}>
        <div className={style.canvas_wrapper}>
          <AnimateWave progress={progress} />
        </div>
        <div className={style.text_wrapper}>
          <div className="container">
            <div className={cx(style.title, style.animate)}>
              <div>안녕하세요.</div>
              <div>
                <span className={cx(style.text_behind, { [style.active]: progress > 0.9 })}>유저를 생각하는</span>
                <span className={style.highlight}>Web Front-End</span> 개발자
              </div>
              <div>
                <span className={cx(style.text_behind, { [style.active]: progress > 0.9 })}>안도현</span>
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
