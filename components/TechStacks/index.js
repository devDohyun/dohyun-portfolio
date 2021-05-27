import ImageCard from '@/components/Cards/Image'
import style from './index.module.scss'
import StackItem from './Item'


const TechStacks = ({ stacks = [] }) => {
  return (
    <div className={style.tech_stacks}>
      <div className="container">
        <div className={style.cards_wrapper}>
          <div className={style.profile_card}>
            <ImageCard
              src="https://storage.googleapis.com/clone-youtube-music/devdohyun-portfolio/imdohyun.jpg"
              ratio={1.5}
            />
          </div>
          <div className={style.stack_cards}>
            <div className={style.title_card}>
              <div className={style.title}>Javascript를 활용하여 <span className={style.highlight}>간결하고 정확한 코딩</span>을 지향합니다.</div>
              <div className={style.text_javascript}>JS</div>
            </div>
            <div className={style.stack_card}>
              {stacks.filter((item) => item.isMain !== true).map((item) => <StackItem key={item.name} text={item.name} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default TechStacks