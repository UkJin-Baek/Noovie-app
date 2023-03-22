import styled from "styled-components/native";

interface VotesProps {
  voteAverage: number;
}

const Text = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: 9px;
  margin-top: 5px;
  opacity: 0.8;
`;

const Votes: React.FC<VotesProps> = ({ voteAverage }) => {
  return (
    <Text>{voteAverage > 0 ? `⭐️${voteAverage}/10` : `Coming Soon`}</Text>
  );
};

export default Votes;
