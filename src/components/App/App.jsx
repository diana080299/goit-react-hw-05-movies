import Cast from 'components/Cast/Cast';
import Header from 'components/Header/Header';
import Reviews from 'components/Reviews/Reviews';
import { lazy } from 'react';
import { Route, Routes } from 'react-router';

const Home = lazy(() => import('pages/Home'));
const Movie = lazy(() => import('pages/Movie/Movie'));
const MovieSearch = lazy(() => import('pages/MoviesSearch/MoviesSearch'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="/movies/:movieId" element={<MovieSearch />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
