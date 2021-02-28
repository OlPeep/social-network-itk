import {ProfileAPI} from '../api/api';

let ADD_POST = "itk/app/ADD-POST";
let SET_PROFILE = "itk/app/SET_PROFILE";
let SET_STATUS = "itk/app/SET_STATUS";
let DELETE_POST = "itk/app/DELETE_POST";
let SAVE_PHOTO = "itk/app/SAVE_PHOTO";

let initialState = {
    PostList: [
        { message: "Hi hi", likes: 10, id: 1 },
        { message: "Ho ho", likes: 15, id: 2 },
        { message: "Yo", likes: 15, id: 3 },
        { message: "Россия будет свободной!", likes: 1500, id: 4 },
        { message: "FREEDOM!", likes: 3000, id: 5 }
    ],
    profile: null,
    status: "Add Status"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: action.text, 
                likes: 0 
            }
            return {
                ...state,
                PostList: [...state.PostList, newPost],
            }
        case DELETE_POST:
            return {
                ...state,
                PostList: state.PostList.map(p => p.id != action.id)
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile 
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => {
    return { type: ADD_POST, text };
  }
export const setProfile = (profile) => {
    return { type: SET_PROFILE, profile };
}
export const setStatus = (status) => {
    return { type: SET_STATUS, status } 
}
export const deletingPostAC = (id) => {
    return {type: DELETE_POST, id}
}
export const savePhotoAC = (photos) => {
    return {type: SAVE_PHOTO, photos}
}

export const profileThunkCreator = (id) => {
    return (dispatch) => {
        ProfileAPI.profile(id).then(response => {
          dispatch(setProfile(response));
        })
    }
}

export const getStatusThunk = (id) => async (dispatch) => {
        let response = await ProfileAPI.getStatus(id);
        dispatch(setStatus(response.data))
    }

export const setStatusThunk = (status) => async (dispatch) => {
        let response = await ProfileAPI.setStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }  
    }
export const savePhoto = (photos) => async (dispatch) => {
    let response = await ProfileAPI.setPhoto(photos);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoAC(response.data.data.photos));
    }
}

export default profileReducer;