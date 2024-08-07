import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import '@egjs/react-flicking/dist/flicking.css'
import '@egjs/react-flicking/dist/flicking-inline.css'

import 'swiper/css';

import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <App/>
   
     <script src="https://unpkg.com/@egjs/flicking/dist/flicking.pkgd.min.js" crossorigin="anonymous"></script>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
