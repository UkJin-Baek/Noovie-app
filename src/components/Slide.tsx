import { makeImgPath } from "@/utils";
import React from "react";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import Poster from "./Poster";

const BgImg = styled.Image``;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;
const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Column = styled.View`
  width: 40%;
  margin-left: 15px;
`;

const Overview = styled.Text`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.6);
`;
const Votes = styled(Overview)`
  margin-top: 5px;
  font-size: 12px;
`;

interface SlideProps {
  id?: string;
  backdropPath: string;
  posterPath: string;
  originalTitle: string;
  overview: string;
  voteAverage: number;
}

const Slide: React.FC<SlideProps> = ({
  id,
  backdropPath,
  posterPath,
  originalTitle,
  overview,
  voteAverage,
}: SlideProps) => {
  return (
    <View style={{ flex: 1 }} key={id}>
      <BgImg
        source={{ uri: makeImgPath(backdropPath) || "" }}
        style={StyleSheet.absoluteFill}
        blurRadius={30}
      />
      <Wrapper>
        <Poster path={posterPath} />
        <Column>
          <Title>{originalTitle}</Title>
          <Overview>{overview.slice(0, 90)}...</Overview>
          {voteAverage > 0 ? <Votes>⭐️{voteAverage}</Votes> : null}
        </Column>
      </Wrapper>
    </View>
  );
};

export default Slide;
