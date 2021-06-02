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
    text: `다람쥐 헌 쳇바퀴 돌고파. 다람쥐 헌 쳇바퀴 돌고파. 다람쥐 헌 쳇바퀴 돌고파. \n다람쥐 헌 쳇바퀴 돌고파. 다람쥐 헌 쳇바퀴 돌고파. \n다람쥐 헌 쳇바퀴 돌고파. `,
    sender: {
      name: '홍길동',
      belong: '동에번쩍(주)',
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
