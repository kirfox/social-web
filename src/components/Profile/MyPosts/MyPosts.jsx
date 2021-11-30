import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

  let postsElements = props.posts.map( p =>  <Post message={p.message} likesCount={p.likesCount}/> )
  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return( 
    <div className={styles.postsBlock}>
        <h3>My posts</h3>
      <AddPostFormRedux onSubmit={onAddPost}/>
      <div className={styles.posts}>
        {postsElements}
      </div>
      
    </div>
  )
}

const AddPostForm = (props) => {
  
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field component={Textarea} name="newPostText" validate={[required, maxLength10]} />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({form: "ProfileAddPostForm"})(AddPostForm);

export default MyPosts;