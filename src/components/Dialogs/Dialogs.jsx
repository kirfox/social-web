import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);
debugger
const Dialogs = (props) => {

  let state = props.dialogsPage; 
  let dialogsElements = state.dialogs.map( d => <DialogItem id={d.id} key={d.id} name={d.name} /> )
  let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id}/>)
  let newMessageText = state.newMessageText;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText)
  }

 
  return(
    
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements} 
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>  
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field component={Textarea} validate={[required,maxLength50]} name="newMessageText" placeHolder="Enter your message"/>
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
    </form>
  )
}


const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;