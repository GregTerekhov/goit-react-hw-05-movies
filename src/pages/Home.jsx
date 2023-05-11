import { useEffect, useState } from 'react';
import { HomeContainer, HomeTitle } from './Home.styled';
import { fetchTrending } from 'services/api';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(response => {
        setMovies(response);
      })
      .catch(error => console.error(error.message));
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Trending movies</HomeTitle>
      {!!movies.length && <MoviesList movies={movies} />}
    </HomeContainer>
  );
};

export default Home;
