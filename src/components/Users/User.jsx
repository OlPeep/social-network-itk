import React from 'react';
import c from './Users.module.css';
import peep_photo from '../../assets/images/peep.jpg';
import { NavLink } from 'react-router-dom';

const User = (props) => {
  return <div>
      <div key={props.user.id} >
        <NavLink to={"/profile/" + props.user.id} >
          <div className={c.userimg}>
            <img src={props.user.photos.small == null ? peep_photo : props.user.photos.small}></img>
          </div>
        </NavLink>

        <div>{props.user.name} {props.user.status}</div>
        <div>{props.user.followed ?

          <button disabled={props.usersInProgress.some(id => id == props.user.id)}
            onClick={() => { props.followThunkCreator(false, props.user.id) } }>Unfollow</button> :

          <button disabled={props.usersInProgress.some(id => id == props.user.id)}
            onClick={() => { props.followThunkCreator(true, props.user.id) } }>Follow</button>}</div>
      </div>
  </div>
}

export default User;