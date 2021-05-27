import style from './index.module.scss'


const StackItem = ({ text }) => {
  return (
    <div className={style.stack_item}>{text}</div>
  )
}


export default StackItem