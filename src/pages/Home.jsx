import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HomeContainer, HomeTitle } from './Home.styled';

const API_KEY = '0cafd553b6a217ff7b99743b1693af60';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => console.error(error.message));
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Trending movies</HomeTitle>
      <ul>
        {movies.length > 0 &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </HomeContainer>
  );
};

export default Home;
