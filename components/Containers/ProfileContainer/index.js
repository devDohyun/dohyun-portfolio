import Profile from '@/components/Profile'

const profileInfo = {
  name: '안도현',
  role: 'Front-End engineer',
  linkItems: [
    {
      id: 3,
      name: 'Mail',
      link: 'mailto:es7@kakao.com',
      linkShow: 'es7@kakao.com',
    },
    {
      id: 4,
      name: 'Mobile',
      link: 'tel:01023646470',
      linkShow: '010-2364-6470',
    },
    {
      id: 1,
      name: 'github',
      link: 'https://github.com/devdohyun',
      linkShow: 'github.com/devdohyun',
    },
    {
      id: 2,
      name: 'blog',
      link: 'https://dev-dohyun.tistory.com',
      linkShow: 'dev-dohyun.tistory.com',
    },
  ],
}

const ProfileContainer = () => {
  return <Profile profileInfo={profileInfo} />
}

export default ProfileContainer
