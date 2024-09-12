// src/pages/UserManagement.jsx
import React from 'react';
import UserList from '../components/UserList';
import styled from 'styled-components';

const UserManagementContainer = styled.div`
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
`;

const UserManagement = () => {
  return (
    <UserManagementContainer>
      <UserList />
    </UserManagementContainer>
  );
};

export default UserManagement;
