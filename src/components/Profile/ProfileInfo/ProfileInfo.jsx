import React from 'react';
import c from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import peep_photo from '../../../assets/images/peep.jpg';
import ProfileStatusHooks from './ProfileStatusHooks';

const ProfileInfo = (props) => {

  const uploadPhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
    <div className={c.profile}>
      <div>
        <img src="https://qtxasset.com/styles/breakpoint_sm_default_480px_w/s3/travelagentcentral/1531931320/ZagrebCroatiaDreamer4787iStockGettyImagesPlusGettyImages.jpg/ZagrebCroatiaDreamer4787iStockGettyImagesPlusGettyImages.jpg?rrsTko5z.v6vT2IMzFUSB3jx3GL7yg06&itok=2I70zwtl"
          alt="Chroatia"></img>
      </div>
    </div>
      <div className={c.photo} >
        <img className={c.photo} src={ props.profile.photos.large == null ? peep_photo : props.profile.photos.large}></img>
      </div>
      {props.isOwner && <div><input onChange={uploadPhoto} type={'file'}></input></div>}
      <div className={c.description}>
      <div>
      <p>{props.profile.fullName}</p>
      <ProfileStatusHooks status={props.status} setStatusThunk={props.setStatusThunk}/>
      <p>{props.profile.lookingForAJobDescription}</p>
      <h5>Contacts</h5>
      <p>{props.profile.contacts.github}</p>
      <p>{props.profile.contacts.twitter}</p>
      <p>{props.profile.contacts.youtube}</p>
      </div>
      </div>
    </div>
  )
}

export default ProfileInfo;