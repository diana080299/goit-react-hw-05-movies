import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'service/api';
import { Title } from './Reviews.styled';

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchReviewsData = async () => {
      try {
        const reviewsInfo = await fetchReviews(movieId);
        setReviewsData(reviewsInfo.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviewsData();
  }, [movieId]);

  return (
    <div>
      {reviewsData ? (
        <ul>
          {reviewsData.map(({ id, author, content }) => (
            <li key={id}>
              <Title>Author: {author}</Title>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: 'red' }}>Rewiews is undefined</p>
      )}
    </div>
  );
};
export default Reviews;
