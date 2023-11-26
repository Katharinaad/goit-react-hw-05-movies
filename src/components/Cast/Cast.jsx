import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from 'services/api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [showCast, setShowCast] = useState(false);

  useEffect(() => {
    const fetchCastInformation = async () => {
      try {
        const data = await fetchActors(movieId);
        setCast(data.cast);
      } catch (error) {}
    };
    if (showCast) {
      fetchCastInformation();
    }
  }, [movieId, showCast]);

  const toggleCast = () => {
    setShowCast(!showCast);
  };

  return (
    <div>
      <span
        onClick={toggleCast}
        style={{
          cursor: 'pointer',
          textDecoration: 'none',
          color: '#bf4f74',
          fontWeight: 'bold',
        }}
      >
        {showCast ? 'Hide Cast' : 'Show Cast'}
      </span>
      {showCast && (
        <ul>
          {cast.map(actor => {
            return (
              <li key={actor.id}>
                <p>{actor.name}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`Poster of ${actor.name}`}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
