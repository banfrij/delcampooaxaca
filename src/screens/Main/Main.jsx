// Main.jsx
// Main.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../Order/CartContext.jsx';
import { FaApple, FaAppleAlt, FaCarrot, FaBacon, FaLemon, FaCircle, FaPepperHot, FaLeaf } from 'react-icons/fa';

export default function Main() {
  const { setCartItems } = useContext(CartContext); // Usa setCartItems en lugar de setCart
  const [message, setMessage] = useState(''); // Nuevo estado para el mensaje
  // ...resto del código...

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
      setMessage(`Producto ${product.name} agregado satisfactoriamente`); // Establecer el mensaje
      setTimeout(() => setMessage(''), 3000); // Borrar el mensaje después de 3 segundos
    }
  };

  
  return (
    <div>
      <input type="text" placeholder="Search products" />
      {message && <p>{message}</p>} {/* Mostrar el mensaje si existe */}
      
      <div>
        {/* Product list */}
        {productList.map((product, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', border: '1px solid black', borderRadius: '10px', padding: '1rem' }}>
            <product.icon style={{ marginRight: '1rem', fontSize: '2rem' }} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Precio: ${product.price} por {product.unit}</p>
              <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}