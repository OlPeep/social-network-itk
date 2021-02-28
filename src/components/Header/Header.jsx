import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Header.module.css';

const Header = (props) => {
    return (
        <header className={c.header}>
        <img src="https://yt3.ggpht.com/ytc/AAUvwnigRgJwV5rQ-LPZbamLejYINscuX9fcz5a7cuC9NQ=s900-c-k-c0x00ffffff-no-rj"
        alt="cat"></img>

        <div className={c.isLoggedIn}>
          { props.logged_in ? <div>{props.login} - 
          <button onClick={props.logoutThunkCreator}>Log Out</button></div> :
          <NavLink to={'/login'}>Login</NavLink> }
        </div>
      </header>
    )
}

export default Header;