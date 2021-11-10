import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import React from "react";
import { Platform, StatusBar, Text, View } from "react-native";

function c3() {
  console.log(useDeviceOrientation());
  return (
    <View
      style={{
        backgroundColor: "red",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width: "100%",
        height: useDeviceOrientation().landscape === true ? "100%" : "30%",
      }}
    ></View>
  );
}

export default c3;
