import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getUserById, createUser, updateUser } from '../services/userService';

const UserForm = () => {
  const { id } = useParams(); // Obtiene el ID de los parámetros de la URL
  const history = useHistory(); // Para redirigir después de la acción
  const [user, setUser] = useState({ name: '', email: '' }); // Estado para el formulario
  const [error, setError] = useState(null); // Estado para errores
  const [loading, setLoading] = useState(false); // Estado para carga

  useEffect(() => {
    if (id) {
      // Si hay un ID en la URL, es una edición
      const fetchUser = async () => {
        setLoading(true);
        try {
          const data = await getUserById(id); // Obtiene los datos del usuario
          setUser(data); // Establece el estado con los datos del usuario
        } catch (err) {
          setError('Failed to fetch user.');
        } finally {
          setLoading(false);
        }
      };
      fetchUser();
    }
  }, [id]);

  // Maneja el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (id) {
        // Si hay un ID, actualiza el usuario
        await updateUser(id, user);
      } else {
        // Si no hay ID, crea un nuevo usuario
        await createUser(user);
      }
      history.push('/users'); // Redirige a la lista de usuarios después de guardar
    } catch (err) {
      setError('Failed to save user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>{id ? 'Edit User' : 'Add User'}</h1>
      {loading && <p>Loading...</p>} {/* Mostrar carga */}
      {error && <p>Error: {error}</p>} {/* Mostrar errores */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default UserForm;
