import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfileContainer, ProfileImage, ProfileInfo, Button } from '../styles/UserProfileStyles'; // Importa los estilos

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
