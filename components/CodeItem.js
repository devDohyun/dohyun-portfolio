import style from './CodeItem.module.scss'


const CodeItem = ({ text }) => {
  return (
    <div className={style.code_item}>
      {text}
    </div>
  )
}


export default CodeItem