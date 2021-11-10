import React from "react";
import { ImageBackground, View, StyleSheet, Image, Text } from "react-native";

import color from "../components/color";

export default function page1() {
  return (
    <ImageBackground
      style={Styles.background}
      source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
      resizeMode="cover"
    >
      <View style={Styles.logo}>
        <Image style={Styles.logoImg} source={require("../assets/icon.png")} />
        <Text style={{ color: "#fff", fontSize: 20 }}>Demo-1 native App</Text>
      </View>
      <View style={Styles.logInBtn}></View>
      <View style={Styles.registerBtn}></View>
    </ImageBackground>
  );
}

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logInBtn: {
    backgroundColor: color.primary,
    width: "100%",
    height: 70,
  },
  registerBtn: {
    backgroundColor: color.secondary,
    width: "100%",
    height: 70,
  },
  logo: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logoImg: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
