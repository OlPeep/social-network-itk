import React, { Suspense } from 'react';
import HeaderContainer from './components/Header/Header-container'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/Profile-container';
//import DialogsContainer from './components/Dialogs/Dialogs-container';
//import UsersContainer from './components/Users/Users-container';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {loginThunkCreator} from './redux/auth-reducer';
import { compose } from 'redux';
import { initializedThunk } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import SuspenceComponent from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/Dialogs-container'));
const UsersContainer = React.lazy(() => import('./components/Users/Users-container'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializedThunk();
  } 

  render() {
    if (!this.props.initialised) {
      return <Preloader />
    }
    return (
      <HashRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs" render={SuspenceComponent(DialogsContainer)} />

            <Route path="/profile/:userid?" render={() => <ProfileContainer store={this.props.store} />} />
            <Route path="/users" render={SuspenceComponent(UsersContainer)} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      </HashRouter>
    )
  }
}
const mapStateToProps = (state) => ({
  initialised: state.initialised.initialized
})

const AppCompose = compose(
  withRouter,
  connect(mapStateToProps, {initializedThunk}))(App);

 const AppWithWrap = () => {
   return <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
      <AppCompose />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>
}

export default AppWithWrap;
