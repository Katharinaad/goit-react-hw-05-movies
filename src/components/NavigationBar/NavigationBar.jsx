import { StyledLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <StyledLink exact to="/" activeClassName="active">
        Home
      </StyledLink>
      <StyledLink to="/movies" activeClassName="active">
        Movies
      </StyledLink>
    </nav>
  );
};

export default NavigationBar;
