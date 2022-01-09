
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/nav";
//  Import React and hooks
//import React, { useState, useEffect } from "react";
//  Import components from React Router
import { Route, Switch } from "react-router-dom";
import { useAppState } from "./AppState";
import React from "react";


export function App(props) {

//  Styling Objects

//  State & variables

//  API call
//const url = "https://ruby-react-blog-project-4.herokuapp.com/posts"

//  State to hold list of posts
//const [posts, setPosts] = useState([])

//  Function

//  useEffect

  const { state, dispatch } = useAppState()
  React.useState(() => {
    const auth = JSON.parse(window.localStorage.getItem("auth"))
    if (auth) {
      dispatch({ type: "auth", payload: auth })
      props.history.push("/dashboard")
    } else {
      props.history.push("/")
    }
  }, [])

  return (
    <>
      <Route path="/" component={Nav} />
      <div>
        <Switch>
          <Route
            exact 
            path= "/"
            render = {
              (routerProps) => <Home {...routerProps} Home={Home}/> 
            }
            />
            <Route 
            path= "/auth/:form"
            render = {
              (routerProps) => <Auth {...routerProps} Auth={Auth}/> 
            }
            />
            <Route 
            path= "/home"
            render = {
              (routerProps) => <Home {...routerProps} Home/> 
            }
            />
            <Route 
            path= "/dashboard"
            render = {
              (routerProps) => <Dashboard {...routerProps} Dashboard={Dashboard}/> 
            }
            />
        </Switch>
      </div>
    </>
  );
}

export default App;
