// Navegacion.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #333;
  padding: 10px 0;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ddd;
  }
`;

const Container = styled.div`
  background: linear-gradient(to bottom, #4e54c8, #8f94fb);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const BackButton = styled(Link)`
  width: 100px;
  height: 40px;
  background-color: #e0e0e0;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  text-decoration: none;
  color: #333;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d3d3d3;
  }
`;

const Navegacion = ({ onScreenChange }) => {
  return (
    <div>
      <NavigationBar>
        <NavButton onClick={() => onScreenChange('main')}>Main</NavButton>
        <NavButton onClick={() => onScreenChange('order')}>Order</NavButton>
        <NavButton onClick={() => onScreenChange('profile')}>Profile</NavButton>
      </NavigationBar>
      <Container>
        {/* Contenido específico de la pantalla se manejará en App */}
        <BackButton to="/">Back</BackButton>
      </Container>
    </div>
  );
};

export default Navegacion;
