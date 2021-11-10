import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

import color from "../components/color";

export default function page2() {
  return (
    <View style={Styles.container}>
      <View style={Styles.closeIcon}></View>
      <View style={Styles.deleteIcon}></View>
      <Image
        style={Styles.image}
        source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
        resizeMode="contain"
      ></Image>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: color.primary,
    top: 40,
    left: 30,
    position: "absolute",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: color.secondary,
    top: 40,
    right: 30,
    position: "absolute",
  },
});
