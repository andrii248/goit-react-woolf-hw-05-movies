import { useState, useEffect } from 'react';
import css from './MoviesPage.module.css';

import Notiflix from 'notiflix';
import { searchMovies } from '../../services/moviesAPI';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  function onFormSubmit(query) {
    setSearchParams({ query: query });
  }

  useEffect(() => {
    const query = searchParams.get('query');

    if (query === null) {
      return;
    }

    searchMovies(query).then(data => {
      if (data.data.total_results === 0) {
        Notiflix.Notify.failure(`Oops! No movie found containing ${query}`);
        return;
      }
      setMovies(data.data.results);
    });
  }, [searchParams]);

  useEffect(() => {
    return setMovies([]);
  }, []);

  return (
    <div className={css.movies}>
      <Searchbar onSubmit={onFormSubmit} />
      {movies.length > 0 && <MoviesList moviesList={movies} />}
    </div>
  );
}
