import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast(movieId) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0cafd553b6a217ff7b99743b1693af60&language=en-US`
      );
      console.log(response.data);
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
        <li key={actor.id}>
          {actor.profile_path && (
            <img src={`${imageUrl}${actor.profile_path}`} alt="" width="160" />
          )}
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
