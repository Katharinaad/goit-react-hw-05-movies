import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrendingMovies();
        setMovies([...data.results]);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <h1>Trending Today</h1>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
