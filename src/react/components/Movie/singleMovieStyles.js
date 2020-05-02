import styled from "styled-components";
import Constants from "expo-constants";

const styles = {
  Container: styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    margin-top: ${Constants.statusBarHeight};
  `,

  MovieTitle: styled.Text`
    font-size: 40px;
    font-family: "FiraSans-SemiBold";
  `,

  Poster: styled.View`
    flex: 1;
    width: 90%;
    height: 500px;
    margin: 30px auto;
  `,

  PosterImage: styled.Image`
    flex: 1;
    position: absolute;
    width: 100%;
    height: 100%;
  `,

  Plot: styled.Text`
    font-size: 20px;
    font-family: "FiraSans-Regular";
    text-align: justify;
  `,

  Info: styled.View`
    flex: 1;
    width: 90%;
    margin: 0 auto;
  `,
};

export default styles;
