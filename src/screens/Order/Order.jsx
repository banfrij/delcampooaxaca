// Order.jsx
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import styled from 'styled-components';

const OrderContainer = styled.div`
  padding: 20px;
`;

const OrderItem = styled.div`
  margin-bottom: 20px;
`;

const ItemName = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const ItemDetail = styled.p`
  font-size: 16px;
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

export default function Order() {
  const { cartItems, clearCart } = useContext(CartContext);

  const handleConfirmOrder = () => {
    clearCart();
    alert('Pedido confirmado!');
  };

  return (
    <OrderContainer>
      {cartItems.map((item, index) => (
        item.product && (
          <OrderItem key={index}>
            <ItemName>{item.product.name}</ItemName>
            <ItemDetail>Cantidad: {item.quantity}</ItemDetail>
            <ItemDetail>Precio: ${item.product.price} por {item.product.unit}</ItemDetail>
            <ItemDetail>Total: ${item.product.price * item.quantity}</ItemDetail>
          </OrderItem>
        )
      ))}
      <ConfirmButton onClick={handleConfirmOrder}>Confirmar pedido</ConfirmButton>
    </OrderContainer>
  );
}