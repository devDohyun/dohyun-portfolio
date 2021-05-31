import React, { useMemo } from 'react'
import cx from 'classnames'
import style from './index.module.scss'


const Intro = ({ backgroundHeight = '100vh', percentage = 0, refBackgroundPlaceholder, isIntro  = false }) => {
  const { isActivated, isExited, backgroundOpacity } = useMemo(() => {
    if (isIntro) return {
      isActivated: percentage < 1,
      isExited: percentage === 1,
      backgroundOpacity: 1 - percentage
    }

    
    return {}
  }, [percentage])

  
  return (
    <div className={style.intro}>
      <div className={cx(style.content, { [style.active]: isActivated, [style.exited]: isExited })}>
        <div className={style.content_text}>
          <div className={style.title}>3년차 Front-End 개발자 안도현</div>
          <div className={style.subtitle}>계속 내려서 더-보기</div>
        </div>
        <div className={style.background} style={{ opacity: backgroundOpacity }}>
          <div className={style.background_text}>
            <div className={style.title}>저의 작은 경험이 귀사에 도움이 되길 바랍니다.</div>
            <div className={style.subtitle}>사용자에게 좋은 서비스를 만들기 위해 노력하겠습니다.</div>
          </div>
        </div>
      </div>
      <div ref={refBackgroundPlaceholder} style={{ height: backgroundHeight }}></div>
    </div>
  )
}


export default React.memo(Intro)