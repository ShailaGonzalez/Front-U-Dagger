import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001', // URL del backend
    timeout: 10000, // Tiempo de espera para las solicitudes
    headers: {'Content-Type': 'application/json'}
});

export default instance;
