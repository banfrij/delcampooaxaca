import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';


const OrderContainer = styled.div`
  padding: 20px;
  background-color: #5487FB;
  border-radius: 15px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #000;
  border-radius: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const OrderRow = styled.tr`
  background-color: #fff; // Celdas blancas para contrastar
  margin-bottom: 20px;
  border: 1px solid #dee2e6; // Borde para separar las celdas
`;

const OrderCell = styled.td`
  padding: 10px;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;

export default function Order() {
  const { cartItems, clearCart } = useContext(CartContext);
  const handleConfirmOrder = () => {
    clearCart();
    toast('Pedido enviado y en proceso');
  };

  return (
    <OrderContainer>
      <OrderTable>
        {cartItems.map((item, index) => (
          item.product && (
            <OrderRow key={index}>
              <OrderCell>{item.product.name}</OrderCell>
              <OrderCell>Cantidad: {item.quantity}</OrderCell>
              <OrderCell>Precio: ${item.product.price} por {item.product.unit}</OrderCell>
              <OrderCell>Total: ${item.product.price * item.quantity}</OrderCell>
            </OrderRow>
          )
        ))}
     </OrderTable>
      <ConfirmButton onClick={handleConfirmOrder}>Confirmar pedido</ConfirmButton>
      <ToastContainer 
        position="bottom-center" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick
        rtl={false} 
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </OrderContainer>
  );
}