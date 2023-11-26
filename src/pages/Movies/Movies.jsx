import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from '../../services/api';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';

// import {
//   NotificationManager,
//   NotificationContainer,
// } from 'react-notifications';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParam] = useSearchParams();
  const query = searchParam.get('query');

  useEffect(() => {
    if (query) {
      //only fetch if there is a query
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const data = await fetchMoviesSearch(query);
          setMovies([...data.results]);
        } catch (error) {
          console.log('No such movie found:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [query]);

  return (
    <>
      {isLoading && <Loader />}
      <Searchbar />

      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
