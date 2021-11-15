import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButtons";
import styles from "./styles";

const FirstPage = (props) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require("../../assets/ruby.jpg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>로또운 분석</Text>
        <Text style={styles.subTitle}>
          사주 분석으로 나만의 번호와 날짜를 받아보세요
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"나만의 번호 받기"}
          onPress={() => {
            console.warn("Primary button is pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content={"더 알아보기"}
          onPress={() => {
            console.warn("Secondary button is pressed");
          }}
        />
      </View>
    </View>
  );
};

export default FirstPage;
