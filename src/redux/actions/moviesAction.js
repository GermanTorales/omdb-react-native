import { SET_MOVIES, SET_SINGLE_MOVIE } from "../constants/moviesConstants";
import Axios from "axios";
import { API } from "../../../config";

const setMoviesSearch = (movies) => ({
  type: SET_MOVIES,
  movies,
});

const setSingleMovie = (movie) => ({
  type: SET_SINGLE_MOVIE,
  movie,
});

export const fetchMoviesSearch = (title) => (dispatch) => {
  return Axios.get(`${API}+&s=${title}`).then((response) => {
    dispatch(setMoviesSearch(response.data));
    return response.data;
  });
};

export const fetchSingleMovie = (id) => (dispatch) => {
  return Axios.get(`${API}+&i=${id}`).then((response) => {
    dispatch(setSingleMovie(response.data));
    return response.data;
  });
};
