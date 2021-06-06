import style from './index.module.scss'

const Profile = ({ linkItems = [] }) => {
  return (
    <div className={style.profile}>
      <div className="container">
        <div className={style.title}>
          사용자에게 더 나은 경험을
          <br />
          제공하기 위해 노력합니다.
        </div>
        <div className={style.business_card}>
          <div className={style.name}>안도현</div>
          <div className={style.role}>Front-End engineer</div>
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
      </div>
    </div>
  )
}

export default Profile
