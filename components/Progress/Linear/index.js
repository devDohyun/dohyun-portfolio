import style from './index.module.scss'


const ProgressLinear = ({ value }) => {
    return (
        <div className={style.progress_linear}>
            <div className={style.wrapper}>
                <div className={style.value} style={{ width: `${value}%` }}></div>
            </div>
        </div>
    )
}


export default ProgressLinear