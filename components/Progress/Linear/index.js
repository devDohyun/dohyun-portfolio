import style from './index.module.scss'


const ProgressLinear = ({ value, isActivated }) => {
  return (
    <div className={style.progress_linear}>
      <div className={style.wrapper}>
        <div className={style.value} style={{ width: `${value}%` }}>
          {isActivated && <div className={style.active}></div>}
        </div>
      </div>
    </div>
  )
}


export default ProgressLinear