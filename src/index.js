import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//  Import the BrowserRouter component and rename it Router
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //  Wrap our App component inside router so App and children can use router
  //  Pass the App component into Route to give it access to router props
  <GlobalState>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </GlobalState>,
  document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
