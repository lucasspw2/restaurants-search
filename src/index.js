import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@material/react-text-field/dist/text-field.css'; //importando do css no index p/ ser usado em qualquer lugar @material/react-text-field

import '@material/react-material-icon/dist/material-icon.css';
//npm install @material/react-material-icon

import "slick-carousel/slick/slick.css";
// npm install slick-carousel
import "slick-carousel/slick/slick-theme.css";
//import css da lib de carousel npm install react-slick --save

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
