import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '0cafd553b6a217ff7b99743b1693af60';

export const fetchTrending = async () => {
  const params = {
    api_key: API_KEY,
    page: 1,
  };
  const { data } = await axios.get('/trending/movie/day', { params });
  return data.results;
};

export const fetchSearchResult = async query => {
  const params = {
    api_key: API_KEY,
    page: 1,
    query,
  };
  const { data } = await axios.get('/search/movie', { params });
  return data.results.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
};

export const fetchOneMovie = async movieId => {
  const params = {
    api_key: API_KEY,
    page: 1,
  };
  const { data } = await axios.get(`/movie/${movieId}`, { params });
  console.log(data);
  return data;
};

export const fetchCast = async movieId => {
  const params = {
    api_key: API_KEY,
    page: 1,
    language: 'en-US',
  };
  const { data } = await axios.get(`/movie/${movieId}/credits`, { params });
  return data;
};

export const fetchReviews = async movieId => {
  const params = {
    api_key: API_KEY,
    page: 1,
    language: 'en-US',
  };
  const { data } = await axios.get(`/movie/${movieId}/reviews`, { params });
  return data.results;
};
