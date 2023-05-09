import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { MoviesContainer } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      return;
    }
    async function fetchSearchResult(query) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=0cafd553b6a217ff7b99743b1693af60&page=1&query=${query}`
      );
      return response.data.results.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    fetchSearchResult(query)
      .then(foundedMovies => {
        setMovies(foundedMovies);
      })
      .catch(error => {
        console.error(error.message);
        setMovies([]);
      });
  }, [query]);

  const handleInputChange = event => {
    if (event.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: event.target.value });
  };

  return (
    <MoviesContainer>
      <input type="text" value={query} onChange={handleInputChange} />
      <h1>Found movies</h1>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={movie.id} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </MoviesContainer>
  );
};

export default Movies;
