import { useEffect, useState } from 'react';
import css from './HomePage.module.css';
import { useLocation, Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/moviesAPI';

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data.data.results));
  }, []);

  return (
    <main className={css.main}>
      <h1 className={css.heading}>Trending movies as of today</h1>
      <ul className={css.list}>
        {movies.map(movie => (
          <li key={movie.id} className={css.item}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.link}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
