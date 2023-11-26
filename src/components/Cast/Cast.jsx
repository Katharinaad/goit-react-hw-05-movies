import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from 'services/api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCastInformation = async () => {
      try {
        const data = await fetchActors(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log('Error fetching details:', error);
      }
    };

    fetchCastInformation();
  }, [movieId]);

  return (
    <div>
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
    </div>
  );
};
