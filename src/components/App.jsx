import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Navbar, StyledLink } from './App.styled';
import Loader from './Loader';

import HomePage from 'pages/HomePage';

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
          <Route path="/" />
          <Route index element={<HomePage />} />
          <Route path="/search" />
          <Route path="/post-details/:postId/*" />
        </Routes>
      </Suspense>
    </>
  );
};
