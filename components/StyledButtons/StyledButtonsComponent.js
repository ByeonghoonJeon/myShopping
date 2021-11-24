import React from "react";
import {
  View,
  Text,
  Pressable,
  PressableOpacity,
  TouchableOpacity,
} from "react-native";
import StyledButtonsStyles from "./StyledButtonsStyles";

const StyledButton = (props) => {
  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "#8D2828" : "white";
  const textColor = type === "primary" ? "white" : "#646464";
  return (
    <View style={StyledButtonsStyles.container}>
      <TouchableOpacity
        style={[
          StyledButtonsStyles.button,
          { backgroundColor: backgroundColor },
        ]}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={[StyledButtonsStyles.text, { color: textColor }]}>
          {content}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StyledButton;
