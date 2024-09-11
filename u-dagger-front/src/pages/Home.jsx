// src/pages/Home.jsx
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>U!Dagger!!</h1>
      <p>Jewelry for Skaters</p>
    </HomeContainer>
  );
};

export default Home;
