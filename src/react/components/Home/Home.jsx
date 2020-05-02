import React from "react";
import { Text } from "react-native";

import styles from "./homeStyle";

export default ({ onSearch, clearInput, onChangeInput, input }) => (
  <styles.Container>
    <styles.Image
      source={{
        uri:
          "https://cdn.pixabay.com/photo/2015/12/09/17/12/popcorn-1085072_960_720.jpg",
      }}
    />
    <styles.Title>OMDB movie API</styles.Title>
    <styles.InputSearch
      value={input}
      placeholder="Search movie"
      onChange={onChangeInput}
    />
    <styles.Buttons>
      <styles.Button
        underlayColor={"#1968A2"}
        onPress={clearInput}
        color={"#289DF3"}
      >
        <styles.InputText>Clear</styles.InputText>
      </styles.Button>
      <styles.Button
        onPress={onSearch}
        underlayColor={"#00930B"}
        color={"#00BF0E"}
      >
        <styles.InputText>Search</styles.InputText>
      </styles.Button>
    </styles.Buttons>
  </styles.Container>
);
