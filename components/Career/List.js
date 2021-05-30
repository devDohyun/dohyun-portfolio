import CareerItem from './Item'
import style from './List.module.scss'


const CareerList = ({ items }) => {
  return (
    <div className={style.career_list}>
      {items.map((item, idx) => <CareerItem key={idx} {...item} />)}
    </div>
  )
}


export default CareerList