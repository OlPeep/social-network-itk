import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/Posts-container';


const Profile = (props) => {

    return (
      <div>
      <ProfileInfo profile={props.profile} 
      isOwner={props.isOwner}
      status={props.status} 
      setStatusThunk={props.setStatusThunk}
      savePhoto={props.savePhoto}/>
      <PostsContainer store={props.store} />
      </div>
    )
}

export default Profile;