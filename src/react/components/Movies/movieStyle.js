import styled from "styled-components";

const styles = {
  CardContainer: styled.View`
    flex: 1;
    flex-direction: row;
    margin: 20px auto;
    width: 80%;
    height: 500px;
  `,

  CardImage: styled.Image`
    flex: 1;
    position: absolute;
    width: 100%;
    height: 100%;
  `,

  Touchable: styled.TouchableOpacity`
    flex: 1;
  `,
};

export default styles;
