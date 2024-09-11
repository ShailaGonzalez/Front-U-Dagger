import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../services/userService';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2em;
  max-width: 100%;
  margin: auto;
  box-sizing: border-box;

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

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25em;
  padding: 0.75em 1.5em;
  cursor: pointer;

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

const List = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0;

  @media (max-width: 30em) {
    padding: 0.5em;
  }
`;

const ListItem = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 30em) {
    font-size: 0.875em;
    padding: 0.75em 0;
  }

  @media (min-width: 30em) and (max-width: 48em) {
    font-size: 1em;
    padding: 0.75em 0;
  }

  @media (min-width: 48em) {
    font-size: 1em;
    padding: 1em 0;
  }
`;

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(id);
        setUsers(users.filter(user => user.id !== id));
      } catch (err) {
        setError('Failed to delete user.');
      }
    }
  };

  return (
    <Container>
      <h1>Users List</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <Link to="/users/add"><Button>Add User</Button></Link>
      <List>
        {users.map(user => (
          <ListItem key={user.id}>
            {user.name} - {user.email}
            <div>
              <Button onClick={() => handleDelete(user.id)}>Delete</Button>
              <Link to={`/users/${user.id}`}>Edit</Link>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default UsersList;
