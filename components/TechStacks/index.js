import ImageCard from '@/components/Cards/Image'
import style from './index.module.scss'
import StackItem from './Item'
import StackMainItem from './Item/Main'
import AchievementItem from './Item/Achievement'


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
            <div className={style.title}>Javascript를 활용하여 <span className={style.highlight}>간결하고 정확한 코딩</span>을 지향합니다.</div>
            <div className={style.text_javascript}>JS</div>
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
            <div className={style.title}>보유중인 <span className={style.highlight}>자격증</span> 및 <span className={style.highlight}>최종 학력</span></div>
            <div className={style.item_wrapper}>
              {achievements.map((item) => <AchievementItem key={item.title} {...item} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default TechStacks