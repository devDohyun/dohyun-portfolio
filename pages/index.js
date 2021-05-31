import LayoutDefault from '@/components/Layouts/Default'
import IntroContainer from '@/components/Containers/IntroContainer'
import StacksContainer from '@/components/Containers/StacksContainer'
import CareerContainer from '@/components/Containers/CareerContainer'
import ReviewContainer from '@/components/Containers/ReviewContainer'


const Index = () => {
  return (
    <>
      <LayoutDefault>
        <IntroContainer />
        <StacksContainer />
        <CareerContainer />
        <ReviewContainer />
      </LayoutDefault>
    </>
  )
}


export default Index