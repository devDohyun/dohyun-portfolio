import React, { useMemo } from 'react'
import Icon from '@mdi/react'
import { mdiCloseCircle, mdiOpenInNew } from '@mdi/js'
import style from './index.module.scss'
import StackItem from '@/components/Stacks/Item'

const ProjectDetail = ({ onClose, title, content, start, end, url, stacks, belong }) => {
  if (!title || !content || !start || !belong) return <div>불러오는 데 오류가 발생하였습니다.</div>

  const dateString = useMemo(() => {
    let result = ''

    result += `${start.slice(0, 7)} ~ `

    if (end) result += end.slice(0, 7)
    else result += '현재'

    result = result.replace(/-/g, '/')

    return result
  }, [start])

  return (
    <div className={style.project_detail}>
      <div className={style.close_wrapper}>
        <button type="button" onClick={() => onClose()}>
          <Icon path={mdiCloseCircle} size="1em"></Icon>
        </button>
      </div>
      <div className="container">
        <div className={style.title}>{title}</div>
        <div className={style.desc}>
          <div>{belong}</div>
          <div>{dateString}</div>
          {url && (
            <a target="_blank" href={url} className={style.link}>
              Link
              <Icon path={mdiOpenInNew} size="1em" />
            </a>
          )}
        </div>
        <div className={style.content}>{content}</div>
        <div className={style.stacks_wrapper}>
          {stacks.map((item) => (
            <StackItem key={`${item.id}-${item}`} name={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

ProjectDetail.defaultProps = {
  onClose: () => {},
  stacks: [],
}

export default React.memo(ProjectDetail)
