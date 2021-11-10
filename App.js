import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";

import C1 from "./components/c1";
import C2 from "./components/c2";
import C3 from "./components/c3";
import C4 from "./components/c4";
import Page1 from "./Pages/page1";
import Page2 from "./Pages/page2";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <C1 /> */}
      {/* <C2 /> */}
      {/* <C3 /> */}
      {/* <C4 /> */}
      {/* <Page1 /> */}
      <Page2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
