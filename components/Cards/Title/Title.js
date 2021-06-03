import style from './Title.module.scss'

const CardTitle = ({ children }) => {
  return <div className={style.card_title}>{children}</div>
}

export default CardTitle
