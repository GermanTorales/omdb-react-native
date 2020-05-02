import React from "react";
import { Text, FlatList, View } from "react-native";

import Movie from "./Movie";
import styles from "./moviesStyle";
import Title from "../Common/title/Title";
import InputSearch from "../Common/inputSearch/InputSearch";

export default ({ movies, handleMovie }) => (
  <styles.Container>
    <Title name="OMDb Movie Searcher" />
    <InputSearch />
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <Movie key={item.imdbId} handleMovie={handleMovie} singleMovie={item} />
      )}
      keyExtractor={(item) => item.id}
    />
  </styles.Container>
);
