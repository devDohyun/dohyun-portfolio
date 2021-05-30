import { useMemo } from 'react'
import style from './Item.module.scss'


const CareerItem = ({ name, description, start, end, position }) => {
    const period = useMemo(() => {
        return start
    }, [start, end])
    
    
    return (
        <div className={style.career_item}>
            <div className={style.name}>{name}</div>
            <div className={style.period}>{period}</div>
        </div>
    )
}


export default CareerItem