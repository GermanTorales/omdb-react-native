import Constants from "expo-constants";
import styled from "styled-components";

const styles = {
  Container: styled.View`
    flex: 1;
    margin-top: ${Constants.statusBarHeight};
  `,

  Title: styled.Text`
    font-size: 36px;
    text-align: center;
    margin-top: ${Constants.statusBarHeight};
  `,

  Search: styled.TextInput`
    width: 80%;
    height: 40px;
    margin: 10px auto 20px;
    font-family: "FiraSans-Regular";
    font-size: 22px;
    padding-left: 10px;
    background: #e5e5e5;
  `,
};

export default styles;
