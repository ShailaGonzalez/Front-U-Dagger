// src/components/FooterStyles.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 10px;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: ${props => (props.isProfile ? 'bold' : 'normal')};
`;

export const ProfileLink = styled(NavLink)`
  font-weight: bold;
`;
