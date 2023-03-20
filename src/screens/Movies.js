import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Movies = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity
      onPress={() => navigate("Stacks", { screen: "ScreenThree" })}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Movies</Text>
    </TouchableOpacity>
  );
};

export default Movies;
