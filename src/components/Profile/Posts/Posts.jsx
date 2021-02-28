import React from 'react';
import Post from './Post/Post';
import c from './Posts.module.css';
import { reduxForm, Field } from 'redux-form'
import {maxLength, requiredField} from '../../common/utils/validators/validators';
import {TextArea} from '../../common/utils/validators/formControl/formControl';

const Posts = React.memo(props => {
  let PostElements = props.PostElements
  .map( (m) => <Post message={m.message} id={m.likes} />) 

  //let newPost = React.createRef()

  /*let addPost = () => {
    props.addPost();
  } 

  let newPostText = () => {
    let newP = newPost.current.value;
    props.updateNewPost(newP);
  }*/

  const onSubmit = (values) => {
    props.addPost(values.postText);
  }

  return (
    <div>
      <h3>My Posts</h3>
      <ReduxPostForm {...props} onSubmit={onSubmit}/>
      <div className={c.postsBlock}>
      Posts
      {PostElements}
      </div>
    </div>
  )
})

const maxLengthCreator = maxLength(10)

const PostForm = (props) => {
  
  return (
    <div>
    <div>New Post</div>
    <form onSubmit={props.handleSubmit}>
    <Field component={TextArea} name={'postText'} validate={[requiredField, maxLengthCreator]}/>
    <button>Add</button>
    </form>
  </div>
  )
}

const ReduxPostForm = reduxForm({
  form: "post"
})(PostForm)

export default Posts;