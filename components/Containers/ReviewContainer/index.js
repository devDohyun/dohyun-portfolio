import { useMemo } from 'react'
import Reivew from '@/components/Review'

const reviews = [
  {
    id: 1,
    text: `원활한 커뮤니케이션으로 부서간 협업프로젝트 진행시 많은 도움을 주었던 개발자 입니다.\n자기계발을 게을리하지 않고 끊임없이 성장하는 모습을 보여주며 직장 내 동료들에게 귀감이 되었습니다.`,
    sender: {
      name: '정사원님',
      belong: '(주)자이엔트 콘텐츠기획팀',
    },
  },
  {
    id: 2,
    text: `본래 취미가 자기계발이라고 할 만큼 스스로 성장하고 끊임없이 배워나가는것을 즐기며, 논리정연하고 합리적인 의사 결정을 할 수 있는 팀원입니다. 이러한 부분들은 개발 직군과 잘 맞아  앞으로 성장할 수 밖에 없는 개발자라고 생각합니다. 도현님의 진취적인 모습은 팀원에게도 큰 모티베이션이 되며 개발의 흐름을 긍정적으로 이끌어 갈 수 있는 개발자입니다. 산출물을 만들어내는 것 뿐만 아니라 팀의 성장에 기여할 수 있고, 팀원들에게 긍정적인 영향력을 제공하는 개발자를 찾으신다면 안도현 개발자를 추천합니다!`,
    sender: {
      name: '이사원님',
      belong: '(주)자이엔트 플랫폼사업팀',
    },
  },
  {
    id: 3,
    text: `다람쥐 헌 쳇바퀴 돌고파. 다람쥐 헌 쳇바퀴 돌고파. 다람쥐 헌 쳇바퀴 돌고파. \n다람쥐 헌 쳇바퀴 돌고파. 다람쥐 헌 쳇바퀴 돌고파. \n다람쥐 헌 쳇바퀴 돌고파. `,
    sender: {
      name: '홍길동',
      belong: '(주)서에번쩍',
    },
  },
]

const ReivewContainer = () => {
  const reviewsComputed = useMemo(() => reviews.map((item, idx) => ({ ...item, direction: idx % 2 ? 'right' : 'left' })))
  return <Reivew reviews={reviewsComputed} />
}

export default ReivewContainer
