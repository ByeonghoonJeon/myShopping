import React from "react";
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-cards";
import MyPageStyles from "./MyPageComponentStyles";
import Footer from "../Footer/FooterComponent";
import MyPageComponentStyles from "./MyPageComponentStyles";
const MyPageComponent = ({ navigation }) => {
  return (
    <ScrollView style={MyPageComponentStyles.scrollContainer}>
      <ImageBackground
        source={require("../../assets/Home.jpg")}
        style={MyPageComponentStyles.image}
      />
    </ScrollView>
  );
};

export default MyPageComponent;
