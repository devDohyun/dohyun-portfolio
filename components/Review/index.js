import MessageList from '@/components/Message/List'
import style from './index.module.scss'


const Review = ({ reviews = [] }) => {
  return (
    <div className={style.review}>
      <div className="container">
        <div className={style.title}>언제 어디서나<br />최선을 다합니다.</div>
        <MessageList items={reviews} />
      </div>
    </div>
  )
}


export default Review