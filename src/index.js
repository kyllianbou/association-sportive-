import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/Home';
import { Asso } from './pages/Asso';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Asso />    
  </React.StrictMode>
);
