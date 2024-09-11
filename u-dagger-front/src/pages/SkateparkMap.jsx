// src/pages/SkateparkMap.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSkateparkById } from '../services/skateparkService';
import styled from 'styled-components';

const SkateparkMapContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }

  iframe {
    width: 100%;
    height: 450px;
    border: none;
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
