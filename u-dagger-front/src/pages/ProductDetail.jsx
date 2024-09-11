import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../services/productService';
import styled from 'styled-components';

const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProductImages = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const ProductImage = styled.img`
  max-width: 300px;
  height: auto;
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  text-align: center;
  max-width: 800px;
`;

const ProductName = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.5em;
  color: #007bff;
  margin-bottom: 20px;
`;

const ProductDescription = styled.p`
  margin-bottom: 20px;
`;

const Button = styled.button`
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

const DeliveryInfo = styled.div`
  margin-top: 30px;
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
  if (error) return <p className="error">{error}</p>;

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
