import ProgressLinear from '@/components/Progress/Linear'
import { useMemo } from 'react'
import style from './Main.module.scss'


const MainItem = ({ name, isLearning, level }) => {
  const desc = useMemo(() => {
    let result = ''
    
    
    if (level >= 70) result = '다수의 서비스 경험 보유'
    else if (level >= 30) result = '서비스 경험 보유'
    else result = '사용 경험 보유'


    if (isLearning) result += ', 학습중'

    return result
  }, [level, isLearning])
  
  
  return (
    <div className={style.main_item}>
      <div className={style.text}>
        <div className={style.name}>{name}</div>
        <div className={style.desc}>{desc}</div>
        <div className={style.level}>
          <ProgressLinear value={level} isActivated={isLearning} />
        </div>
      </div>
    </div>
  )
}


export default MainItem