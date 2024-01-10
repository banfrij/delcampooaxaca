import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './redux/store.js'

import App from './App.jsx';
import Main from './screens/Main/Main.jsx';
import Order from './screens/Order/Order.jsx';
import Profile from './screens/Profile/Profile.jsx';
import Login from './screens/Login/Login.jsx';
import { createRoot } from 'react-dom/client';
import './index.css'; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
      <Router>
        <Routes>
          <Route  path="/app" element={<App/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </Router>
 </Provider>
  </React.StrictMode>,
);