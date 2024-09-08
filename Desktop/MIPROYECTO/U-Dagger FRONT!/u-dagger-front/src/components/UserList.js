import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../services/userService';
import { Link } from 'react-router-dom';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Estado para carga

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users.'); // Mensaje de error general
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) { // Confirmación antes de eliminar
      try {
        await deleteUser(id);
        setUsers(users.filter(user => user.id !== id));
      } catch (err) {
        setError('Failed to delete user.'); // Mensaje de error general
      }
    }
  };

  return (
    <div>
      <h1>Users List</h1>
      {loading && <p>Loading...</p>} {/* Mostrar carga */}
      {error && <p>Error: {error}</p>} {/* Mostrar errores */}
      <Link to="/users/add"><button>Add User</button></Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            <Link to={`/users/${user.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
