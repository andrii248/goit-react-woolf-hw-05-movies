import { useEffect, useState } from 'react';
import css from './HomePage.module.css';
import { getTrendingMovies } from 'services/moviesAPI';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Home() {
  //   const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data.data.results));
  }, []);

  return (
    <main className={css.main}>
      <h1 className={css.heading}>Trending movies as of today</h1>
      <MoviesList moviesList={movies} />
    </main>
  );
}
