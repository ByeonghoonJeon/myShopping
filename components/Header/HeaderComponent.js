import React from "react";
import { View, Image } from "react-native";
import HeaderStyles from "./HeaderStyles";

const Header = () => {
  return (
    <View style={HeaderStyles.container}>
      <Image
        style={HeaderStyles.logo}
        source={require("../../assets/logo.png")}
      />
    </View>
  );
};

export default Header;
