import React from "react"
import { useContext, useReducer } from "react"

//  Initial State

const initialState = {
     url: "https://ruby-react-blog-project-4.herokuapp.com"
}

//  Reducer Function - big function that handles all situations
//  action = {type: ", payload: ---"}
const reducer = (state, action) => {
//   Switch is based on action type function will do different things and change state
    switch(action.type){
        default: 
            return state
    }

}

//  AppContext - creates a context object - object that provides the state to everything
const AppContext = React.createContext(null)


//  AppState component
export const AppState = (props) => {
//  Use reducer hook - get your state and get back a function dispatch
//  Set state specifies what you want to change your state to
//  Dispatch is going to pass the action to the reducer

//  InitialState becomes the state and the dispatch function is passed an action which is then run by the reducer function
const [state, dispatch] = useReducer(reducer, initialState); 

    return <AppContext.Provider value={{state, dispatch}}>
        {props.children}
    </AppContext.Provider>
}

//  useAppState hook
export const useAppState = () => {
    return React.useContext(AppContext)
}
