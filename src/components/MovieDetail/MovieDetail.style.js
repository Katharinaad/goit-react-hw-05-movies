import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4c4d52;

  &:hover {
    color: #bf4f74;
  }

  &.active {
    color: #bf4f74;
    font-weight: bold;
  }
`;
