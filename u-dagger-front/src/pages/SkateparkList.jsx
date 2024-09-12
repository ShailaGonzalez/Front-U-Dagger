
import React, { useState, useEffect } from 'react';
import { getSkateparks } from '../services/skateparkService';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SkateparkListContainer = styled.div`
  padding: 2em;
  max-width: 1200px;
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

  ul {
    list-style: none;
    padding: 0;

    @media (max-width: 30em) {
      padding: 0.5em;
    }
  }

  li {
    margin: 1em 0;

    @media (max-width: 30em) {
      font-size: 0.875em;
      margin: 0.75em 0;
    }

    @media (min-width: 30em) and (max-width: 48em) {
      font-size: 1em;
      margin: 0.75em 0;
    }

    @media (min-width: 48em) {
      font-size: 1em;
      margin: 1em 0;
    }
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
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
