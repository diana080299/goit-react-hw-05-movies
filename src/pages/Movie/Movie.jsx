import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'service/api';

export const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const [params, setParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const value = params.get('query');
    if (!value) return;

    const handleMovieList = async () => {
      const response = await getSearchMovie(value);
      try {
        setMovie(response);
      } catch (error) {
        setError(error.message);
      }
    };
    handleMovieList();
  }, [params]);

  const handleChangeList = query => {
    if (query === '') {
      return setParams({});
    }
    setParams({ query });
  };

  return (
    <section>
      <div>
        <SearchForm onSubmit={handleChangeList} />
        {error && <p>Error: {error}</p>}
        {movie && <MovieList movies={movie} location={location} />}
      </div>
    </section>
  );
};
