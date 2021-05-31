import Reivew from '@/components/Review'


const reviews = [
  {
    id: 1,
    text: `다람쥐 헌 쳇바퀴 돌고파. 다람쥐 헌 쳇바퀴 돌고파. 다람쥐 헌 쳇바퀴 돌고파. \n다람쥐 헌 쳇바퀴 돌고파. 다람쥐 헌 쳇바퀴 돌고파. \n다람쥐 헌 쳇바퀴 돌고파. `,
    sender: {
      name: '홍길동',
      belong: '동에번쩍(주)',
    }
  },
  {
    id: 2,
    text: `다람쥐 헌 쳇바퀴 돌고파. 다람쥐 헌 쳇바퀴 돌고파. 다람쥐 헌 쳇바퀴 돌고파. \n다람쥐 헌 쳇바퀴 돌고파. 다람쥐 헌 쳇바퀴 돌고파. \n다람쥐 헌 쳇바퀴 돌고파. `,
    sender: {
      name: '홍길동',
      belong: '(주)서에번쩍',
    }
  },
]

const ReivewContainer = () => {
  return (
    <Reivew reviews={reviews} />
  )
}


export default ReivewContainer