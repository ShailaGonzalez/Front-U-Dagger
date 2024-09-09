import axios from './axios'; // Importa la instancia configurada

const API_URL = '/products'; // URL relativa a la base URL configurada

export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Unable to fetch products. Please try again later.');
    }
};

export const createProduct = async (product) => {
    try {
        const response = await axios.post(API_URL, product);
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw new Error('Unable to create product. Please try again later.');
    }
};

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw new Error('Unable to fetch product details. Please try again later.');
    }
};

export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, product);
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw new Error('Unable to update product. Please try again later.');
    }
};

export const deleteProduct = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting product:', error);
        throw new Error('Unable to delete product. Please try again later.');
    }
};
