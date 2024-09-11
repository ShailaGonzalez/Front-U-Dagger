// src/pages/UserManagement.jsx
import React from 'react';
import UserList from '../components/UserList';
import styled from 'styled-components';

const UserManagementContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 10px;
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
