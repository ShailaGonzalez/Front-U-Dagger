import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../services/productService';
import styled from 'styled-components';

const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;

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

const ProductImages = styled.div`
  display: flex;
  gap: 1.5em;
  margin-bottom: 2em;
  flex-wrap: wrap;
`;

const ProductImage = styled.img`
  max-width: 90%;
  height: auto;
  border-radius: 0.5em;

  @media (max-width: 30em) {
    max-width: 100%;
  }
`;

const ProductInfo = styled.div`
  text-align: center;
  max-width: 90%;
  margin: 0 auto;

  @media (min-width: 30em) {
    max-width: 800px;
  }
`;

const ProductName = styled.h1`
  font-size: 2em;
  margin-bottom: 0.5em;

  @media (max-width: 30em) {
    font-size: 1.5em;
  }
`;

const ProductPrice = styled.p`
  font-size: 1.5em;
  color: #007bff;
  margin-bottom: 1em;

  @media (max-width: 30em) {
    font-size: 1.25em;
  }
`;

const ProductDescription = styled.p`
  margin-bottom: 1.5em;
  font-size: 1em;

  @media (max-width: 30em) {
    font-size: 0.875em;
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
  margin: 0.5em;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 30em) {
    padding: 0.5em 1em;
    font-size: 0.875em;
  }
`;

const DeliveryInfo = styled.div`
  margin-top: 2em;
  font-size: 1em;

  @media (max-width: 30em) {
    font-size: 0.875em;
  }
`;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError('Failed to fetch product details.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  if (!product) return <p>Product not found.</p>;

  return (
    <ProductDetailContainer>
      <ProductImages>
        {product.images.map((image, index) => (
          <ProductImage key={index} src={image} alt={product.name} />
        ))}
      </ProductImages>
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>${product.price}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        <Button>Add to Cart</Button>
        <Button>Buy Now</Button>
        <DeliveryInfo>
          <p>Delivery to skateparks available.</p>
          <Link to="/skatepark-map"><Button>Select Skatepark</Button></Link>
        </DeliveryInfo>
      </ProductInfo>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
