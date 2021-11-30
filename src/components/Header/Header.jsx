import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {

  return(
    <header className={styles.header}>
      <img src="https://yt3.ggpht.com/ytc/AAUvwnjFqg_NjHqYp7rasnKp0GNX2j64AijZFfkyEOsZFw=s900-c-k-c0x00ffffff-no-rj"></img>

      <div className={styles.loginBlock}> 
        { props.isAuth 
          ? <div> { props.login } - <button onClick={props.logout}>Log out</button>  </div>  
          : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  )
}

export default Header;