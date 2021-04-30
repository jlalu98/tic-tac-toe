// this is where is import App component and use  this is as entry point

import React, { Component } from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './design.css'
// Importing component App from app.js
import App from './app' ;

//Component </App> created from app.js
// Render the App component on index.html
ReactDOM.render( <App/>,document.getElementById("root"));

