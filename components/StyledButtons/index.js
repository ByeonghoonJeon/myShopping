import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

const StyledButton = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button1}
        onPress={() => {
          console.warn("Hey!");
        }}
      >
        <Text style={styles.text}>나만의 번호 받기</Text>
      </Pressable>
      <Pressable
        style={styles.button2}
        onPress={() => {
          console.warn("Hey!");
        }}
      >
        <Text style={styles.text}>더 알아보기</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
