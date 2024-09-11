// src/styles/ShoppingCartStyles.js
import styled from 'styled-components';

export const CartContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

export const CartItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;

export const CartSummary = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;
