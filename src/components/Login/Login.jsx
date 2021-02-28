import React from 'react';
import { reduxForm, Field } from 'redux-form'
import {Input} from '../common/utils/validators/formControl/formControl';
import {requiredField} from '../common/utils/validators/validators';
import {loginingThunkCreator} from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import c from '../common/utils/validators/formControl/formControl.module.css';
import {createField} from '../common/utils/validators/formControl/formControl';

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginingThunkCreator(formData.email, formData.password, formData.remember, true);
    }

    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    return <div>
    <h1>Login</h1>
    <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, 'email', 'text', [requiredField], 'email')}
            {createField(Input, 'password', 'password', [requiredField], 'password', )}

            {createField(Input, 'remember', 'checkbox', [], null, 'remember me')}<br></br>

            {error && <div><span className={c.errorlogin}>{error}</span><br></br></div>}
            <button>Login</button>
        </form>
    )
}

const ReduxLoginForm = reduxForm({
    form: "login"
})(LoginForm)

const mapStateToProps = (state) => {
    return {
        isAuth: state.login.logged_in
    }
}

export default connect(mapStateToProps, {loginingThunkCreator} )(Login);