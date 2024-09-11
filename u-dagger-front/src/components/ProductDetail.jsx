import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DetailContainer = styled.div`
  padding: 2em;
  max-width: 60em;
  margin: auto;
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 2em;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 0.5em;
`;

const ProductName = styled.h1`
  font-size: 2em;
  margin: 1em 0;
`;

const ProductPrice = styled.p`
  font-size: 1.5em;
  color: #666;
`;

const ProductDescription = styled.p`
  font-size: 1em;
  line-height: 1.5;
  color: #333;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.5em;
  padding: 0.75em 1.5em;
  cursor: pointer;
  margin: 1em 0;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductDetail = ({ product }) => {
  return (
    <DetailContainer>
      <ImageWrapper>
        <ProductImage src={product.image} alt={product.name} />
      </ImageWrapper>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price}</ProductPrice>
      <ProductDescription>{product.description}</ProductDescription>
      <Link to={`/products`}><Button>Back to Products</Button></Link>
    </DetailContainer>
  );
};

export default ProductDetail;

