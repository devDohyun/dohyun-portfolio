import style from './CodeItem.module.scss'


const CodeItem = (props) => {
  return (
    <div className={style.code_item}>
      {props.text}
    </div>
  )
}


export default CodeItem