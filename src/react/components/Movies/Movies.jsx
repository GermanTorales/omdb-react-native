import React from "react";
import { Text, FlatList, View } from "react-native";

import Movie from "./Movie";
import styles from "./moviesStyle";

export default ({ movies, handleMovie }) => (
  <styles.Container>
    <styles.Title>OMDb Movie Sercher</styles.Title>
    <styles.Search type="text" placeholder="Search" />
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <Movie key={item.imdbId} handleMovie={handleMovie} singleMovie={item} />
      )}
      keyExtractor={(item) => item.id}
    />
  </styles.Container>
);
