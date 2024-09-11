// src/pages/ShoppingCart.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContainer, CartItem, CartSummary, Button } from '../styles/ShoppingCartStyles';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 1 },
    { id: 2, name: 'Product 2', price: 15, quantity: 2 },
  ]);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContainer>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <CartItem key={item.id}>
            <div>{item.name} (x{item.quantity})</div>
            <div>${item.price * item.quantity}</div>
          </CartItem>
        ))
      )}
      <CartSummary>
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        <Link to="/skatepark-map"><Button>Select Skatepark</Button></Link>
        <div>
          <Link to="/"><Button>Continue Shopping</Button></Link>
          <Link to="/checkout"><Button>Checkout</Button></Link>
        </div>
      </CartSummary>
    </CartContainer>
  );
};

export default ShoppingCart;
