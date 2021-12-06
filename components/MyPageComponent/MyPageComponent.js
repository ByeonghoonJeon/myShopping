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
import Footer from "../Footer/FooterComponent";
import MyPageComponentStyles from "./MyPageComponentStyles";

import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
const MyPageComponent = ({ navigation }) => {
  return (
    <ScrollView style={MyPageComponentStyles.scrollContainer}>
      <View style={MyPageComponentStyles.CardContainer}>
        <Card style={MyPageComponentStyles.winnerCommentCard}>
          <Text style={MyPageComponentStyles.winnersComments}>MY PROFILE</Text>
          <CardAction separator={true} inColumn={false}>
            <Text style={MyPageComponentStyles.winnersCommentsText}>
              GENDER
            </Text>
          </CardAction>
          <CardAction separator={true} inColumn={false}>
            <Text style={MyPageComponentStyles.winnersCommentsText}>
              BIRTH DATE
            </Text>
          </CardAction>

          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                console.warn("Clicked [Meet their comments]");
              }}
              title="Meet their comments"
              color="rgb(16, 86, 82)"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
          </CardAction>
        </Card>
      </View>
      <Footer />
      <View style={MyPageComponentStyles.tabContainer}>
        <TouchableOpacity
          style={MyPageComponentStyles.tabButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={MyPageComponentStyles.tabIcon}>
            <Icon
              name="home"
              size={20}
              color="#8D2828"
              style={MyPageComponentStyles.tabIcon}
            />
          </Text>

          <Text style={MyPageComponentStyles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={MyPageComponentStyles.tabButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={MyPageComponentStyles.tabIcon}>
            <Icon2
              name="coins"
              size={20}
              color="#8D2828"
              style={MyPageComponentStyles.tabIcon}
            />
          </Text>
          <Text style={MyPageComponentStyles.tabText}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={MyPageComponentStyles.tabSelectedButton}
          onPress={() => navigation.navigate("MyPage")}
        >
          <Text style={MyPageComponentStyles.tabIcon}>
            <Icon2
              name="portrait"
              size={20}
              color="#8D2828"
              style={MyPageComponentStyles.tabIcon}
            />
          </Text>
          <Text style={MyPageComponentStyles.tabText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={MyPageComponentStyles.tabButton}
          onPress={() => navigation.navigate("Shop")}
        >
          <Text style={MyPageComponentStyles.tabIcon}>
            <Icon2
              name="shopping-cart"
              size={20}
              color="#8D2828"
              style={MyPageComponentStyles.tabIcon}
            />
          </Text>
          <Text style={MyPageComponentStyles.tabText}>Shop</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MyPageComponent;
