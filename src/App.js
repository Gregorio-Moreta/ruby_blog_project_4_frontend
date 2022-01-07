
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/nav";
//  Import React and hooks
//import React, { useState, useEffect } from "react";
//  Import components from React Router
import { Route, Switch } from "react-router-dom";
//import { AppState } from "./AppState";

function App(props) {

//  Styling Objects

//  State & variables

//  API call
//const url = "https://ruby-react-blog-project-4.herokuapp.com/posts"

//  State to hold list of posts
//const [posts, setPosts] = useState([])

//  Function

//  useEffect

  return (
    <div>
      <Nav />
      <h1>Blog App</h1>
      <Switch>
        <Route
          exact 
          path= "/"
          render = {
            (routerProps) => <Home {...routerProps} Home={Home}/> 
        }
        />
          <Route
          exact 
          path= "/auth/:form"
          render = {
            (routerProps) => <Auth {...routerProps} Auth={Auth}/> 
          }
        />
          <Route
          exact 
          path= "/home"
          render = {
            (routerProps) => <Home {...routerProps} Home/> 
          }
        />
          <Route
          exact 
          path= "/dashboard"
          render = {
            (routerProps) => <Dashboard {...routerProps} Dashboard={Dashboard}/> 
        }
        />
      </Switch>
    </div>
  );
}

export default App;
