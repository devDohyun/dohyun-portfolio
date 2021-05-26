import Intro from '@/components/Intro'
import CodeItem from '@/components/CodeItem'


const IntroContainer = () => {
  const codeItemTexts = [
    `<div classNames={style.nextJS}>\n\t{text}\n</div>`,
    `<template #content="{ text }">\n\t{{ text }}의 Nuxt JS App\n</template>`,
    `const express = require('express')\nconst router = express.Router()`
  ]
  
  
  return (
    <Intro
      codeItems={
        codeItemTexts.map((text) => <CodeItem key={text} text={text} />)
      }
    ></Intro>
  )
}


export default IntroContainer