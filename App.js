import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { View } from "react-native";
import { Provider } from "react-redux";

import HomeComponent from "./src/react/components/Home/HomeComponent";
import MoviesComponent from "./src/react/components/Movies/MoviesComponent";
import MovieComponent from "./src/react/components/Movie/MovieComponent";
import store from "./src/redux/store";

const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      "FiraSans-Bold": require("./assets/fonts/FiraSans-Bold.ttf"),
      "FiraSans-Regular": require("./assets/fonts/FiraSans-Regular.ttf"),
      "FiraSans-SemiBold": require("./assets/fonts/FiraSans-SemiBold.ttf"),
    });

    setFontsLoaded(true);
  };

  if (!fontsLoaded) return <View></View>;

  return (
    <Provider store={store()}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeComponent} />
          <Drawer.Screen name="Movies" component={MoviesComponent} />
          <Drawer.Screen name="Movie" component={MovieComponent} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
