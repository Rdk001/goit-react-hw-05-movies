import axios from 'axios';

const API_KEY = 'fd665103ef9a190acae2277803e4888d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const MovieSearchApi = async value => {
  const data = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${value}`
  );
  return data.data;
};

const getMovieDetails = async (movieId, info) => {
  const data = await axios.get(`/movie/${movieId}${info}?api_key=${API_KEY}`);
  return data.data;
};

const getImages = async () => {
  const data = await axios.get(`/configuration?api_key=${API_KEY}`);
  return data.data;
};
export { MovieSearchApi, getMovieDetails, getImages };
