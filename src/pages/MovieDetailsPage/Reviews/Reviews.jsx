import css from './Reviews.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/moviesAPI';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    getMovieReviews(movieID).then(data => {
      data.data.total_results
        ? setReviews(data.data.results)
        : setReviews('There are no available reviews for the movie yet');
    });
  }, [movieID]);

  return typeof reviews === 'string' ? (
    reviews
  ) : (
    <ul className={css.list}>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
}
