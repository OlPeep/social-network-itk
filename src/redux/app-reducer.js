import { stopSubmit } from 'redux-form';
import {LoginAPI} from '../api/api';
import {loginThunkCreator} from './auth-reducer';

let INITIALIZED = 'itk/app/INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initialized = () => {
    return { type: INITIALIZED };
  }

export const initializedThunk = () => {
    return (dispatch) => {
        let promise = dispatch(loginThunkCreator());
        Promise.all([promise]).then(dispatch(initialized()));
        }
    }

export default appReducer;