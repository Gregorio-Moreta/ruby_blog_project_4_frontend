import React from "react"
import { useContext, useReducer } from "react"

//  Initial State

const initialState = {
     url: "https://ruby-react-blog-project-4.herokuapp.com",
     token: null,
     username: null,
     posts: null,
     new: {
         title: "",
         author: "",
         body: ""
     },
     edit: {
         id: 0,
         title: "",
         author: "",
         body: ""
    }
}

//  Reducer Function - big function that handles all situations
//  action = {type: ", payload: ---"}
const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case "auth":
            newState = { ...state, ...action.payload }
            return newState
            break
        case "logout":
            newState = {...state, token: null, username: null}
            window.localStorage.removeItem("auth")
            return newState
            break
        case "getPosts":
            console.log(action.payload)
            newState = {...state, post: action.payload }
            return newState
            break
        default:
            return state
            break
    }
}


//   Switch is based on action type function will do different things and change state
    // switch(action.type){
    //     case "signup":
    //         fetch(state.url + "/users/", {
    //             method: "post",
    //                 headers: {
    //                     "content-type": "application/json" 
    //                 },
    //                 body: JSON.stringify(action.payload)
    //                 })
    //     .then((response) => response.json())
    //     .then((user) => {
    //         return {
    //             ...state,
    //             token: user.token,
    //             username: user.username,
    //         }
    // })
    // break
    // case "login":
    //     fetch(state.url + "/login/", {
    //         method: "post",
    //             headers: {
    //                 "content-type": "application/json" 
    //             },
    //             body: JSON.stringify(action.payload)
    //             })
    // .then((response) => response.json())
    // .then((user) => {
    //     return {
    //         ...state,
    //         token: user.token,
    //         username: user.username
    //         }
    //     })
        // break
        // default: 
        //     return state
    //}

// }

//  AppContext - creates a context object - object that provides the state to everything
const AppContext = React.createContext(null)


//  AppState component
export const AppState = (props) => {
//  Use reducer hook - get your state and get back a function dispatch
//  Set state specifies what you want to change your state to
//  Dispatch is going to pass the action to the reducer

//  InitialState becomes the state and the dispatch function is passed an action which is then run by the reducer function
const [state, dispatch] = useReducer(reducer, initialState); 

    return (
    <AppContext.Provider value={{state, dispatch}}>
        {props.children}
    </AppContext.Provider>
    )
}

//  useAppState hook
export const useAppState = () => {
    return React.useContext(AppContext)
}
