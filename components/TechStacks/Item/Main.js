import { useMemo } from 'react'
import style from './Main.module.scss'


const MainItem = ({ name, isLearning, level }) => {
    const desc = useMemo(() => {
        let result = ''
        
        
        if (level >= 70) result = ''
        else if (level >= 50) result = ''
        else if (level >= 30) result = ''


        return result
    }, [level, isLearning])
    
    
    return (
        <div className={style.main_item}>
            <div className={style.text}>
                <div className={style.name}>{name}</div>
                <div className={style.desc}>{desc}</div>
            </div>
        </div>
    )
}


export default MainItem