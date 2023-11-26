import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { Navbar, StyledLink } from './NavigationBar/NavigationBar.styled';
import Loader from './Loader/Loader';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);

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
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
