import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Browser } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Browser>
        <App />
      </Browser>
  </React.StrictMode>
);