import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    posts: [
    {id: uuidv4(), title: 'First Blog ever', description: 'here is text', 
    img: 'https://images.unsplash.com/photo-1490507278117-59a4ccd0165f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80', dateFormat: 'January 31, 2021'}, 
    {id: uuidv4(), title: 'Second Blog', description: 'here is text',img: 'https://images.unsplash.com/photo-1573760203986-2dec90daa763?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60', dateFormat: 'January 31, 2021'},
    ]
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