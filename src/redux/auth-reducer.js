import { stopSubmit } from 'redux-form';
import {LoginAPI} from '../api/api';

let LOGIN = "itk/app/LOGIN";

let initialState = {
    id: null,
    email: null,
    login: null,
    logged_in: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const loginUser = (id, email, login, logged_in) => {
    return { type: LOGIN, data: {id, email, login, logged_in} };
  }

export const loginThunkCreator = () => async (dispatch) => {
    let response = await LoginAPI.login()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(loginUser(id, email, login, true));
    }
    }

export const loginingThunkCreator = (email, password, rememberMe = false) => async (dispatch) => {
        let response = await LoginAPI.loginning(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(loginThunkCreator())
        }
        else {
            let message = response.data.messages.length > 0 ? 
            response.data.messages[0] : "some error"
            dispatch(stopSubmit('login', {_error: message}))
        }
    }

export const logoutThunkCreator = () => async (dispatch) => {
    let response = await LoginAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(loginUser(null, null, null, false))
    }
}

export default authReducer;