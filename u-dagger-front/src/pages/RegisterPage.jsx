import React from 'react';
import RegisterForm from '../components/RegisterForm';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;

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

const RegisterPage = () => {
  return (
    <PageContainer>
      <RegisterForm />
    </PageContainer>
  );
};

export default RegisterPage;
