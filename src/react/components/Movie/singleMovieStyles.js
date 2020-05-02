import styled from "styled-components";
import Constants from "expo-constants";

const styles = {
  Container: styled.View`
    width: 100%;
    height: 100%;
    margin-top: ${Constants.statusBarHeight};
  `,
};

export default styles;
