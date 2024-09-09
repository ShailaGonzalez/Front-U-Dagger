import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../services/productService';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Añadido para manejar carga

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
    <div>
      <h1>Products List</h1>
      {error && <p className="error">{error}</p>} {/* Mostrar errores */}
      {loading && <p>Loading...</p>} {/* Mostrar carga */}
      <Link to="/add-product"><button>Add Product</button></Link>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleDelete(product.id)} disabled={loading}>
              Delete
            </button>
            <Link to={`/products/${product.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
