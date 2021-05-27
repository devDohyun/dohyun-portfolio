import LayoutDefault from '@/components/Layouts/Default'
import IntroContainer from '@/components/Containers/IntroContainer'
import TechStacks from '@/components/Containers/TechStacks'


const Index = () => {
  return (
    <>
      <LayoutDefault>
        <IntroContainer />
        <TechStacks />
      </LayoutDefault>
    </>
  )
}


export default Index