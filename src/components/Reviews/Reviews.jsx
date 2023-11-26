import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    const fetchCastInformation = async () => {
      try {
        const data = await fetchReviews(movieId);
        setReview(data.results);
      } catch (error) {
        console.log('Error fetching details:', error);
      }
    };

    fetchCastInformation();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
