import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../services/productService';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductListContainer = styled.div`
  display: flex;
  padding: 2em;
  gap: 2em;

  @media (max-width: 48em) {
    flex-direction: column;
  }
`;

const SidebarWrapper = styled.div`
  flex: 1;
  max-width: 20em;

  @media (max-width: 48em) {
    max-width: none;
  }
`;

const ContentWrapper = styled.div`
  flex: 3;
`;

const ProductListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1em;
`;

const AddProductButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.5em;
  padding: 0.75em 1.5em;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 1.5em;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setLoading(true);
      try {
        await deleteProduct(id);
        setProducts(products.filter(product => product.id !== id));
      } catch (err) {
        setError('Failed to delete product.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <ProductListContainer>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <ContentWrapper>
        <h1>Products List</h1>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {loading && <p>Loading...</p>}
        <Link to="/add-product"><AddProductButton>Add Product</AddProductButton></Link>
        <ProductListContent>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={() => handleDelete(product.id)}
            />
          ))}
        </ProductListContent>
      </ContentWrapper>
    </ProductListContainer>
  );
};

export default ProductList;
