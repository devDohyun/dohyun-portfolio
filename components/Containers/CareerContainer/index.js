import Career from '@/components/Career'

const careers = [
  {
    id: 4,
    name: '(주)자이엔트',
    start: '2019-05-01',
    position: '플랫폼사업팀 사원',
    description: '산업기능요원에 편입하여 재직중입니다. 풀스택 개발을 담당하고 있으며, 서비스의 기획부터 디자인, 실제 개발까지의 프로세스에 참여하고 있습니다.',
  },
  {
    id: 3,
    name: '비앤비컴퍼니(주)',
    start: '2019-02-01',
    end: '2019-04-30',
    position: '프리랜서',
    description: '(주)폴라리스오피스에서의 인연을 바탕으로 병역특례 기업 입사 전까지 함께 하기로 하여, 크고작은 웹에이전시 프로젝트에 참여하였습니다.',
  },
  {
    id: 2,
    name: '(주)폴라리스오피스',
    start: '2018-10-01',
    end: '2019-01-31',
    position: '프리랜서',
    description: '첫 직장을 퇴사하고나서 공부한 기술을 토대로 20명 가량의 기획자, 디자이너, 개발자들과 한 팀이 되어 다양한 방면으로 협업하는 경험을 가질 수 있었습니다.',
  },
  {
    id: 1,
    name: '(주)웹비즈',
    start: '2017-11-01',
    end: '2018-07-31',
    position: '개발팀 사원',
    description: '웹에이전시 업무를 맡으며 다양한 서비스를 개발해볼 수 있었습니다. 조금 더 긴 호흡으로 좋은 코드를 작성해보고싶다는 생각에 웹 개발 공부에 전념하기 위해 퇴사를 하게 되었습니다.',
  },
]
const CareerContainer = () => {
  return <Career careers={careers}></Career>
}

export default CareerContainer
