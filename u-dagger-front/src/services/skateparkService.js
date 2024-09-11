import axios from 'axios';

const API_URL = 'http://localhost:5173/skateparks'; 

// Obtener todos los skateparks
export const getSkateparks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching skateparks:', error.message || error); // Incluye mensaje de error claro
    throw new Error('Unable to fetch skateparks. Please try again later.'); 
  }
};

// Obtener un skatepark por ID
export const getSkateparkById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching skatepark by ID:', error.message || error); // Mejora del manejo de error
    throw new Error('Unable to fetch skatepark details. Please try again later.');
  }
};
