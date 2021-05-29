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
    level: 50,
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
const workspaces = []


const TechStacksContainer = (props) => {
  return (
    <TechStacks stacks={stacks} workspaces={workspaces} />
  )
}


export default TechStacksContainer