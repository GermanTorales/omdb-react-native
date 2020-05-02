import Styled from "styled-components/native";

const styles = {};

styles.Container = Styled.View`
    flex: 1;
    display: flex;
    align-items: center;
`;

styles.Image = Styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
`;

styles.Title = Styled.Text`
    color:#000;
    width: 100%;
    text-align: center;
    background: #ffffffb4;
    font-size: 46px;
    position: absolute;
    top: 30%;
    font-family: "FiraSans-Bold"
`;

styles.InputSearch = Styled.TextInput`
    flex:1;
    position: absolute;
    top: 60%;
    width: 80%;
    height: 60px;
    border: 1px solid #000;
    font-family: "FiraSans-Regular"
    font-size: 20px;
    padding-left: 10px;
    background: #fff
`;

styles.Buttons = Styled.View`
    flex:1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: 70%;
    width: 80%;
    height: 60px;
`;

styles.InputText = Styled.Text`
    text-align: center;
    padding-top: 5px;
    font-size: 26px;
    font-family: "FiraSans-Regular"
    color: #fff;
`;

styles.Button = Styled.TouchableHighlight`
    width:49%;
    height: 80%;
    background: ${(props) => props.color}
    border: 0.7px solid #000;

`;

export default styles;
