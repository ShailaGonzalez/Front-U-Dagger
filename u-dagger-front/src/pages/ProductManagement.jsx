import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getProductById, createProduct, updateProduct } from '../services/productService';
import styled from 'styled-components';

const ProductFormContainer = styled.div`
  max-width: 600px;
  margin: auto;
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

const FormGroup = styled.div`
  margin-bottom: 1em;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75em;
  border-radius: 0.25em;
  border: 1px solid #ccc;

  @media (max-width: 30em) {
    padding: 0.5em;
  }

  @media (min-width: 30em) and (max-width: 48em) {
    padding: 0.75em;
  }

  @media (min-width: 48em) {
    padding: 0.75em;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75em;
  border-radius: 0.25em;
  border: 1px solid #ccc;
  resize: vertical;

  @media (max-width: 30em) {
    padding: 0.5em;
  }

  @media (min-width: 30em) and (max-width: 48em) {
    padding: 0.75em;
  }

  @media (min-width: 48em) {
    padding: 0.75em;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25em;
  padding: 0.75em 1.5em;
  cursor: pointer;
  font-size: 1em;
  margin-top: 1em;

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
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

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
