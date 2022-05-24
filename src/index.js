import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Services } from './pages/Services';
import { Slide } from './components/Slide';
import { Footer } from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Services />
    <Footer />
  </React.StrictMode>
);
