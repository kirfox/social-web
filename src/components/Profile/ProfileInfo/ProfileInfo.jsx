import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }


  return(
    <div>
        {/* <div>
          <img src="http://countervest.com/wp-content/uploads/2020/05/tech-stock-image.jpg"></img>
        </div> */}
        <div className={styles.descriptionBlock}>
          { props.profile.photos.large == null ? 
            <img src="https://ru.wargaming.net/clans/media/clans/emblems/cl_215/425215/emblem_195x195.png"></img> 
            : <img src={props.profile.photos.large}></img>
          }
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

          <div> Имя  <b>{props.profile.fullName}</b> </div>
          <div> Обо мне  <b>{props.profile.aboutMe}</b> </div>
        
          
        </div>
    </div>
  )
}

export default ProfileInfo;