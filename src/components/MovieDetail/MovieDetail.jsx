import './MovieDetail.scss';

import { Link } from 'react-router-dom';

export const MovieDetail = ({ movie }) => {
  if (!movie) {
    return <p>Loading...</p>;
  }
  const releaseYear = new Date(movie.release_date).getFullYear();

  const userScore = Math.round(movie.vote_average * 10);

  return (
    <>
      <div className="movie-detail">
        <div className="movie-image">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`Poster of ${movie.title}`}
          />
        </div>
        <div className="movie-info">
          <h1>
            {movie.title} ({releaseYear})
          </h1>
          <p>User Score: {userScore}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div className="additional-info">
        <h4>Additional Information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
