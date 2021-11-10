import React from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

export default function c2() {
  return (
    <View style={Styles.container}>
      <Button
        title="Click Me"
        color="red"
        onPress={() => {
          Alert.alert("My title", "Any Message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "NO", onPress: () => console.log("No") },
          ]);

          // only works in Ios
          // Alert.prompt("My Title", "What is your Name", (name) => {
          //   console.log(name);
          // });
        }}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
