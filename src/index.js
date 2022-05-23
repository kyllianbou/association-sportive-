import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavLink } from 'react-router-dom';
import App from './App';
import Nav from './components/Nav';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    
  </React.StrictMode>
);
