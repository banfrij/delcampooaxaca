import React, { useState } from 'react';

function Admin() {
    const [products, setProducts] = useState([]);

    // Función para actualizar un producto existente
    const updateProduct = (productId, updatedProduct) => {
        // Lógica para actualizar el producto en la lista de productos
        // ...
    };

    // Función para agregar un nuevo producto
    const addProduct = (newProduct) => {
        // Lógica para agregar el nuevo producto a la lista de productos
        // ...
    };

    return (
        <div>
            <h1>Admin</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price}
                        <button onClick={() => updateProduct(product.id, updatedProduct)}>Actualizar</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => addProduct(newProduct)}>Agregar Producto</button>
        </div>
    );
}

export default Admin;
