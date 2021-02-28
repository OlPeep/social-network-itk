import profileReducer, { addPostActionCreator, deletingPostAC } from "./profile-reducer";
import React from 'react';

let state = {
    PostList: [
    { message: "Hi hi", likes: 10 },
    { message: "Ho ho", likes: 15 },
    { message: "Yo", likes: 15 },
    { message: "Россия будет свободной!", likes: 1500 },
    { message: "FREEDOM!", likes: 3000 }
]}

it('new post message text', () => {
    let action = addPostActionCreator("new post tested")

    let newState = profileReducer(state, action);

    expect(newState.PostList[5].message).toBe("new post tested");
})

/*
it('deleting post', () => {
    let action = deletingPostAC(3)

    let newState = profileReducer(state, action);

    expect(newState.PostList.length).toBe(4);
})*/