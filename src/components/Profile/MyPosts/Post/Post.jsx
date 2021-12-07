import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return( 
      <div className={styles.item}>
        <img src="https://ru.wargaming.net/clans/media/clans/emblems/cl_215/425215/emblem_195x195.png" />
          { props.message }
          <span> { props.likesCount } like</span>
      </div>  
      
  )
}

export default Post;