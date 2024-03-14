import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Product 1', description: 'Description 1' },
  { id: 2, name: 'Product 2', description: 'Description 2' },
  { id: 3, name: 'Product 3', description: 'Description 3' },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const itemInCart = cart.find((item) => item.id === product.id);
    if (itemInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...product, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-4" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    cart.find((item) => item.id === product.id)
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                >
                  {cart.find((item) => item.id === product.id)
                    ? 'Remove from Cart': 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1>Cart</h1>
      <div className="row">
        {cart.map((product) => (
          <div className="col-sm-4" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Quantity: {product.quantity}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => removeFromCart(product)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
