import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

const StyledButton = (props) => {
  const type = props.type;
  const backgroundColor = type === "primary" ? "#BD1616" : "#7D1935";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.primaryButton, { backgroundColor: backgroundColor }]}
        onPress={() => {
          console.warn("Hey!");
        }}
      >
        <Text style={styles.primaryText}>나만의 번호 받기</Text>
      </Pressable>
      <Pressable
        style={styles.secondaryButton}
        onPress={() => {
          console.warn("Hey!");
        }}
      >
        <Text style={styles.secondaryText}>더 알아보기</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
