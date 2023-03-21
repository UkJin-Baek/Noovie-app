//https://reactnavigation.org/docs/bottom-tab-navigator
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import TV from "../screens/TV";
import Search from "../screens/Search";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../utils/colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? COLORS.BLACK : COLORS.WHITE,
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? COLORS.BLACK : COLORS.WHITE,
        },
        tabBarActiveTintColor: isDark ? COLORS.YELLOW : COLORS.BLACK,
        tabBarInactiveTintColor: isDark ? COLORS.LIGHT_GRAY : COLORS.GRAY,
        headerStyle: {
          backgroundColor: isDark ? COLORS.BLACK : COLORS.WHITE,
        },
        headerTitleStyle: {
          color: isDark ? COLORS.WHITE : COLORS.BLACK,
        },
        headerRight: () => {
          return null;
        },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={"film-outline"} color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="TV"
        component={TV}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="tv-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons name={"search-outline"} color={color} size={size} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
