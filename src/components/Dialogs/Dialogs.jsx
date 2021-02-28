import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './MessageItem/MessageItem';
import { reduxForm, Field } from 'redux-form'
import { Redirect } from 'react-router-dom';
import {TextArea} from '../common/utils/validators/formControl/formControl';
import {maxLength, requiredField} from '../common/utils/validators/validators';

const Dialogs = (props) => {

  let DialogElements = props.DailogList
  .map( (dialog) => <DialogItem name={dialog.name} id={dialog.id} />)

  let MessageElements = props.MessagesList
  .map ( (m) => <Message text={m.text} />)

  /*let addMes = () => {
    props.addMesActionCreator();
  }
  
  let newMesText = (e) => {
    let newP = e.target.value;
    props.newMesTextActionCreator(newP);
  }*/

  const onSubmit = (values) => {
    props.addMesActionCreator(values.messageText);
  }

  return (
    <div className={c.dialogs}>
      <div className={c.dialigsItems}>
        {DialogElements}
      </div>
      <div className={c.messages}>
        {MessageElements}
      </div>
      <ReduxDialogForm {...props} onSubmit={onSubmit}/>
    </div>
  )
}

const maxLengthCreator = maxLength(50);

const DialogForm = (props) => {
  return (
    <div>New Message
    <form onSubmit={props.handleSubmit}>
    <Field component={TextArea} name={'messageText'} validate={[requiredField, maxLengthCreator]}/>
    <button>Add</button>
    </form>
  </div>
  )
}

const ReduxDialogForm = reduxForm({
  form: "message"
})(DialogForm)

export default Dialogs;