import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import COLORS from "../utils/colors";
import Detail from "@/screens/Detail";

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
        name="Detail"
        component={Detail}
      />
    </NativeStack.Navigator>
  );
};

export default Stacks;
