import style from './index.module.scss'


const StackItem = ({ name }) => {
  return (
    <div className={style.stack_item}>{name}</div>
  )
}


export default StackItem