import style from './index.module.scss'

const BusinessCard = ({ name, role, linkItems = [] }) => {
  return (
    <div className={style.business_card}>
      <div className={style.name}>{name}</div>
      <div className={style.role}>{role}</div>
      <div className={style.link_wrapper}>
        {linkItems.map((item) => (
          <div key={item.id} className={style.item}>
            <span className={style.link_name}>{item.name}. </span>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.linkShow || item.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BusinessCard
