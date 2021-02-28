import React from 'react';
import c from './Dialogs.module.css';
import {addMesActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    DailogList: state.dialogsPage.DailogList,
    MessagesList: state.dialogsPage.MessagesList,
    newMes: state.dialogsPage.newMesText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMesActionCreator: (text) => {
      dispatch(addMesActionCreator(text))
    },
    /*newMesTextActionCreator: (newP) => {
      dispatch(newMesTextActionCreator(newP))*/
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)