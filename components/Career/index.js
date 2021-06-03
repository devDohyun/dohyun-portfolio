import style from './index.module.scss'
import CareerList from './List'
import Icon from '@mdi/react'
import { mdiBriefcase } from '@mdi/js'

const Career = ({ careers = [] }) => {
  return (
    <div className={style.career}>
      <div className="container">
        <div className={style.content_wrapper}>
          <div className={style.text_wrapper}>
            <div>
              <div className={style.icon}>
                <Icon path={mdiBriefcase} size={'1em'} />
              </div>
              <div className={style.title}>경력사항</div>
            </div>
            <div className={style.text}>개발자로서 일해 온 대부분의 시간동안 다양한 서비스 개발 프로젝트에 참여하면서, 사용자들에게 더 나은 서비스 사용 경험을 제공하기 위해 고민해왔습니다.</div>
          </div>
          <div className={style.career_wrapper}>
            <CareerList items={careers} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career
