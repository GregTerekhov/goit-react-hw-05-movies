import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { fetchSearchResult } from 'services/api';
import MoviesList from 'components/MoviesList';
import { MoviesContainer } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      return;
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
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        type="text"
        value={query}
        placeholder="Enter movie's title..."
        onChange={handleInputChange}
      />
      {query && <h1>Found movies</h1>}
      {!!movies.length && <MoviesList movies={movies} />}
    </MoviesContainer>
  );
};

export default Movies;
