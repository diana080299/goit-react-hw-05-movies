import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPopularMovies } from 'service/api';

const Home = () => {
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovieReques = async () => {
      const response = await getPopularMovies();
      try {
        setMovie(response);
      } catch (error) {
        alert(error.message);
      }
    };
    getMovieReques();
  }, []);

  return <div>{movie && <MovieList movies={movie} location={location} />}</div>;
};

export default Home;
