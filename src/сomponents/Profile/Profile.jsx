import styles from './Profile.module.css'
export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={styles.account}>
  <div >
    <img
                    src={image}
                    width={48}
      alt="User avatar"
    />
    <p>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={styles.info}>
    <li className={styles.stat}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={styles.stat}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={styles.stat}>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>

    )
}