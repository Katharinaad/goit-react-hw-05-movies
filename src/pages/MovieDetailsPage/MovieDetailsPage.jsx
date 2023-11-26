import Loader from 'components/Loader/Loader';
import { MovieDetail } from 'components/MovieDetail/MovieDetail';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetailed } from 'services/api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    // fetch movie details
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieDetailed(movieId);
        setMovie(data);
      } catch (error) {
        console.log('Error fetching details for the movie:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <Link to={backLinkHref.current}>Go Back</Link>
      <MovieDetail movie={movie} />
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
