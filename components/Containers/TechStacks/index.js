import TechStacks from "@/components/TechStacks"

const stacks = [
  {
    name: 'Nuxt(vue)',
    level: 90,
    isLearning: false,
    isMain: true
  },
  {
    name: 'Next(react)',
    level: 50,
    isLearning: true,
    isMain: true
  },
  {
    name: 'express(RESTFUL API)',
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


const TechStacksContainer = (props) => {
  return (
    <TechStacks stacks={stacks} />
  )
}


export default TechStacksContainer