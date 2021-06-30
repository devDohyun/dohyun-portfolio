import cx from 'classnames'
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
        <div className={style.text_wrapper}>
          {progress <= 0.5 ? (
            <>
              <div className={style.title}>Front-End 개발자 안도현</div>
              <div className={style.subtitle}>아래로 내려서 더-보기</div>
            </>
          ) : (
            <>
              <div className={style.title}>저의 작은 경험이 귀사에 도움이 되길 바랍니다.</div>
              <div className={style.subtitle}>사용자에게 좋은 서비스를 만들기 위해 노력하겠습니다.</div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Intro
