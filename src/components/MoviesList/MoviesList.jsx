import css from './MoviesList.module.css';
import { useLocation, Link } from 'react-router-dom';

export default function MoviesList({ moviesList }) {
  const location = useLocation();

  return (
    <div>
      <ul className={css.list}>
        {moviesList.map(movie => (
          <li key={movie.id}>
            <Link
              className={css.link}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
