import React from "react";
import { connect } from "react-redux";

import SingleMovie from "./SingleMovie";

const MovieComponent = ({ movie }) => {
  return <SingleMovie movie={movie} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.moviesReducer.singleMovie,
  };
};

export default connect(mapStateToProps, null)(MovieComponent);
