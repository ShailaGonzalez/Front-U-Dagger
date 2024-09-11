import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background-color: #fff;
  border: 0.0625em solid #ddd;
  border-radius: 0.5em;
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.1);
  padding: 1em;
  width: 20em;
  text-align: center;
  margin: 1em;

  @media (max-width: 48em) {
    width: 18em;
    padding: 0.75em;
    margin: 0.75em;
  }

  @media (max-width: 30em) {
    width: 16em;
    padding: 0.5em;
    margin: 0.5em;
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 0.25em;
`;

const ProductName = styled.h3`
  font-size: 1.2em;
  margin: 0.5em 0;

  @media (max-width: 48em) {
    font-size: 1.1em;
  }

  @media (max-width: 30em) {
    font-size: 1em;
  }
`;

const ProductPrice = styled.p`
  font-size: 1em;
  color: #666;

  @media (max-width: 48em) {
    font-size: 0.9em;
  }

  @media (max-width: 30em) {
    font-size: 0.8em;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25em;
  padding: 0.75em;
  cursor: pointer;
  margin: 0.5em 0;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 48em) {
    padding: 0.625em;
  }

  @media (max-width: 30em) {
    padding: 0.5em;
  }
`;

const ProductCard = ({ product, onDelete }) => {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price}</ProductPrice>
      <Link to={`/products/${product.id}`}><Button>View Details</Button></Link>
      <Button onClick={onDelete}>Delete</Button>
    </Card>
  );
};

export default ProductCard;
