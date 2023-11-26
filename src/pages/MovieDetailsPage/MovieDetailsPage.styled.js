import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #bf4f74;
  display: inline-block;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 13px;
  padding: 5px 10px;
  text-align: center;

  margin: 4px 2px;
  cursor: pointer;
  border-radius: 3px;
  transition: background-color 0.3s;

  &:hover {
  }
  &.active {
    color: #bf4f74;
    font-weight: bold;
  }
`;
