import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/api';

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
        console.log('Error', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
};

export default HomePage;
