import React from "react";

import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButtons";
import styles from "./styles";
import HomeScreen from "../Home/home";

const MainItem = (props) => {
  const { name, tagLine, image, tagLineUnderBar } = props.main;

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagLine}
          <Text style={styles.tagLineUnderBar}>{tagLineUnderBar}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"나만의 번호 받기"}
          onPress={() => {
            HomeScreen();
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

export default MainItem;
