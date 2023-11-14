// import { NavLink } from 'react-router-dom';

import { Navbar, StyledLink } from './App.styled';

export const App = () => {
  return (
    <header>
      <Navbar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Navbar>
    </header>
  );
};
