import axios from 'axios';

const API_KEY = 'fd665103ef9a190acae2277803e4888d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const HomeApi = async () => {
  const data = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data.data;
};

export default HomeApi;
