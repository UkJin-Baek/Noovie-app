import styled from "styled-components/native";
import Poster from "./Poster";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

interface HMediaProps {
  posterPath: string;
  originalTitle: string;
  releaseDate: string;
  overview: string;
}

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-weight: 600;
  margin-top: 7px;
`;

const HMovie = styled.View`
  padding: 0px 30px;
  flex-direction: row;
`;

const HColumn = styled.View`
  color: ${(props) => props.theme.textColor};
  margin-left: 15px;
  width: 80%;
`;

const Overview = styled.Text`
  color: ${(props) => props.theme.textColor};
  width: 80%;
`;

const Release = styled.Text`
  color: white;
  font-size: 12px;
  margin-vertical: 10px;
`;

const HMedia: React.FC<HMediaProps> = ({
  posterPath,
  originalTitle,
  releaseDate,
  overview,
}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Stacks", { screen: "Detail" });
  };

  return (
    <TouchableOpacity onPress={goToDetail}>
      <HMovie>
        <Poster path={posterPath} />
        <HColumn>
          <Title>{originalTitle}</Title>
          <Release>
            {new Date(releaseDate).toLocaleDateString("ko", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Release>
          <Overview>
            {overview && overview.length > 140
              ? `${overview.slice(0, 140)}...`
              : overview}
          </Overview>
        </HColumn>
      </HMovie>
    </TouchableOpacity>
  );
};

export default HMedia;
