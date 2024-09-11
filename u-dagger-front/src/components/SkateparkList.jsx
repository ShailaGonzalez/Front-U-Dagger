import React, { useState, useEffect } from 'react';
import { getSkateparks } from '../services/skateparkService';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2em;
  max-width: 50em;
  margin: auto;
  box-sizing: border-box;

  @media (max-width: 48em) {
    padding: 1em;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.5em;
  padding: 0.75em 1.5em;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 1em;

  &:hover {
    background-color: #0056b3;
  }
`;

const List = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0;
`;

const ListItem = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1em;

  @media (max-width: 48em) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DetailsLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-size: 1em;

  &:hover {
    text-decoration: underline;
  }
`;

const SkateparkList = () => {
  const [skateparks, setSkateparks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSkateparks = async () => {
      setLoading(true);
      try {
        const data = await getSkateparks();
        setSkateparks(data);
      } catch (err) {
        setError('Failed to fetch skateparks.');
      } finally {
        setLoading(false);
      }
    };
    fetchSkateparks();
  }, []);

  return (
    <Container>
      <h1>Skateparks List</h1>
      {error && <p className="error">{error}</p>}
      {loading && <p>Loading...</p>}
      <Link to="/skatepark-map"><Button>View Map</Button></Link>
      <List>
        {skateparks.map(skatepark => (
          <ListItem key={skatepark.id}>
            {skatepark.name} - {skatepark.location}
            <DetailsLink to={`/skateparks/${skatepark.id}`}>Details</DetailsLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SkateparkList;
