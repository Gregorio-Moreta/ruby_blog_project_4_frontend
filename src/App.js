
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
//  Import React and hooks
//import React, { useState, useEffect } from "react";
//  Import components from React Router
import { Route, Switch } from "react-router-dom";
//import { GlobalState } from "./GlobalState";

function App(props) {
  return (
    <div>
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
          path= "/auth"
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
