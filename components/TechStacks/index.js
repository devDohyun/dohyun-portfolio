import ImageCard from '@/components/Cards/Image'
import style from './index.module.scss'
import StackItem from './Item'
import StackMainItem from './Item/Main'


const TechStacks = ({ stacks = [], achievements = [] }) => {
  return (
    <div className={style.tech_stacks}>
      <div className="container">
        <div className={style.cards_wrapper}>
          <div>
            <ImageCard
              src="https://storage.googleapis.com/clone-youtube-music/devdohyun-portfolio/imdohyun.jpg"
              ratio={1.2}
            />
          </div>
          <div className={style.title_card}>
            <div className={style.text_javascript}>JS</div>
            <div className={style.title}>Javascript를 활용하여 <span className={style.highlight}>간결하고 정확한 코딩</span>을 지향합니다.</div>
          </div>
            <div className={style.stack_card}>
              <div className={style.title}>제가 주로 다루고있는 <span className={style.highlight}>기술</span>은 ...</div>
              <div className={style.main_wrapper}>
                {stacks.filter((item) => item.isMain === true).map((item) => <StackMainItem key={item.name} name={item.name} level={item.level} isLearning={item.isLearning} />)}
              </div>
              <div className={style.others_wrapper}>
                {stacks.filter((item) => item.isMain !== true).map((item) => <StackItem key={item.name} name={item.name} />)}
              </div>
          </div>
          <div className={style.achievement_card}>
            <div className={style.title}><span className={style.highlight}>소프트웨어 특성화 고등학교</span>를 <span className={style.highlight}>졸업</span>하였습니다.</div>
            <div className={style.item_wrapper}>
              어린 시절부터 컴퓨터와 관련된 직업을 가지고 싶었던 저는, 소프트웨어 특성화 고등학교인 <span className={style.highlight}>세명 컴퓨터고등학교</span>에 진학하여 <span className={style.highlight}>스마트 보안솔루션과</span>를 전공하였습니다.<sup className={style.note} title="2018년 2월 졸업">1</sup><br />
            </div>
            <div className={style.note_wrapper}>
              <div className={style.item}>1. 2018년 2월 졸업</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default TechStacks