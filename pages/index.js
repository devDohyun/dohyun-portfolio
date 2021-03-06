import LayoutDefault from '@/components/Layouts/Default'
import IntroContainer from '@/components/Containers/IntroContainer'
import StacksContainer from '@/components/Containers/StacksContainer'
import CareerContainer from '@/components/Containers/CareerContainer'
import ReviewContainer from '@/components/Containers/ReviewContainer'
import ProjectContainer from '@/components/Containers/ProjectContainer'
import ProfileContainer from '@/components/Containers/ProfileContainer'
import { useEffect } from 'react'

const Index = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <>
      <LayoutDefault>
        <IntroContainer />
        <StacksContainer />
        <CareerContainer />
        <ReviewContainer />
        <ProjectContainer />
        <ProfileContainer />
      </LayoutDefault>
    </>
  )
}

export default Index
