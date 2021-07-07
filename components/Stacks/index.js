import Image from '@/components/Image'
import Card from '@/components/Card'
import CardTitle from '@/components/Card/Title'
import StackItem from './Item'
import StackMainItem from './Item/Main'

import style from './index.module.scss'
import cx from 'classnames'

const Stacks = ({ stacks = [] }) => {
  return (
    <div className={style.stacks}>
      <div className="container">
        <div className={style.cards_wrapper}>
          <div className={style.card_item}>
            <Card>
              <Image src="https://kr.object.ncloudstorage.com/dev-dohyun/dohyun-portfolio/imdohyun.jpg" ratio={1.2} />
            </Card>
          </div>
          <div className={style.card_item}>
            <Card>
              <div className={cx(style.card_content, style.title_card)}>
                <div className={style.text_javascript}>JS</div>
                <div className={style.title}>
                  <CardTitle>
                    <span className={style.highlight}>Javascript</span>를 활용하여 <span className={style.highlight}>빠르고 간결한 개발</span>을 지향합니다.
                  </CardTitle>
                </div>
              </div>
            </Card>
          </div>
          <div className={style.card_item}>
            <Card>
              <div className={cx(style.card_content, style.stack_card)}>
                <div className={style.title}>
                  <CardTitle>
                    제가 주로 다루고있는 <span className={style.highlight}>기술스택</span>은 ...
                  </CardTitle>
                </div>
                <div className={style.main_wrapper}>
                  {stacks
                    .filter((item) => item.isMain === true)
                    .map((item) => (
                      <StackMainItem key={item.name} name={item.name} level={item.level} isLearning={item.isLearning} />
                    ))}
                </div>
                <div className={style.others_wrapper}>
                  {stacks
                    .filter((item) => item.isMain !== true)
                    .map((item) => (
                      <StackItem key={item.name} name={item.name} />
                    ))}
                </div>
              </div>
            </Card>
          </div>
          <div className={style.card_item}>
            <Card>
              <div className={cx(style.card_content, style.achievement_card)}>
                <div className={style.title}>
                  <CardTitle>
                    <span className={style.highlight}>소프트웨어 특성화 고등학교</span>를 <span className={style.highlight}>졸업</span>하였습니다.
                  </CardTitle>
                </div>
                <div className={style.item_wrapper}>
                  어린 시절부터 컴퓨터와 관련된 직업을 가지고 싶었던 저는, 소프트웨어 특성화 고등학교인 <span className={style.highlight}>세명컴퓨터고등학교</span>에 진학하여 <span className={style.highlight}>스마트 보안솔루션과</span>를 전공하였습니다.
                  <sup className={style.note} title="2018년 2월 졸업">
                    1
                  </sup>
                  <br />
                </div>
                <div className={style.note_wrapper}>
                  <div className={style.item}>1. 2018년 2월 졸업</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stacks
