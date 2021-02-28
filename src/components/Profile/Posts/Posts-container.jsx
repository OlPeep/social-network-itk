import React from 'react';
import { connect } from 'react-redux';
import {addPostActionCreator} from '../../../redux/profile-reducer';
import Posts from './Posts';

const mapStateToProps = (state) => {
  return {
    PostElements: state.profilePage.PostList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text))
    }
  }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;