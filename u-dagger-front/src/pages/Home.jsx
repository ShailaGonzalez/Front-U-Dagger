import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2em;
  max-width: 75em;
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

const Home = () => {
  return (
    <HomeContainer>
      <h1>U!Dagger!!</h1>
      <p>Jewelry for Skaters</p>
    </HomeContainer>
  );
};

export default Home;
