import { MovieDetail } from 'components/MovieDetail/MovieDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetailed } from 'services/api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // fetch movie details
    const fetchMovie = async () => {
      try {
        const data = await fetchMovieDetailed(movieId);
        setMovie(data);
      } catch (error) {
        console.log('Error fetching details for the movie:', error);
      }
    };
    fetchMovie();
  }, [movieId]);

  return <MovieDetail movie={movie} />;
};

export default MovieDetailsPage;
