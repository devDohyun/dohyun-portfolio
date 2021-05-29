import TechStacks from "@/components/TechStacks"

const stacks = [
  {
    name: 'Nuxt',
    level: 90,
    isLearning: false,
    isMain: true
  },
  {
    name: 'Next',
    level: 65,
    isLearning: true,
    isMain: true
  },
  {
    name: 'express',
    level: 40,
    isLearning: false,
    isMain: true
  },
  {
    name: 'ES6',
  },
  {
    name: 'HTML',
  },
  {
    name: 'SCSS',
  },
  {
    name: 'SQL',
  },
  {
    name: 'UI DESIGN',
  }
]
const achievements = [
  {
    type: 'school',
    title: '세명컴퓨터고등학교 졸업',
    start: '2015-03-02',
    end: '2018-02-07'
  },
  {
    type: 'cert',
    title: '정보기기운용기능사',
    start: '2017-07-05'
  },
  {
    type: 'cert',
    title: '정보처리기능사',
    start: '2016-09-28'
  }
]


const TechStacksContainer = (props) => {
  return (
    <TechStacks stacks={stacks} achievements={achievements} />
  )
}


export default TechStacksContainer