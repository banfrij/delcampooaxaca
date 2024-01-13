// Main.jsx
// Main.jsx
import React, { useContext, useState, useEffect  } from 'react';
import { CartContext } from '../Order/CartContext.jsx';
import { FaSearch, FaApple, FaAppleAlt, FaCarrot, FaBacon, FaLemon, FaCircle, FaPepperHot, FaLeaf } from 'react-icons/fa';
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  background-color: lightblue;
  padding: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

  const ProductCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
`;

  const ProductPrice = styled.p`
  color: darkblue;
  font-weight: bold;
`;

  const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

  const SearchInput = styled.input`
  padding: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

  const Message = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  border-radius: 5px;
  text-align: center;
`;

export default function Main() {
  const { setCartItems } = useContext(CartContext); // Usa setCartItems en lugar de setCart
  const [message, setMessage] = useState(''); // Nuevo estado para el mensaje
  // ...resto del código...

  useEffect(() => {
    if (message) {
      toast(message);
    }
  }, [message]);

  const productList = [
    { name: 'Manzana', description: 'Fruta fresca', price: 2.5, unit: 'kilo', icon: FaApple },
    { name: 'Plátano', description: 'Fruta tropical', price: 1.5, unit: 'kilo', icon: FaBacon },
    { name: 'Zanahoria', description: 'Verdura crujiente', price: 1.0, unit: 'kilo', icon: FaCarrot },
    { name: 'Tomate', description: 'Fruta roja', price: 2.0, unit: 'kilo', icon: FaAppleAlt },
    { name: 'Limón', description: 'Fruta cítrica', price: 1.5, unit: 'kilo', icon: FaLemon },
    { name: 'Naranja', description: 'Fruta cítrica', price: 2.0, unit: 'kilo', icon: FaCircle },
    { name: 'Pimiento', description: 'Verdura picante', price: 1.5, unit: 'kilo', icon: FaPepperHot },
    { name: 'Lechuga', description: 'Verdura fresca', price: 1.0, unit: 'kilo', icon: FaLeaf },
  ];

  
const handleAddToCart = (product) => {
  const quantity = window.prompt('¿Cuántos quieres agregar al carrito?');
  if (quantity) {
    setCartItems(prevCart => [...prevCart, { product, quantity: parseInt(quantity) }]);
    toast(`Producto ${product.name} agregado satisfactoriamente`); // Muestra el mensaje
  }
};

  return (
    <div>
      <SearchBar>
        <SearchInput type="text" placeholder="Search products" />
        <FaSearch />
      </SearchBar>
      <ToastContainer
        position="bottom-center" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick
        rtl={false} 
        pauseOnFocusLoss
        draggable
        pauseOnHover// El toast se pausa al pasar el cursor sobre él
      />
      <ProductGrid>
        {/* Product list */}
        {productList.map((product, index) => (
          <ProductCard key={index}>
            <product.icon style={{ marginRight: '1rem', fontSize: '2rem' }} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <ProductPrice>Precio: ${product.price} por {product.unit}</ProductPrice>
              <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
            </div>
          </ProductCard>
        ))}
      </ProductGrid>
    </div>
  );
}