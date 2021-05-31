import style from './Item.module.scss'
import classnames from 'classnames/bind'
import { useMemo } from 'react'


const cx = classnames.bind(style)

const MessageItem = ({ text, sender = {}, direction }) => {
  const messageItemClassName = useMemo(() => {
    const arr = [style.message_item]
    if (direction === 'left') arr.push(style.left)
    if (direction === 'right') arr.push(style.right)


    return cx(...arr)
  })
  
  
  return (
    <div className={messageItemClassName}>
      <div className={style.sender}>{sender.belong} {sender.name}</div>
      <div className={style.text}>
        {text}
      </div>
    </div>
  )
}


export default MessageItem