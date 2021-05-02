import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';




// Initial State

const initialState = {
    users: [
        { id: 1, name: 'User one' },
        { id: 2, name: 'User two' },
        { id: 3, name: 'User three' }
    ]
};

// create context
export const GlobalContext = createContext(initialState);



// provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    // actions
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }

    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }

    
    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }


    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    );
}