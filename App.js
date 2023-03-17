import React from "react";
import { View, Text } from "react-native";
import { useCallback, useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        //폰트 가져오기
        await Font.loadAsync(Entypo.font);

        //SetTimeout 5초해주기
        //API 호출 등 화면 렌더링 전에 미리 처리할 작업등
        await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  //로딩중 보여줄 화면
  if (!appIsReady) {
    return <Text>Loading...</Text>;
  }

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onLayout={onLayoutRootView}
    >
      <Text>We are done Loading! 👋</Text>
      <Entypo name="rocket" size={30} />
    </View>
  );
};

export default App;
