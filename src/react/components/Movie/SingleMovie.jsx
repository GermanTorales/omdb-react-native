import React from "react";

import styles from "./singleMovieStyles";
import Title from "../Common/title/Title";
import InputSearch from "../Common/inputSearch/InputSearch";

export default ({ movie }) => (
  <styles.Container>
    <Title name="OMDb Movie Searcher" />
    <InputSearch />
    <styles.Info>
      <styles.MovieTitle>{movie.Title}</styles.MovieTitle>
      <styles.Poster>
        <styles.PosterImage source={{ uri: movie.Poster }} />
      </styles.Poster>
      <styles.Plot>{movie.Plot}</styles.Plot>
    </styles.Info>
  </styles.Container>
);
