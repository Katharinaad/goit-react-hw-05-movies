import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: start;
  background: #fff;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
  text-decoration: none;
  margin-right: 1rem;
  padding: 0.25rem 0;

  &:hover {
    color: #bf4f74;
  }

  &.active {
    color: #bf4f74;
    font-weight: bold;
  }
`;
