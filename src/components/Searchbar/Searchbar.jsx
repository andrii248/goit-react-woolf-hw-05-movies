import css from './Searchbar.module.css';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

export function Searchbar({ onSubmit }) {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query'));

  function formSubmit(e) {
    e.preventDefault();

    if (searchQuery === '' || searchQuery === null) {
      Notiflix.Notify.warning('Please enter the name of the movie to search');
      return;
    }

    onSubmit(searchQuery);
  }

  return (
    <form className={css.form} onSubmit={formSubmit}>
      <label>
        <input
          type="text"
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery === null ? '' : searchQuery}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </label>
    </form>
  );
}
