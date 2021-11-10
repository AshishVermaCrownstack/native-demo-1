import React from "react";
import {
  Image,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";

export default function c1() {
  // console.log(require("../assets/icon.png"));

  const handlePress = () => {
    console.log("Text Pressed.");
  };

  return (
    <View>
      <Text numberOfLines={3} onPress={handlePress}>
        Hello, World
      </Text>
      <TouchableHighlight onPress={() => console.log("Image Pressed")}>
        <Image
          blurRadius={3}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>

      {/* ================================================= */}
      {/* Works with Andriod only */}
      <TouchableNativeFeedback
        onPress={() => {
          console.log("Touchable native feedback pressed");
        }}
      >
        <View
          style={{ width: 200, height: 70, backgroundColor: "blue" }}
        ></View>
      </TouchableNativeFeedback>
      {/* ================================================= */}
    </View>
  );
}
