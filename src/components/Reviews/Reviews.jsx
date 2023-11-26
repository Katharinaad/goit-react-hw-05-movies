import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReview] = useState([]);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    const fetchCastInformation = async () => {
      try {
        const data = await fetchReviews(movieId);
        setReview(data.results);
      } catch (error) {}
    };
    if (showReview) {
      fetchCastInformation();
    }
  }, [movieId, showReview]);

  const toggleReview = () => {
    setShowReview(!showReview);
  };

  return (
    <div>
      <span
        onClick={toggleReview}
        style={{
          cursor: 'pointer',
          textDecoration: 'none',
          color: '#bf4f74',
          fontWeight: 'bold',
        }}
      >
        {showReview ? 'Hide Review' : 'Show Review'}
      </span>
      {showReview && (
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
      )}
    </div>
  );
};
