import React from 'react';
import c from './Header.module.css';
import Header from './Header';
import { connect } from 'react-redux';
import {loginThunkCreator, logoutThunkCreator} from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.loginThunkCreator();
  } 

  render() {
    return < Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  logged_in: state.login.logged_in,
  login: state.login.login
})

export default connect (mapStateToProps, {loginThunkCreator, logoutThunkCreator}) (HeaderContainer);