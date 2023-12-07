import { Cast } from 'components/Cast/Cast';
import { Header } from 'components/Header/Header';
import { Reviews } from 'components/Reviews/Reviews';
import { Home } from 'pages/Home';
import { Movie } from 'pages/Movie/Movie';
import { MovieSearch } from 'pages/MoviesSearch/MoviesSearch';
import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';

export const App = () => {
  console.log('App component is rendered');
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: 'black',
      }}
    >
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
