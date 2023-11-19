import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from '../../services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParam] = useSearchParams();
  const query = searchParam.get('searchQuery');

  useEffect(() => {
    if (query) {
      //only fetch if there is a query
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const data = await fetchMoviesSearch(query);
          console.log(data);
          setMovies([...data.results]);
        } catch (error) {
          console.error('Error searching for movies:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [query]);
};

export default Movies;
