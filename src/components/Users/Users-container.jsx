import React from 'react';
import {setUsersInProgress, getUsersThunkCreator, 
  followThunkCreator} from '../../redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import {reselectorAllUsers, getUsersCount, getPage, getUsersOnPage,
  getIsFetching, getUsersInProgress} from '../../redux/users-selectors';


class UsersAPI extends React.Component {
  componentDidMount() {
    const {page, users_on_page} = this.props;
    //this.props.getUsersThunkCreator(this.props.page, this.props.users_on_page);
    this.props.getUsersThunkCreator(page, users_on_page);
  }

  onPageChange = (p) => {
    const {users_on_page} = this.props;
    this.props.getUsersThunkCreator(p, users_on_page);
  }

  render() {
    return <div>
    { this.props.isFetching ? <Preloader /> : null }
    <Users
    onPageChange={this.onPageChange}
    page={this.props.page}
    users={this.props.users}
    count={this.props.count}
    users_on_page={this.props.users_on_page} 
    setUsersInProgress={this.props.setUsersInProgress}
    followThunkCreator={this.props.followThunkCreator}
    usersInProgress={this.props.usersInProgress}
    />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    users: reselectorAllUsers(state),
    count: getUsersCount(state),
    page: getPage(state),
    users_on_page: getUsersOnPage(state),
    isFetching: getIsFetching(state),
    usersInProgress: getUsersInProgress(state),
    //setUsersInProgress: state.usersPage.setUsersInProgress,
  }
}

/*const mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followAC(id))
    },
    unfollow: (id) => {
      dispatch(unfollowAC(id))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    getCount: (count) => {
      dispatch(getCountAC(count))
    },
    setPageNumber: (page) => {
      dispatch(setPageNumberAC(page))
    },
    setIsFetching: (bool) => {
      dispatch(isFetchingAC(bool))
    }
  }
}*/

const UsersContainer = connect(mapStateToProps, 
  { setUsersInProgress, getUsersThunkCreator, followThunkCreator} )(UsersAPI);

export default UsersContainer;