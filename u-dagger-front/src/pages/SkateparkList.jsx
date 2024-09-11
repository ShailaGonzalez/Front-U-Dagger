// src/pages/SkateparkList.jsx
import React, { useState, useEffect } from 'react';
import { getSkateparks } from '../services/skateparkService';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SkateparkListContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const SkateparkList = () => {
  const [skateparks, setSkateparks] = useState([]);

  useEffect(() => {
    const fetchSkateparks = async () => {
      const data = await getSkateparks();
      setSkateparks(data);
    };
    fetchSkateparks();
  }, []);

  return (
    <SkateparkListContainer>
      <h1>Skatepark List</h1>
      <ul>
        {skateparks.map((skatepark) => (
          <li key={skatepark.id}>
            {skatepark.name} - {skatepark.location}
            <Link to={`/skatepark-map/${skatepark.id}`}> View on Map</Link>
          </li>
        ))}
      </ul>
    </SkateparkListContainer>
  );
};

export default SkateparkList;
