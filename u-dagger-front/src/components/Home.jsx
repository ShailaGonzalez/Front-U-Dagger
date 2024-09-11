import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 2em;

  h1 {
    font-size: 2em;
  }

  p {
    font-size: 1.25em;
  }

  @media (max-width: 48em) {
    padding: 1.5em;

    h1 {
      font-size: 1.75em;
    }

    p {
      font-size: 1em;
    }
  }

  @media (max-width: 30em) {
    padding: 1em;

    h1 {
      font-size: 1.5em;
    }

    p {
      font-size: 0.875em;
    }
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome Dagger</h1>
      <p>Treasure for Skaters</p>
    </HomeContainer>
  );
};

export default Home;
