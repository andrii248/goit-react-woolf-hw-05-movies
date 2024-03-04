import { Loader } from 'components/Loader/Loader';
import css from './MovieDetailsPage.module.css';
import { Suspense, useEffect, useState } from 'react';
import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
import { getImg, getMovieDetails } from 'services/moviesAPI';

export default function MovieDetails() {
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState('');
  const [image, setImage] = useState('');
  const { movieID } = useParams();

  useEffect(() => {
    getMovieDetails(movieID).then(data => {
      setMovie(data.data);
      setGenres(() => data.data.genres.map(genre => genre.name).join(', '));
      setImage(getImg(data.data.poster_path, 'w342'));
    });
  }, [movieID]);

  return (
    <div className={css.details}>
      <Link to={location?.state?.from ?? '/'} className={css.link}>
        <button type="button" className={css.backBtn}>
          Go back
        </button>
      </Link>

      <div className={css.wrap}>
        <img src={image} alt={movie.original_title} />
        <div className={css.info}>
          <h1>{movie.original_title}</h1>
          <p>Score: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{genres}</p>
        </div>
      </div>

      <div className={css.additionalInfo}>
        <h2>Additional Info</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <Link
              to="cast"
              state={{ from: location?.state?.from ?? '/' }}
              className={css.link}
            >
              Cast
            </Link>
          </li>

          <li className={css.item}>
            <Link
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
              className={css.link}
            >
              Reviews
            </Link>
          </li>
        </ul>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
