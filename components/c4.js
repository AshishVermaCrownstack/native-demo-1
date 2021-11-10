import React from "react";
import { StyleSheet, View } from "react-native";

function c4() {
  return (
    <View style={Styles.container}>
      <View style={Styles.item1} />
      <View style={Styles.item2} />
      <View style={Styles.item3} />
    </View>
  );
}

export default c4;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  item1: {
    // flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  item2: {
    // flex: 1,
    width: 100,
    height: 100,
    top: 20,
    left: 20,
    position: "absolute",
    backgroundColor: "yellow",
  },
  item3: {
    // flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});
