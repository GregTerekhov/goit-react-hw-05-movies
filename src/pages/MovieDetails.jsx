import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { fetchOneMovie } from 'services/api';
import { RxArrowLeft, RxArrowRight } from 'react-icons/rx';
import {
  BackButton,
  DetailsContainer,
  MovieInfo,
  AdditionalInfo,
  AdditionalList,
  SubMenuLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
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
  const productionCountries = movie.production_countries;

  return (
    <DetailsContainer>
      <BackButton to={backLinkLocationRef.current}>
        <RxArrowLeft />
        Go back
      </BackButton>
      <MovieInfo>
        {posterPath && (
          <img src={`${imageUrl}${posterPath}`} alt={movie.title} />
        )}
        <div>
          <h2>
            {movie.title} ({releaseDate ? releaseDate : movie.status})
          </h2>
          <p>
            Made by:{' '}
            {productionCountries &&
              productionCountries.map(country => country.name).join(', ')}
          </p>
          <p>User Score: {countUserScore()}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{genres && genres.map(genre => genre.name).join(' ')} </p>
        </div>
      </MovieInfo>
      <AdditionalInfo>
        <h3>Additional information</h3>
        <AdditionalList>
          <li>
            <SubMenuLink to="cast">
              <RxArrowRight />
              Cast
            </SubMenuLink>
          </li>
          <li>
            <SubMenuLink to="reviews">
              <RxArrowRight />
              Reviews
            </SubMenuLink>
          </li>
        </AdditionalList>
        <Outlet />
      </AdditionalInfo>
    </DetailsContainer>
  );
};

export default MovieDetails;
