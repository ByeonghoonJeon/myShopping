import React from "react";
import {
  View,
  Text,
  Pressable,
  PressableOpacity,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "#8D2828" : "white";
  const textColor = type === "primary" ? "white" : "#646464";
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StyledButton;
