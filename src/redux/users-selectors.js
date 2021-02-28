import { createSelector } from "reselect";

const allUsers = (state) => {
    return state.usersPage.users;
}

export const reselectorAllUsers = createSelector(allUsers, (users) => {
    return users.filter(u => true);
})
                
export const getUsersCount = (state) => {
    return state.usersPage.count;
}
export const getPage = (state) => {
    return state.usersPage.page;
}
export const getUsersOnPage = (state) => {
    return state.usersPage.users_on_page;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getUsersInProgress = (state) => {
    return state.usersPage.usersInProgress;
}