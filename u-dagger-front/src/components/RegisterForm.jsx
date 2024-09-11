import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30em;
  margin: auto;
  padding: 2em;
  background-color: #fff;
  border-radius: 0.5em;
  box-shadow: 0 0 0.625em rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h1`
  font-size: 1.8em;
  margin-bottom: 1em;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75em;
  margin: 0.5em 0;
  border: 1px solid #ddd;
  border-radius: 0.5em;
  font-size: 1em;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75em;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.5em;
  font-size: 1em;
  cursor: pointer;
  margin-top: 1em;

  &:hover {
    background-color: #0056b3;
  }
`;

const LinkStyled = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 1em;
  margin-top: 1em;

  &:hover {
    text-decoration: underline;
  }
`;

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <FormTitle>Register</FormTitle>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit">Register</Button>
      </form>
      <LinkStyled href="/login">Already have an account? Login here.</LinkStyled>
    </FormContainer>
  );
};

export default RegisterForm;
