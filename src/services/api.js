import axios from 'axios';

const MOVIE_KEY = '2934260db25ec3438bb84e6ea1119c87';
const apiBase = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${apiBase}/trending/movie/day?api_key=${MOVIE_KEY}`
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
  }
};
