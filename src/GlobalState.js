import { usState, createContext, useContext } from "react"

//  The initial state, you can setup any properties initial values here
const initialState = {
    url: "https://ruby-react-blog-project-4.herokuapp.com"
}

//  Create the context object for deliverin your state across you app
const GlobalContext = createContext(null)

//  Custom component to provide the state to your app
export const GlobalState = props => {
    //  Declare the GlobalState
    const [ globalState, setGlobalState ] = useState({})

    //  Create a function that'll make it easy to update one state property at a time
    const updateGlobalState = ( key, newValue ) => {
        setGlobalState ( oldState => {
            if ( oldState[key] !== newValue ) {
            const newState = { ...oldState }
            newState[key] = newValue 
            return newState
        } else {
            return oldState
        }
    })
}
    return (
        <GlobalContext.Provider value={[ globalState, updateGlobalState ]}></GlobalContext.Provider>
    )

}
export const useGlobalState = () => useContext(GlobalContext)