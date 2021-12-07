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
          <Text style={MyPageComponentStyles.title}>SUBSCRIPTION</Text>
          <CardAction separator={true} inColumn={true}>
            <Text style={MyPageComponentStyles.subscriptionNotSubscribing}>
              YOU ARE NOT SUBSCRIBING OR
            </Text>
            <Text style={MyPageComponentStyles.subscriptionStatus}>
              YOU ARE SUBSCRIBING -PREMIUM-
            </Text>
            <CardAction separator={true} inColumn={false}>
              <Text style={MyPageComponentStyles.subtitle}>
                SUBSCRIPTION VALID UNTIL
              </Text>
              <Text style={MyPageComponentStyles.text}>31st Dec, 2021</Text>
            </CardAction>
          </CardAction>
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => navigation.navigate("Shop")}
              title="RENEW YOUR SUBSCRIPTION"
              color="rgb(16, 86, 82)"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
          </CardAction>
        </Card>
      </View>
      <View style={MyPageComponentStyles.CardContainer}>
        <Card style={MyPageComponentStyles.winnerCommentCard}>
          <Text style={MyPageComponentStyles.title}>MY PROFILE</Text>
          <CardAction separator={true} inColumn={false}>
            <Text style={MyPageComponentStyles.subtitle}>GENDER</Text>
            <Text style={MyPageComponentStyles.text}>Male</Text>
          </CardAction>
          <CardAction separator={true} inColumn={false}>
            <Text style={MyPageComponentStyles.subtitle}>BIRTH DATE</Text>
            <Text style={MyPageComponentStyles.text}>Mar 12, 1992 Sol</Text>
          </CardAction>
          <CardAction separator={true} inColumn={false}>
            <Text style={MyPageComponentStyles.subtitle}>BIRTH TIME</Text>
            <Text style={MyPageComponentStyles.text}>15:06</Text>
          </CardAction>
          <CardAction separator={true} inColumn={false}>
            <Text style={MyPageComponentStyles.subtitle}>Age</Text>
            <Text style={MyPageComponentStyles.text}>29</Text>
          </CardAction>
          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => navigation.navigate("Main")}
              title="ADJUST"
              color="rgb(16, 86, 82)"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
          </CardAction>
        </Card>
      </View>
      <View style={MyPageComponentStyles.CardContainer}>
        <Card style={MyPageComponentStyles.winnerCommentCard}>
          <Text style={MyPageComponentStyles.title}>MY POINTS</Text>
          <CardAction separator={true} inColumn={false}>
            <TouchableOpacity
              onPress={() => console.warn("Clicked [View Details]")}
            >
              <Text style={MyPageComponentStyles.pointDetail}>
                VIEW DETAILS
              </Text>
            </TouchableOpacity>
            <Text style={MyPageComponentStyles.point}>3,200 P</Text>
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
