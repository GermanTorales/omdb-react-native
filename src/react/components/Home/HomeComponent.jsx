import React, { useState } from "react";
import { connect } from "react-redux";

import { fetchMoviesSearch } from "../../../redux/actions/moviesAction";

import Home from "./Home";

const HomeComponent = ({ navigation, fetchMoviesSearch }) => {
  const [input, setInput] = useState("batman");

  const onChangeInput = (event) => {
    setInput(event.nativeEvent.text);
  };

  const onSearch = () => {
    fetchMoviesSearch(input).then(() => navigation.navigate("Movies"));
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <Home
      onChangeInput={onChangeInput}
      clearInput={clearInput}
      onSearch={onSearch}
      input={input}
    />
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMoviesSearch: (title) => dispatch(fetchMoviesSearch(title)),
  };
};

export default connect(null, mapDispatchToProps)(HomeComponent);
