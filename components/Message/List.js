import MessageItem from './Item'
import style from './List.module.scss'
import cx from 'classnames'

const MessageList = ({ items = [] }) => {
  return (
    <div className={style.message_list}>
      {items.map(item => (
        <div key={item.id} className={cx(style.item, { [style.left]: item.direction === 'left', [style.right]: item.direction === 'right' })}>
          <MessageItem {...item} />
        </div>
      ))}
    </div>
  )
}

export default MessageList
