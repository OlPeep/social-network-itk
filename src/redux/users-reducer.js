import {GetUsersAPI} from '../api/api';
import {followUnfollowHelper} from '../components/common/utils/helpers';

let FOLLOW = "itk/app/FOLLOW";
let UNFOLLOW = "itk/app/UNFOLLOW";
let GET_USERS = "itk/app/GET_USERS";
let GET_COUNT = "itk/app/GET_COUNT";
let SET_PAGE_NUMBER = "itk/app/SET_PAGE_NUMBER";
let TOGGLE_IS_FETCHING = "itk/app/TOGGLE_IS_FETCHING";
let CHANGE_USERS_IN_PROGRESS = "itk/app/CHANGE_USERS_IN_PROGRESS";

let initialState = {
    users: [],
    count: 10,
    page: 1,
    users_on_page: 5,
    isFetching: false,
    usersInProgress: [],
    isInProgress: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return followUnfollowHelper(state, action, true);
            /*return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.user_id) {
                        return {...u, followed: true }
                    }
                    return u;
                })
            }*/
        case UNFOLLOW:
            return followUnfollowHelper(state, action, false);
            /*return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.user_id) {
                        return {...u, followed: false }
                    }
                    return u;
                })
            }*/
        case GET_USERS:
            return {
                ...state,
                users: action.users
            }
        case GET_COUNT:
            return {
                ...state,
                count: action.count
            }
        case SET_PAGE_NUMBER:
            return {
                ...state,
                page: action.page
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case CHANGE_USERS_IN_PROGRESS:
            if (action.inProgress == true) {
                return {
                    ...state, 
                    usersInProgress: [...state.usersInProgress, action.id],
                    isInProgress: true
                }
            }
            else {
                return {
                    ...state, 
                    usersInProgress: state.usersInProgress.filter(id => id != action.id),
                    isInProgress: false
                }
            }
        default:
            return state;
    }
}

export const follow = (user_id) => {
    return { type: FOLLOW, user_id };
  }
export const unfollow = (user_id) => {
    return { type: UNFOLLOW, user_id };
  }
export const setUsers = (users) => {
    return { type: GET_USERS, users}
}
export const getCount = (count) => {
    return { type: GET_COUNT, count }
}
export const setPageNumber = (page) => {
    return { type: SET_PAGE_NUMBER, page }
}
export const setIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}
export const setUsersInProgress = (inProgress, id) => {
    return { type: CHANGE_USERS_IN_PROGRESS, inProgress, id}
}

export const getUsersThunkCreator = (page, users_on_page) => async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setPageNumber(page));
        let response = await GetUsersAPI.getUsers(page, users_on_page)
        dispatch(setIsFetching(false));
        dispatch(setUsers(response.items))
        dispatch(getCount(response.totalCount))
    } 

const followunfollow = async (dispatch, id, apimeth, acreator) => {
    dispatch(setUsersInProgress(true, id));
    let response = await apimeth(id);
    if (response.resultCode === 0) {
        dispatch(acreator(id));
    }
    dispatch(setUsersInProgress(false, id));
}

export const followThunkCreator = (bool, id) => {
    if (bool === true) {
        return async (dispatch) => followunfollow(dispatch, id, GetUsersAPI.follow, follow)
    }
    else {
        return async (dispatch) => followunfollow(dispatch, id, GetUsersAPI.unfollow, unfollow)
    }
}

/*export const followThunkCreator = (bool, id) => async (dispatch) => {
        dispatch(setUsersInProgress(true, id));
        if (bool === true) {
            let response = await GetUsersAPI.follow(id)
            if (response.resultCode === 0) {
                dispatch(follow(id));
            }
        }
        else {
            let response = await GetUsersAPI.unfollow(id)
            if (response.resultCode === 0) {
                dispatch(unfollow(id));
            }
        }
        dispatch(setUsersInProgress(false, id));
    }*/

export default usersReducer;