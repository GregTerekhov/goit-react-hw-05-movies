import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CastItem, CastInfo } from './Cast.styled';

const API_KEY = '0cafd553b6a217ff7b99743b1693af60';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast(movieId) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
      );
      return response.data;
    }

    fetchCast(movieId)
      .then(credits => setCast(credits.cast))
      .catch(error => {
        console.error(error.message);
        setCast([]);
      });
  }, [movieId]);

  const imageUrl = 'https://image.tmdb.org/t/p/w300';

  return (
    <ul>
      {cast.map(actor => (
        <CastItem key={actor.id}>
          {actor.profile_path && (
            <img
              src={`${imageUrl}${actor.profile_path}`}
              alt={actor.name}
              width="120"
            />
          )}
          <CastInfo>
            <p>
              <b>Name:</b> {actor.name}
            </p>
            <p>
              <b>Character:</b> {actor.character}
            </p>
          </CastInfo>
        </CastItem>
      ))}
    </ul>
  );
};

export default Cast;
