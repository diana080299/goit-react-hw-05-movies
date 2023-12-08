import Header from 'components/Header/Header';
import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router';

const Home = lazy(() => import('pages/Home'));
const Movie = lazy(() => import('pages/Movie/Movie'));
const MovieSearch = lazy(() => import('pages/MoviesSearch/MoviesSearch'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

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
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </div>
  );
};
