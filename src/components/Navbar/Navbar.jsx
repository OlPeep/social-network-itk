import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css';

const Navbar = () => {
    return (
      <nav className={c.nav}>
        <div className={c.liitem}>
          <NavLink to="/profile" activeClassName={c.activeLink}>Profile</NavLink>
        </div>
        <div className={c.liitem}>
          <NavLink to="/dialogs" activeClassName={c.activeLink}>Messages</NavLink>
        </div>
        <div className={c.liitem}>
          <NavLink to="/users" activeClassName={c.activeLink}>Users</NavLink>
        </div>
        <div className={c.liitem}>
          News
          </div>
        <div className={c.liitem}>
          Music
        </div>
      </nav>
    )
}

export default Navbar;