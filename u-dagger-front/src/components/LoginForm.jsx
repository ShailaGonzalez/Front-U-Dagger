import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30em; /* 480px */
  margin: auto;
  padding: 2em;
  background-color: #fff;
  border-radius: 0.5em; /* 8px */
  box-shadow: 0 0 0.625em rgba(0, 0, 0, 0.1); /* 10px */
`;

const FormTitle = styled.h1`
  margin-bottom: 1em;
  font-size: 1.5em; /* 24px */
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75em; /* 12px */
  margin: 0.5em 0;
  border: 0.0625em solid #ddd; /* 1px */
  border-radius: 0.25em; /* 4px */
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75em; /* 12px */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25em; /* 4px */
  font-size: 1em; /* 16px */
  cursor: pointer;
  margin-top: 1em;

  &:hover {
    background-color: #0056b3;
  }
`;

const LinkStyled = styled.a`
  color: #007bff;
  text-decoration: none;
  margin-top: 1em;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <FormTitle>Login</FormTitle>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </form>
      <LinkStyled href="/register">Don't have an account? Register here.</LinkStyled>
    </FormContainer>
  );
};

export default LoginForm;
