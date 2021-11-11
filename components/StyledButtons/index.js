import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

const StyledButton = (props) => {
  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.warn("Hey!");
        }}
      >
        <Text>Press It!</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
