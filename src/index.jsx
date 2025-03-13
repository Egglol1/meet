import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import * as atatus from 'atatus-spa';
import * as serviceWorkerRegistration from './serviceWorkerRegistration.js';
//atatus.config('17cc1233e06b4200ba58a28178c6bf26').install();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorkerRegistration.register();
