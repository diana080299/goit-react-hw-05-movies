import { Link } from 'react-router-dom';

export const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, name }) => {
        return (
          <li
            className="border w- p-3 border-success p-2 mb-2 border-opacity-25"
            key={id}
          >
            <Link
              className="text-xxl-end text-body-secondary"
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
