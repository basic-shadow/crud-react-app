import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    posts: []
};

// context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    const addPost = (post) => {
        dispatch({
            type: 'ADD_POST',
            payload: post,
        })
    }

    const editPost = (post) => {
        dispatch({
            type: 'EDIT_POST',
            payload: post,
        })
    }

    const removePost = (id) => {
        dispatch({
            type: 'DELETE_POST',
            payload: id,
        })
    }

    return (
        <GlobalContext.Provider value={{
            posts: state.posts,
            removePost,
            addPost,
            editPost}}>
            {children}
        </GlobalContext.Provider>
    )
}