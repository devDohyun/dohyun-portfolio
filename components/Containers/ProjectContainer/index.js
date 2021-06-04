import Project from '@/components/Project'

const projects = [
  {
    id: 9,
    title: '바움인테리어',
    content: `개인적으로 진행한 외주 프로젝트입니다. 디자인 시안에 맞도록 풀스택 개발을 진행하였습니다.\n\n처음엔 SSR을 위해 Nuxt와 express API 서버로 개발을 진행하였으나, 현재 이용중인 서버 상 node 앱 구동이 불가능하였습니다.\n이에대한 해결책으로 Nuxt에서 제공하는 nuxt generate를 활용하였으며, 덕분에 간단한 수정 후 이슈를 해결할 수 있었습니다.`,
    start: '2021-04-15',
    url: `https://bauminterior.cafe24.com`,
    stacks: ['Nuxt', 'SCSS', 'php'],
    belong: '외주 프로젝트',
  },
  {
    id: 8,
    title: 'Sloker Works',
    content: `전통주 데이터 소싱 및 정보공시 서비스입니다.\n풀스택 개발과 UI디자인을 담당하였습니다.\n\n짧은 기한 내 완수를 위해 Vuetify의 UI컴포넌트를 적극적으로 활용하여 개발시간을 단축할 수 있었습니다.`,
    start: '2021-01-30',
    url: `https://sloker.work`,
    stacks: ['Nuxt', 'SCSS', 'express'],
    belong: '(주)자이엔트',
  },
  {
    id: 7,
    title: 'Youtube Music 클론 코딩',
    content: `개인적으로 진행한 유튜브 뮤직 클론코딩 프로젝트입니다.\n스타일 작성 능력을 복습하고자 UI컴포넌트 없이 직접 코드를 작성하여 개발하였습니다. 현재는 프론트엔드만 배포중인 상태입니다.`,
    start: '2020-11-30',
    url: `http://music.dohyunahn.me`,
    gitUrl: `https://github.com/devdohyun/clone-youtube-music`,
    stacks: ['Nuxt', 'SCSS', 'Google Cloud Platform'],
    belong: '개인 프로젝트',
    main: true,
  },
  {
    id: 6,
    title: '씽씽패스',
    content: `회사에서 서비스하였던 전자출입명부 서비스입니다.\n웹 파트 사장님용 관리페이지의 풀스택 개발에 참여하였습니다.\n\n서비스의 주요 수입원인 사장님께 최대한 좋은 사용경험을 제공하고자, 관리페이지의 UI와 퍼포먼스에 대한 고민을 많이 하였습니다.\n웹 파트 내 유료고객 청구서 발행 및 메일 안내, 포인트 충전, CRM 및 유료 플랜 관련 기능을 전담하여 개발하였습니다.`,
    start: '2020-05-16',
    url: `https://sspass.io`,
    stacks: ['Nuxt', 'SCSS', 'Google Cloud Platform'],
    belong: '(주)자이엔트',
  },
  {
    id: 5,
    title: '삶기술학교',
    content: `회사에서 운영하는 오프라인 서비스를 위한 커뮤니티형 웹 서비스입니다.\n신규기능 개발과 UI 디자인 개선 및 최적화 작업을 수행하고 있습니다.\n회사에서 처음 Vue를 활용한 프로젝트입니다.\n프로젝트의 아키텍쳐 등에서 이전에 얻은 경험을 녹일 수 있었습니다.`,
    start: '2019-08-16',
    url: `https://hansan.slowtech.ac`,
    stacks: ['Nuxt', 'SCSS', 'Google Cloud Platform'],
    belong: '(주)자이엔트',
  },
  {
    id: 4,
    title: '지벤트',
    content: `(주)자이엔트 입사 후 처음 투입된 이벤트 개설 플랫폼입니다.\n안정화 작업과 추가기능 개발, UI 디자인 개선에 참여하였습니다.\n사용자가 이벤트를 개설하고 참여하는 데 있어 편리함을 제공하기 위해 노력하였습니다.`,
    start: '2019-05-01',
    url: `http://gvntapp.com`,
    stacks: ['Javascript', 'CSS', 'php'],
    belong: '(주)자이엔트',
  },
  {
    id: 3,
    title: '르완다 Instant Messenger',
    content: `비앤비컴퍼니(주)에서 진행한 ERP 내 채팅 서비스입니다.\n\n프론트엔드 개발을 전담하였으며, 서버 개발자분과 WebRTC 및 Socket 통신 연동 작업을 진행하였습니다.\n메인 API 서버와 클라이언트가 통신하는 과정에서 인증토큰을 노출하지 않기 위해 Proxy서버가 필요하였었는데,\n간단한 express 서버를 통해 해결할 수 있었습니다.\n프론트엔드 개발 완수 후엔 응용프로그램 형태로의 요청이 와서, Electron을 통해 webview 앱을 제작하기도 하였습니다.`,
    start: '2019-02-01',
    stacks: ['Vue', 'CSS', 'electron', 'express'],
    belong: '비앤비컴퍼니(주)',
  },
  {
    id: 2,
    title: '인프라웨어 온핏 2.0',
    content: `(주)폴라리스오피스에서 (주)어플랩의 중개를 통해 상주 프리랜서로서 참여한 웹뷰 환경에서 동작하는 헬스케어 플랫폼입니다.\n회원권, 수업일정, 운동일지, 운동가이드, My프로필 메뉴의 프론트엔드 개발을 전담하였으며, 웹뷰 환경에서 동작하는만큼 iOS, 안드로이드 앱 개발자와 함께 브릿지 연동 작업 또한 중점적으로 진행하였습니다.\n약 4개월간 (주)인프라웨어의 동료들과 함께 출퇴근을 하며, 많은 개발 지식을 습득할 수 있었습니다.`,
    start: '2018-10-01',
    url: `https://play.google.com/store/apps/details?id=com.onfit.mobile.android&hl=ko&gl=US`,
    stacks: ['Vue', 'CSS'],
    belong: '(주)폴라리스오피스',
  },
  {
    id: 1,
    title: '헤이도매',
    content: `저의 첫직장인 (주)웹비즈에서 에이전시로 개발한 도매 플랫폼입니다.\n웹뷰 환경에서 동작하는 환경이면서도, 네이티브 기능을 여럿 포함하고 있어서 앱 개발자분과 꾸준히 소통하며 개발을 진행하였습니다.\n클라이언트가 동대문 도매 사장님이었는데, 니즈에 맞는 기능 개발을 위해 함께 고민했던 것이 추억에 남는듯 싶습니다.\n플랫폼 개발의 재미를 느끼게된 프로젝트가 아닐까싶습니다.`,
    start: '2018-03-01',
    url: `http://heydome.co.kr/heydome_landing/?lang=ko`,
    stacks: ['JQuery', 'CSS', 'PHP'],
    belong: '(주)웹비즈',
  },
]

const ProjectContainer = () => {
  return <Project projects={projects} />
}

export default ProjectContainer
