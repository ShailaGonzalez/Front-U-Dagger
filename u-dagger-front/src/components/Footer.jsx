import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 1em;
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 48em) {
    padding: 0.75em;
  }

  @media (max-width: 30em) {
    padding: 0.5em;
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0 1em;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 1em;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 48em) {
    li {
      margin: 0 0.75em;
    }

    a {
      font-size: 0.875em;
    }
  }

  @media (max-width: 30em) {
    li {
      margin: 0 0.5em;
    }

    a {
      font-size: 0.75em;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users List</Link></li>
          <li><Link to="/products">Products List</Link></li>
          <li><Link to="/skateparks">Skateparks List</Link></li>
          <li><Link to="/skatepark-map">Skatepark Map</Link></li>
          <li><Link to="/add-product">Add Product</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </Nav>
    </FooterContainer>
  );
};

export default Footer;
