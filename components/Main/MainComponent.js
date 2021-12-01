import React from "react";

import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButtons/StyledButtonsComponent";
import MainStyles from "./MainStyles";
import Header from "../Header/HeaderComponent";

const MainComponent = ({ navigation }) => {
  return (
    <View style={MainStyles.mainContainer}>
      <ImageBackground
        source={require("../../assets/main.jpg")}
        style={MainStyles.image}
      />
      <Header />
      <View style={MainStyles.titles}>
        <Text style={MainStyles.title}>사주 로또 운세</Text>
        <Text style={MainStyles.subTitle}>
          내 사주로 보는,{" "}
          <Text style={MainStyles.tagLineUnderBar}>
            로또 사야하는 날짜와 번호
          </Text>
        </Text>
      </View>
      <View style={MainStyles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Let's Get Started!"}
          onPress={() => navigation.navigate("Login")}
        />
        <StyledButton
          type="secondary"
          content="Learn More"
          onPress={() => navigation.navigate("LearnMore")}
        />
      </View>
    </View>
  );
};

export default MainComponent;
