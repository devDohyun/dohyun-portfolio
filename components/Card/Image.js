import cx from 'classnames'
import style from './Image.module.scss'


const ImageCard = ({ src, className = [], ratio = 1 }) => {
  return (
    <div 
      className={cx(style.image_card, ...className)}
      style={{ backgroundImage: `url(${src})`, paddingBottom: `${(ratio * 100)}%` }}
    ></div>
  )
}


export default ImageCard