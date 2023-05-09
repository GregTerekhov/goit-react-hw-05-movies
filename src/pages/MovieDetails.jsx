import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import {
  BackButton,
  DetailsContainer,
  MovieInfo,
  AdditionalInfo,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchOneMovie(movieId) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=0cafd553b6a217ff7b99743b1693af60`
      );
      console.log(response);
      return response.data;
    }

    fetchOneMovie(movieId)
      .then(chosenMovie => setMovie(chosenMovie))
      .catch(error => {
        console.error(error.message);
        setMovie({});
      });
  }, [movieId]);

  function countUserScore() {
    const average = movie.vote_average;
    const userScore = Math.round(average * 10).toFixed(0) + '%';
    return userScore;
  }

  const { genres } = movie;
  const releaseDate = new Date(movie.release_date).getFullYear();
  const imageUrl = 'https://image.tmdb.org/t/p/w300';
  const posterPath = movie.poster_path;

  return (
    <DetailsContainer>
      <BackButton to={backLinkLocationRef.current}>Go back</BackButton>
      <MovieInfo>
        {posterPath && (
          <img src={`${imageUrl}${posterPath}`} alt={movie.title} />
        )}
        <div>
          <h2>
            {movie.title} ({releaseDate})
          </h2>
          <p>User Score: {countUserScore()}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{genres && genres.map(genre => genre.name).join('  ')} </p>
        </div>
      </MovieInfo>
      <AdditionalInfo>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </AdditionalInfo>
    </DetailsContainer>
  );
};

export default MovieDetails;
