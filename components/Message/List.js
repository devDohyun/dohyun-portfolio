import { useMemo } from 'react'
import MessageItem from './Item'
import style from './List.module.scss'
import classnames from 'classnames/bind'


const cx = classnames.bind(style)

const MessageList = ({ items = [] }) => {
  const itemsComputed = useMemo(() => (items.map((item, idx) => ({ ...item, direction: (idx % 2) ? 'right' : 'left' }))))
  
  
  return (
    <div className={style.message_list}>
      {itemsComputed.map((item) => (
        <div key={item.id} className={cx(style.item, { [style.left]: item.direction === 'left', [style.right]: item.direction === 'right' })}>
          <MessageItem {...item} />
        </div>
      ))}
    </div>
  )
}


export default MessageList