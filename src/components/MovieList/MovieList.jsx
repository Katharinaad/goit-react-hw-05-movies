import { Link, useLocation } from 'react-router-dom';
import './MovieList.scss';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className="movie-list">
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
