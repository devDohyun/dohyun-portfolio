import Stacks from '@/components/Stacks'

const stacks = [
  {
    name: 'Nuxt',
    level: 90,
    isLearning: false,
    isMain: true,
  },
  {
    name: 'Next',
    level: 65,
    isLearning: true,
    isMain: true,
  },
  {
    name: 'express',
    level: 40,
    isLearning: false,
    isMain: true,
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
  },
]

const StacksContainer = () => {
  return <Stacks stacks={stacks} />
}

export default StacksContainer
