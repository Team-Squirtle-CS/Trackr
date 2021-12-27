import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
// import styles from './scss/application.scss';

render(
  // wrap the App in the Provider Component and pass in the store
    <App />
  , document.getElementById('root')
  );