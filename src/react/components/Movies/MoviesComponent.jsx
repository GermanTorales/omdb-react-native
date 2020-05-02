import React from "react";
import { connect } from "react-redux";

import { fetchSingleMovie } from "../../../redux/actions/moviesAction";

import Movies from "./Movies";

const MoviesComponent = ({ movies, navigation, fetchSingleMovie }) => {
  const handleMovie = (id) => {
    fetchSingleMovie(id).then(() => {
      navigation.navigate("Movie");
    });
  };

  return <Movies handleMovie={handleMovie} movies={movies} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.moviesReducer.moviesStore.Search,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSingleMovie: (id) => dispatch(fetchSingleMovie(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesComponent);
