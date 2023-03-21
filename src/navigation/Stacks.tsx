import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import COLORS from "../utils/colors";

const ScreenOne = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("ScreenTwo")}>
      <Text>One</Text>
    </TouchableOpacity>
  );
};
const ScreenTwo = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("ScreenThree")}>
      <Text>Two</Text>
    </TouchableOpacity>
  );
};
const ScreenThree = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Search" })}>
      <Text>go to Search</Text>
    </TouchableOpacity>
  );
};
const NativeStack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        // presentation: "modal",
        animation: "fade",
        headerBackTitleVisible: false,
        headerTintColor: COLORS.YELLOW,
      }}
    >
      <NativeStack.Screen
        options={{ title: "1" }}
        name="ScreenOne"
        component={ScreenOne}
      />
      <NativeStack.Screen name="ScreenTwo" component={ScreenTwo} />
      <NativeStack.Screen
        name="ScreenThree"
        component={ScreenThree}
        // options={{ presentation: "modal" }}
      />
    </NativeStack.Navigator>
  );
};

export default Stacks;
