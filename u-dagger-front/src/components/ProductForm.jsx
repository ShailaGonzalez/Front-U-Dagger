import React, { useState, useEffect } from 'react';
import { createProduct, getProductById, updateProduct } from '../services/productsService';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2em;
  max-width: 50em;
  margin: auto;
`;

const Heading = styled.h1`
  font-size: 2em;
  margin-bottom: 1em;
`;

const Error = styled.p`
  color: red;
  font-size: 1em;
`;

const Loading = styled.p`
  font-size: 1em;
  color: #666;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1em;
  margin-bottom: 0.5em;
`;

const Input = styled.input`
  padding: 0.5em;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 0.5em;
`;

const TextArea = styled.textarea`
  padding: 0.5em;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 0.5em;
  resize: vertical;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.5em;
  padding: 0.75em 1.5em;
  cursor: pointer;
  font-size: 1em;
  margin-top: 1em;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;

const ProductForm = () => {
    const [product, setProduct] = useState({ name: '', price: 0, description: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { productId } = useParams();

    useEffect(() => {
        if (productId) {
            setIsEditing(true);
            const fetchProduct = async () => {
                setLoading(true);
                try {
                    const data = await getProductById(productId);
                    setProduct(data);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };
            fetchProduct();
        }
    }, [productId]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            if (isEditing) {
                await updateProduct(productId, product);
            } else {
                await createProduct(product);
            }
            history.push('/products');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Heading>{isEditing ? 'Edit Product' : 'Create Product'}</Heading>
            {error && <Error>Error: {error}</Error>}
            {loading && <Loading>Loading...</Loading>}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Name:</Label>
                    <Input type="text" name="name" value={product.name} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label>Price:</Label>
                    <Input type="number" name="price" value={product.price} onChange={handleChange} required min="0" />
                </FormGroup>
                <FormGroup>
                    <Label>Description:</Label>
                    <TextArea name="description" value={product.description} onChange={handleChange} />
                </FormGroup>
                <Button type="submit" disabled={loading}>
                    {isEditing ? 'Update Product' : 'Create Product'}
                </Button>
            </Form>
        </Container>
    );
};

export default ProductForm;
