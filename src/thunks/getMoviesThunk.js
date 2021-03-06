import { isLoading, updateMovies, throwError } from '../actions';
import { cleanMovies } from '../utils/cleanMovies';

export const getMovies = (fetchUrl, genre) => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      const movieData = data.results;
      const movies = await cleanMovies(genre, movieData);
      dispatch(updateMovies(movies, genre));
      dispatch(isLoading(false));
      return Promise.all(movies);
    } catch (error) {
      dispatch(throwError('error'));
    }
  };
};

export default getMovies;
