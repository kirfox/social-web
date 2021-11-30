import React from "react";
import styles from "./users.module.css"
import userPhoto from "../../assets/images/user-logo.png";
import { NavLink } from "react-router-dom";

let User = ({user, currentPage,onPageChanged,totalUsersCount, pageSize, ...props}) => {

  return (
    <div >
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.usersPhoto}/>   
          </NavLink>
          
        </div>
        <div>
          { user.followed ? 
            <button 
              disabled={props.followingInProgress.some(id => id === user.id)} 
              onClick={() => { props.unfollow(user.id) }}>Unfollow
            </button> 
          : <button 
              disabled={props.followingInProgress.some(id => id === user.id)} 
              onClick={ () => { props.follow(user.id) }}>Follow
            </button>
          }
          
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>

    </div>      
  )
}

export default User;