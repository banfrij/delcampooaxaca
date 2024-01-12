import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { UserContextProvider } from './screens/Login/UserContext';
import App from './App';
import Main from './screens/Main/Main';
import Order from './screens/Order/Order';
import Profile from './screens/Profile/Profile';
import Login from './screens/Login/Login';

import './index.css';

const RootComponent = () => {
  return (
    <React.StrictMode>
    
        <UserContextProvider>
          <Router>
            <Routes>
              <Route path="/app" element={<App />} />
              <Route path="/main" element={<Main />} />
              <Route path="/order" element={<Order />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </UserContextProvider>

    </React.StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<RootComponent />);