import React from "react";
import { View, Text } from "react-native";
import FooterStyles from "./FooterStyles";

const Footer = () => {
  return (
    <View style={FooterStyles.container}>
      <Text style={FooterStyles.text}>
        사주와 과학이 만나다. 통계학적으로 확률을 높이는 나만의 방법
      </Text>
    </View>
  );
};

export default Footer;
