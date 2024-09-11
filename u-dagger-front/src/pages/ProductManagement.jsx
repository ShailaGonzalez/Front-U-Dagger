// src/pages/ProductManagement.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getProductById, createProduct, updateProduct } from '../services/productService';
import { ProductFormContainer, FormGroup, Input, Textarea, Button } from '../styles/ProductFormStyles';

const ProductManagement = () => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        setLoading(true);
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
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (id) {
        await updateProduct(id, product);
      } else {
        await createProduct(product);
      }
      history.push('/products');
    } catch (err) {
      setError('Failed to save product.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <ProductFormContainer>
      <h1>{id ? 'Edit Product' : 'Create Product'}</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Product Name</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="price">Price</label>
          <Input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Description</label>
          <Textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="image">Image URL</label>
          <Input
            type="text"
            id="image"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">{id ? 'Save Changes' : 'Create Product'}</Button>
      </form>
    </ProductFormContainer>
  );
};

export default ProductManagement;
