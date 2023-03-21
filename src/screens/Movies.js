import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const Header = styled.View``;

const Footer = styled.View``;

const Movies = ({ navigation: { navigate } }) => {
  return (
    <>
      <Btn onPress={() => navigate("Stacks", { screen: "ScreenThree" })}>
        <Title>Movies</Title>
      </Btn>
    </>
  );
};

export default Movies;
