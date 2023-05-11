import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import { CastItem, CastInfo } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
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
