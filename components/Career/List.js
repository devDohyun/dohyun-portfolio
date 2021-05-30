import { useCallback, useState } from 'react'
import CareerItem from './Item'
import style from './List.module.scss'


const CareerList = ({ items }) => {
  const [activeId, setActiveId] = useState(null)
  const handleButtonClick = useCallback(({ id }) => {
    setActiveId(curId => curId === id ? null : id)
  }, [])
  
  
  return (
    <div className={style.career_list}>
      {items.map((item) => <CareerItem key={item.id} {...item} onButtonClick={handleButtonClick} active={item.id === activeId} />)}
    </div>
  )
}


export default CareerList