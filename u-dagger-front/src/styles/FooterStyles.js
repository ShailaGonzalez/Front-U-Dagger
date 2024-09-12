// src/components/FooterStyles.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 1em;
  text-align: center;

  @media (max-width: 30em) {
    padding: 0.5em;
  }

  @media (min-width: 30em) and (max-width: 48em) {
    padding: 0.75em;
  }

  @media (min-width: 48em) {
    padding: 1em;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;

  @media (max-width: 30em) {
    flex-direction: column;
  }

  @media (min-width: 30em) and (max-width: 48em) {
    flex-direction: row;
  }

  @media (min-width: 48em) {
    flex-direction: row;
  }
`;

export const NavItem = styled.li`
  margin: 0 0.5em;

  @media (max-width: 30em) {
    margin: 0.5em 0;
  }

  @media (min-width: 30em) and (max-width: 48em) {
    margin: 0 1em;
  }

  @media (min-width: 48em) {
    margin: 0 1em;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: ${props => (props.isProfile ? 'bold' : 'normal')};

  @media (max-width: 30em) {
    font-size: 0.875em;
  }

  @media (min-width: 30em) and (max-width: 48em) {
    font-size: 1em;
  }

  @media (min-width: 48em) {
    font-size: 1em;
  }
`;

export const ProfileLink = styled(NavLink)`
  font-weight: bold;
`;

