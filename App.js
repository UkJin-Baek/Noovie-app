import React from "react";
import { View, Text, Image } from "react-native";
import { useCallback, useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/Tabs";
import Stacks from "./src/navigation/Stacks";
import Root from "./src/navigation/Root";

//유틸 함수로 분리하기
const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const loadAssets = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });

const App = () => {
  const [ready, setIsReady] = useState(false);

  const startLoading = async () => {
    const fonts = await loadFonts([Ionicons.font, Entypo.font]);
    const images = await loadAssets([require("./myFace.jpg")]);

    await Promise.all([...fonts, ...images]);
  };

  useEffect(() => {
    const prepare = async () => {
      try {
        await startLoading();

        //preload something
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (ready) {
      await SplashScreen.hideAsync();
    }
  }, [ready]);

  //로딩중 보여줄 화면
  if (!ready) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading...👋</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default App;
