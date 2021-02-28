export const followUnfollowHelper = (state, action, bool) => {
    return {
    ...state,
    users: state.users.map(u => {
        if (u.id === action.user_id) {
            return {...u, followed: bool }
        }
        return u;
    })
}
}