import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 2em;
  max-width: 40em;
  margin: auto;
  box-sizing: border-box;

  @media (max-width: 48em) {
    padding: 1em;
  }
`;

const CartItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 48em) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CartSummary = styled.div`
  margin-top: 2em;
  padding-top: 2em;
  border-top: 1px solid #ddd;

  @media (max-width: 48em) {
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.5em;
  padding: 0.75em 1.5em;
  font-size: 1em;
  cursor: pointer;
  margin: 0.5em;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 48em) {
    width: 100%;
    padding: 1em;
    font-size: 1.2em;
  }
`;

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
        <Link to="/skatepark-map"><Button>View Map</Button></Link>
      </CartSummary>
    </CartContainer>
  );
};

export default ShoppingCart;
