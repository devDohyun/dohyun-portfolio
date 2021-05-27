import style from './index.module.scss'


const Intro = (props) => {
  
  
  return (
    <div className={style.intro}>
      <div>
        <div className={style.title}>Front-End 개발자 안도현</div>
        <div className={style.subtitle}>아래로 내려서 더-보기</div>
      </div>
      <div className={style.background}>
        {props.codeItems}
      </div>
    </div>
  )
}


export default Intro