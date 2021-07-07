import Head from 'next/head'

const Default = (props) => {
  return (
    <>
      <Head>
        <title>개발자 안도현 포트폴리오</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="개발자 안도현의 포트폴리오입니다." />
        <meta property="og:image" content="https://kr.object.ncloudstorage.com/dev-dohyun/dohyun-portfolio/my-memoji.png" />
      </Head>
      {props.children}
    </>
  )
}

export default Default
