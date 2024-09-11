import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getUserById, createUser, updateUser } from '../services/userService';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 2em;
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

const Input = styled.input`
  width: 100%;
  padding: 0.75em;
  margin: 0.5em 0;
  border-radius: 0.25em;
  border: 1px solid #ccc;

  @media (max-width: 30em) {  
    padding: 0.5em;
    margin: 0.5em 0;
  }

  @media (min-width: 30em) and (max-width: 48em) { 
    padding: 0.75em;
    margin: 0.75em 0;
  }

  @media (min-width: 48em) {  
    padding: 0.75em;
    margin: 1em 0;
  }
`;

const Button = styled.button`
  padding: 0.75em 1.5em;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25em;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }

  @media (max-width: 30em) {  
    padding: 0.5em 1em;
  }

  @media (min-width: 30em) and (max-width: 48em) { 
    padding: 0.75em 1.25em;
  }

  @media (min-width: 48em) {  
    padding: 0.75em 1.5em;
  }
`;

const UserForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        setLoading(true);
        try {
          const data = await getUserById(id);
          setUser(data);
        } catch (err) {
          setError('Failed to fetch user.');
        } finally {
          setLoading(false);
        }
      };
      fetchUser();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (id) {
        await updateUser(id, user);
      } else {
        await createUser(user);
      }
      history.push('/users');
    } catch (err) {
      setError('Failed to save user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h1>{id ? 'Edit User' : 'Add User'}</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <Input
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
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <Button type="submit" disabled={loading}>
          {id ? 'Update' : 'Add'}
        </Button>
      </form>
    </Container>
  );
};

export default UserForm;
