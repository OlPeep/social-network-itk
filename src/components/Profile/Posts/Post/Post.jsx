import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
  return (
    <div className={c.item}>
      <img alt="ava"
      src="https://blog.ferplast.com/wp-content/uploads/2019/07/owning-a-white-cat-5b1b91a318ba9-1024x683.jpg"></img>
      <span>{props.message}</span><br></br>
      <span>{props.likes}</span>
    </div>
  )
}

export default Post;