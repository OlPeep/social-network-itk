import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {profileThunkCreator, getStatusThunk, setStatusThunk, savePhoto} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileCont extends React.Component {

  updateProfile() {
    let userId = this.props.match.params.userid;
    if (!userId) {
      userId = this.props.id
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.profileThunkCreator(userId);
    this.props.getStatusThunk(userId);
  }

  componentDidMount() {
    this.updateProfile();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userid != prevProps.match.params.userid) {
      this.updateProfile();
    }
  }

  render() {
    return (
      <div>
      <Profile {...this.props} 
      profile={this.props.profile} 
      isOwner={!this.props.match.params.userid}
      savePhoto={this.props.savePhoto}
      status={this.props.status}
      setStatusThunk={this.props.setStatusThunk}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.login.id
  }
}

export default compose(
  connect( mapStateToProps, { profileThunkCreator, getStatusThunk, setStatusThunk, savePhoto } ),
  withRouter,
  withAuthRedirect
)(ProfileCont)