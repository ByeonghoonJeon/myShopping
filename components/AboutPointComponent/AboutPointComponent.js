import React from "react";
import {
  Text,
  ScrollView,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
import { Card, Button } from "react-native-elements";
import Footer from "../Footer/FooterComponent";

import * as Animatable from "react-native-animatable";
import AboutPointComponentStyles from "./AboutPointComponentStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
const AboutPointComponent = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#483434" }}>
      <ImageBackground
        source={require("../../assets/pointDetails.jpg")}
        style={AboutPointComponentStyles.image}
      />
      <Animatable.View animation="fadeInRightBig" duration={1000}>
        <Card
          containerStyle={{
            backgroundColor: "rgba(46, 76, 109, 0.90)",
            borderColor: "#232323",
            shadowColor: "black",
            marginTop: 70,
          }}
        >
          <Card.FeaturedTitle style={{ textAlign: "center", color: "#FFC107" }}>
            What is this point system?
          </Card.FeaturedTitle>
          <Card.Divider />
          <Text
            style={{
              marginBottom: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Earn points via various ways!{"\n"}Claim special rewards with the
            point you've earned!{"\n"}
            {"\n"}Let me tell you how you can earn points.
          </Text>
          <Card.Divider />
          <Text
            style={{ marginBottom: 10, color: "#FFC107", fontWeight: "bold" }}
          >
            1. When a purchase is successfully done !
          </Text>
          <Card.Image
            source={require("../../assets/purchase.jpg")}
          ></Card.Image>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {"  "}
            You'll have point when a purchase is successfully done. 1 point will
            be given per a dollar of purchase
          </Text>
          <Card.Divider />
          <Text
            style={{ marginBottom: 10, color: "#FFC107", fontWeight: "bold" }}
          >
            2. Answer simple surveys!
          </Text>
          <Card.Image
            source={require("../../assets/answerSurvey.jpg")}
          ></Card.Image>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {"  "}You can easily earn points by participating survey! It is
            unbelievably simple, only your honest opinions are needed.
            Obtainable points are vary from each case of survey.
          </Text>
          <Card.Divider />
          <Text
            style={{ marginBottom: 10, color: "#FFC107", fontWeight: "bold" }}
          >
            3. Special Events
          </Text>
          <Card.Image
            source={require("../../assets/specialEvent.jpg")}
          ></Card.Image>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {"  "}Special events are good sources to get extra points. Usually
            special events have periodic limit or limited numbers of
            participants or both. To not miss them, keep your eyes open and
            check the 'EVENT' section regularly!
          </Text>
          <Card.Divider />
        </Card>
      </Animatable.View>
      <Footer />
      <View style={AboutPointComponentStyles.tabContainer}>
        <TouchableOpacity
          style={AboutPointComponentStyles.tabButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={AboutPointComponentStyles.tabIcon}>
            <Icon
              name="home"
              size={20}
              color="#8D2828"
              style={AboutPointComponentStyles.tabIcon}
            />
          </Text>

          <Text style={AboutPointComponentStyles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={AboutPointComponentStyles.tabButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={AboutPointComponentStyles.tabIcon}>
            <Icon2
              name="coins"
              size={20}
              color="#8D2828"
              style={AboutPointComponentStyles.tabIcon}
            />
          </Text>
          <Text style={AboutPointComponentStyles.tabText}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={AboutPointComponentStyles.tabButton}
          onPress={() => navigation.navigate("MyPage")}
        >
          <Text style={AboutPointComponentStyles.tabIcon}>
            <Icon2
              name="portrait"
              size={20}
              color="#8D2828"
              style={AboutPointComponentStyles.tabIcon}
            />
          </Text>
          <Text style={AboutPointComponentStyles.tabText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={AboutPointComponentStyles.tabButton}
          onPress={() => navigation.navigate("Shop")}
        >
          <Text style={AboutPointComponentStyles.tabIcon}>
            <Icon2
              name="shopping-cart"
              size={20}
              color="#8D2828"
              style={AboutPointComponentStyles.tabIcon}
            />
          </Text>
          <Text style={AboutPointComponentStyles.tabText}>Shop</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AboutPointComponent;
