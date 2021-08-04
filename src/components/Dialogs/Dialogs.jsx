import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map( d => <DialogItem id={d.id} name={d.name} /> )
  let messagesElements = props.state.messages.map( m => <Message message={m.message}/>)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return(
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements} 
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
      <div>
        <div>
          <textarea ref={ newPostElement }></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;