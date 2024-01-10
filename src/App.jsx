import React, { useState } from 'react';
import styled from 'styled-components';
import Main from './screens/Main/Main';
import Order from './screens/Order/Order';
import Profile from './screens/Profile/Profile';

import {CartContext} from './screens/Order/CartContext'


const Body = styled.div`
  background: linear-gradient(to right, #3498db, #2c3e50);
  border-radius: 8px;
  font-family: 'Arial', sans-serif;
  min-height: 97vh;
`;
const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Navbar = styled.div`
  background-color: #2c3e50;
   border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const NavButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

const App = () => {
  const [selectedScreen, setSelectedScreen] = useState('main');
  const [cartItems, setCartItems] = useState([]); // Nuevo estado para los items del carrito


  const handleNavButtonClick = (screen) => {
    setSelectedScreen(screen);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}> {/* Proveer el contexto del carrito */}
    <Body>
      <Navbar>
        <NavButton onClick={() => handleNavButtonClick('main')}>Main</NavButton>
        <NavButton onClick={() => handleNavButtonClick('order')}>Order</NavButton>
        <NavButton onClick={() => handleNavButtonClick('profile')}>Profile</NavButton>
      </Navbar>

      <Container>
        {selectedScreen === 'main' && <Main />}
        {selectedScreen === 'order' && <Order />}
        {selectedScreen === 'profile' && <Profile />}
      </Container>
    </Body>
  </CartContext.Provider>
  );
};

export default App;
