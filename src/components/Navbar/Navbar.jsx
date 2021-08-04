import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = (props) => {

  let friendItem = props.state.friends.map( f => {
    return(
      <li>
        <div className={styles.friendItemImg}>
          <img src={f.img}></img>
          <div>{f.name}</div> 
        </div>  
      </li>
    )
  })

  return(
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to="/profile" activeClassName={styles.active}> Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs" activeClassName={styles.active}> Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" activeClassName={styles.active}> News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" activeClassName={styles.active}> Music</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings" activeClassName={styles.active}> Settings</NavLink>
      </div>
      <div className={styles.item}>
        <span> Friends</span>
        <ul className={styles.friendList}>
          {friendItem}
        </ul>
      </div>
    </nav>
  )
}  
  
export default Navbar;
  
 