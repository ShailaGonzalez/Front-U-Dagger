import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  max-width: 800px;
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

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 1em;

  @media (max-width: 30em) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 30em) and (max-width: 48em) {
    width: 125px;
    height: 125px;
  }
`;

const ProfileInfo = styled.div`
  text-align: center;
  margin-bottom: 1em;

  h1 {
    font-size: 1.5em;
    margin: 0;

    @media (max-width: 30em) {
      font-size: 1.2em;
    }
  }

  p {
    font-size: 1em;
    color: #555;

    @media (max-width: 30em) {
      font-size: 0.875em;
    }
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25em;
  padding: 0.75em 1.5em;
  font-size: 1em;
  cursor: pointer;
  margin: 0.5em;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 30em) {
    padding: 0.5em 1em;
    font-size: 0.875em;
  }

  @media (min-width: 30em) and (max-width: 48em) {
    padding: 0.75em 1.25em;
    font-size: 1em;
  }
`;

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150'
  });

  return (
    <ProfileContainer>
      <ProfileImage src={user.profilePicture} alt="Profile" />
      <ProfileInfo>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </ProfileInfo>
      <Link to="/edit-profile"><Button>Edit Profile</Button></Link>
      <Link to="/change-password"><Button>Change Password</Button></Link>
      <Link to="/my-products"><Button>My Products</Button></Link>
      <Link to="/my-purchases"><Button>My Purchases</Button></Link>
    </ProfileContainer>
  );
};

export default UserProfile;
