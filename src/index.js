import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {  BrowserRouter,HashRouter } from 'react-router-dom';
import { Context } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Context>
   <BrowserRouter>
  <App/>
  </BrowserRouter>
  </Context>
 
);

