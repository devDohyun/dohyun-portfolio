import LayoutDefault from '@/components/Layouts/Default'
import IntroContainer from '@/components/Containers/IntroContainer'
import StacksContainer from '@/components/Containers/StacksContainer'
import CareerContainer from '@/components/Containers/CareerContainer'


const Index = () => {
  return (
    <>
      <LayoutDefault>
        <IntroContainer />
        <StacksContainer />
        <CareerContainer />
      </LayoutDefault>
    </>
  )
}


export default Index