import React from 'react';
import c from './Users.module.css';
import peep_photo from '../../assets/images/peep.jpg';
import { NavLink } from 'react-router-dom';
import Paginator from './Paginator';
import User from './User';

const Users = (props) => {

  return <div>
    <Paginator count={props.count} users_on_page={props.users_on_page}
      onPageChange={props.onPageChange} page={props.page} />

    {props.users.map(u => <User user={u} usersInProgress={props.usersInProgress}
        followThunkCreator={props.followThunkCreator} />
    )}
  </div>
}

export default Users;