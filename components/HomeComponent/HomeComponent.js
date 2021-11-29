import React from "react";
import { Text, View, ScrollView, ImageBackground } from "react-native";
import HomeStyles from "./HomeComponentStyles";

const HomeComponent = ({ navigation }) => {
  return (
    <ScrollView style={HomeStyles.scrollContainer}>
      <ImageBackground
        source={require("../../assets/main3.jpg")}
        style={HomeStyles.image}
      />
      <View style={HomeStyles.container}>
        <Text style={HomeStyles.greeting}>
          Welcome "USER NAME", {" \n"}How do you feel today?
        </Text>
      </View>
    </ScrollView>
  );
};

export default HomeComponent;
