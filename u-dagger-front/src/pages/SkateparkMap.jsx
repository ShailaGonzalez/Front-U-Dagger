// src/pages/SkateparkMap.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSkateparkById } from '../services/skateparkService';
import styled from 'styled-components';

const SkateparkMapContainer = styled.div`
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

  iframe {
    width: 100%;
    height: 30em;

    @media (max-width: 30em) {
      height: 20em;
    }

    @media (min-width: 30em) and (max-width: 48em) {
      height: 25em;
    }

    @media (min-width: 48em) {
      height: 30em;
    }
  }
`;

const SkateparkMap = () => {
  const { id } = useParams();
  const [skatepark, setSkatepark] = useState(null);

  useEffect(() => {
    const fetchSkatepark = async () => {
      const data = await getSkateparkById(id);
      setSkatepark(data);
    };
    fetchSkatepark();
  }, [id]);

  if (!skatepark) return <p>Loading...</p>;

  return (
    <SkateparkMapContainer>
      <h1>{skatepark.name}</h1>
      <p>Location: {skatepark.location}</p>
      <iframe
        src={`https://www.google.com/maps?q=${skatepark.location}&output=embed`}
        title={skatepark.name}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </SkateparkMapContainer>
  );
};

export default SkateparkMap;
