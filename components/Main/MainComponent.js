import React from "react";

import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButtons";
import styles from "./mainStyles";
import Header from "../Header/HeaderComponent";

const MainComponent = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require("../../assets/main1.jpg")}
        style={styles.image}
      />
      <Header />
      <View style={styles.titles}>
        <Text style={styles.title}>사주 로또 운세</Text>
        <Text style={styles.subTitle}>
          내 사주로 보는,{" "}
          <Text style={styles.tagLineUnderBar}>로또 사야하는 날짜</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"나만의 번호 받기"}
          onPress={() => {
            console.warn("Secondary button is pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content="더 알아보기"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </View>
  );
};

export default MainComponent;
