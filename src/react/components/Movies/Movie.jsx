import React from "react";

import styles from "./movieStyle";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ singleMovie, handleMovie }) => (
  <styles.CardContainer>
    <styles.Touchable onPress={() => handleMovie(singleMovie.imdbID)}>
      <styles.CardImage source={{ uri: singleMovie.Poster }} />
    </styles.Touchable>
  </styles.CardContainer>
);
