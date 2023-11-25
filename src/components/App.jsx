import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { Navbar, StyledLink } from './NavigationBar/NavigationBar.styled';
import Loader from './Loader/Loader';

import HomePage from 'pages/HomePage/HomePage';
import Movies from 'pages/Movies/Movies';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';

export const App = () => {
  return (
    <>
      <header>
        <Navbar>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Navbar>
      </header>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast"></Route>
            <Route path="reviews"></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
