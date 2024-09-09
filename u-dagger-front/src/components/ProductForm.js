import React, { useState, useEffect } from 'react';
import { createProduct, getProductById, updateProduct } from '../services/productsService';
import { useHistory, useParams } from 'react-router-dom';

const ProductForm = () => {
    const [product, setProduct] = useState({ name: '', price: 0, description: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // Añadido para manejar carga
    const history = useHistory();
    const { productId } = useParams(); // Obtener el ID del producto de la URL

    // Cargar el producto para editar si hay un ID
    useEffect(() => {
        if (productId) {
            setIsEditing(true);
            const fetchProduct = async () => {
                setLoading(true);
                try {
                    const data = await getProductById(productId); // Obtener datos del producto
                    setProduct(data); // Guardar los datos del producto
                } catch (err) {
                    setError(err.message); // Manejar errores
                } finally {
                    setLoading(false);
                }
            };
            fetchProduct();
        }
    }, [productId]);

    // Actualizar el estado del producto cuando cambian los campos
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    // Enviar el formulario (crear o actualizar producto)
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            if (isEditing) {
                await updateProduct(productId, product); // Actualizar producto existente
            } else {
                await createProduct(product); // Crear nuevo producto
            }
            history.push('/products'); // Redirigir a la lista de productos
        } catch (err) {
            setError(err.message); // Manejar errores
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>{isEditing ? 'Edit Product' : 'Create Product'}</h1>
            {error && <p>Error: {error}</p>} {/* Mostrar errores */}
            {loading && <p>Loading...</p>} {/* Mostrar carga */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                        min="0" // Asegura que el precio no sea negativo
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {isEditing ? 'Update Product' : 'Create Product'}
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
