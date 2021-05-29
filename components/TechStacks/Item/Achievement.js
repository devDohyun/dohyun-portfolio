import Icon from '@mdi/react'
import { mdiSchoolOutline, mdiCertificateOutline } from '@mdi/js'

import style from './Achievement.module.scss'
import { useMemo } from 'react'


const AchievementItem = ({ type, title, start, end }) => {
  const iconPath = useMemo(() => {
    if (type === 'school') return mdiSchoolOutline
    if (type === 'cert') return mdiCertificateOutline
  }, [type])
  const desc = useMemo(() => {
    let result = start


    if (end) result += ` ~ ${end}`
    
    
    return result
  }, [start, end])
  
  
  return (
    <div className={style.achievement_item}>
      <div className={style.icon}>
        <Icon path={iconPath} size={1} />
      </div>
      <div className={style.text_box}>
        <div className={style.title}>{title}</div>
        <div className={style.desc}>{desc}</div>
      </div>
    </div>
  )
}


export default AchievementItem