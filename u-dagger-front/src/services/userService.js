import axios from 'axios';

const API_URL = 'http://localhost:5173/users'; 

// Obtener todos los usuarios
export const getUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error); // Loggea el error técnico
        throw new Error('Unable to fetch users. Please try again later.'); 
    }
};

// Crear un nuevo usuario
export const createUser = async (user) => {
    try {
        const response = await axios.post(API_URL, user);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error); // Loggea el error técnico
        throw new Error('Unable to create user. Please try again later.'); 
    }
};

// Obtener un usuario por ID
export const getUserById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user by ID:', error); // Loggea el error técnico
        throw new Error('Unable to fetch user details. Please try again later.'); 
    }
};

// Actualizar un usuario por ID
export const updateUser = async (id, user) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, user);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error); // Loggea el error técnico
        throw new Error('Unable to update user. Please try again later.'); 
    }
};

// Eliminar un usuario por ID
export const deleteUser = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting user:', error); // Loggea el error técnico
        throw new Error('Unable to delete user. Please try again later.'); 
    }
};