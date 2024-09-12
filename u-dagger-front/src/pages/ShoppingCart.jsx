// src/pages/ShoppingCart.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 2em;
  max-width: 100%;
  margin: auto;
  box-sizing: border-box;

  @media (max-width: 30em) {
    padding: 1em;
  }

  @media (min-width: 30em) and (max-width: 48em) {
    padding: 1.5em;
  }

  @media (min-width: 48em) {
    padding: 2em;
  }
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  border-bottom: 1px solid #ddd;

  @media (max-width: 30em) {
    font-size: 0.875em;
    padding: 0.75em 0;
  }

  @media (min-width: 30em) and (max-width: 48em) {
    font-size: 1em;
    padding: 0.75em 0;
  }

  @media (min-width: 48em) {
    font-size: 1em;
    padding: 1em 0;
  }
`;

const CartSummary = styled.div`
  margin-top: 2em;
  text-align: center;

  @media (max-width: 30em) {
    margin-top: 1em;
  }

  @media (min-width: 30em) and (max-width: 48em) {
    margin-top: 1.5em;
  }

  @media (min-width: 48em) {
    margin-top: 2em;
  }

  h2 {
    margin-bottom: 1em;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media (max-width: 30em) {
      gap: 0.5em;
    }

    @media (min-width: 30em) and (max-width: 48em) {
      gap: 0.75em;
    }
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25em;
  padding: 0.75em 1.5em;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 30em) {
    padding: 0.5em 1em;
    font-size: 0.875em;
  }

  @media (min-width: 30em) and (max-width: 48em) {
    padding: 0.75em 1.25em;
    font-size: 1em;
  }

  @media (min-width: 48em) {
    padding: 0.75em 1.5em;
    font-size: 1em;
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
