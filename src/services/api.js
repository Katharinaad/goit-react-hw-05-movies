import axios from 'axios';

const MOVIE_KEY = '2934260db25ec3438bb84e6ea1119c87';
const apiBase = 'https://api.themoviedb.org/3';
const apiMovieDetailed = 'https://api.themoviedb.org/3/movie';
const apiMoviesSearch = 'https://api.themoviedb.org/3/search/movie';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${apiBase}/trending/movie/day?api_key=${MOVIE_KEY}`
    );
    console.log(response.data.results);
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
  }
};

// for page Movies
// url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=2934260db25ec3438bb84e6ea1119c87'

// export const fetchMoviesSearch = async query => {
//   try {
//     const response = await axios.get(
//       `${apiMoviesSearch}?${query}&api_key=${MOVIE_KEY}`
//     );
//     console.log(response.data.results);
//     return response.data;
//   } catch (error) {
//     console.error('Error searching movies:', error);
//     return [];
//   }
// };

export const fetchMoviesSearch = async searchTerm => {
  try {
    if (!searchTerm) {
      return []; // if no search term is provided
    }
    const response = await axios.get(`${apiMoviesSearch}`, {
      params: {
        api_key: MOVIE_KEY,
        query: searchTerm,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

// fetch details about an exact movie
// url 'https://api.themoviedb.org/3/movie/343611?api_key=2934260db25ec3438bb84e6ea1119c87'

export const fetchMovieDetailed = async movieId => {
  try {
    const response = await axios.get(
      `${apiMovieDetailed}/${movieId}?api_key=${MOVIE_KEY}`
    );
    console.log(response.data.results);
    return response.data;
  } catch (error) {
    console.error('Error of getting information:', error);
  }
};
