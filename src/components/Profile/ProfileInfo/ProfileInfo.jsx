import styles from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return(
    <div>
        <div>
          <img src="http://countervest.com/wp-content/uploads/2020/05/tech-stock-image.jpg"></img>
        </div>
        <div className={styles.descriptionBlock}>
          <img src="https://ru.wargaming.net/clans/media/clans/emblems/cl_215/425215/emblem_195x195.png"></img>
        </div>
    </div>
  )
}

export default ProfileInfo;