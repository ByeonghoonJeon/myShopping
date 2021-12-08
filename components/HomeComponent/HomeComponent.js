import React from "react";
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Card, CardAction, CardButton } from "react-native-cards";
import HomeStyles from "./HomeComponentStyles";
import Footer from "../Footer/FooterComponent";

import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";

const HomeComponent = ({ navigation }) => {
  return (
    <ScrollView style={HomeStyles.scrollContainer}>
      <ImageBackground
        source={require("../../assets/Home.jpg")}
        style={HomeStyles.image}
      />
      <View style={HomeStyles.container}>
        <Text style={HomeStyles.greeting}>
          Welcome "USER NAME", Feeling Lucky isn't it?
        </Text>
        <Text style={HomeStyles.greeting}>
          [Gender], yyyy-mm-dd 10:30 birth
        </Text>
        <Card style={HomeStyles.GetYourNumberCard}>
          <Text style={HomeStyles.GetYourNumberCardText}>
            Get your lucky numbers!{"\n"}Your Special Number for This Week
            Includes{" "}
          </Text>
          <Text style={HomeStyles.myNumber}>33</Text>

          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                console.warn("Clicked [See my full numbers]");
              }}
              title="See my full numbers."
              color="white"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
          </CardAction>
        </Card>
        <Card style={HomeStyles.MyPointCard}>
          <Text style={HomeStyles.cardSubtitle}>My Point </Text>
          <Text style={HomeStyles.point}>3,200 P</Text>
          <CardButton
            onPress={() => navigation.navigate("PointDetails")}
            title="View Details"
            color="#FEB557"
            style={HomeStyles.viewDetail}
          />

          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => navigation.navigate("RewardComponent")}
              title="Rewards"
              color="#FEB557"
              style={{ marginLeft: "auto" }}
            />
            <CardButton
              onPress={() => navigation.navigate("AboutPoint")}
              title="Learn More"
              color="#FEB557"
            />
          </CardAction>
        </Card>
        <Card style={HomeStyles.WinningNumbersCard}>
          <Text style={HomeStyles.winningNumbers}>
            WINNING NUMBER{"\n"}CONGRATS!{" "}
          </Text>
          <Text style={HomeStyles.numbers}>11, 22, 33, 35, 44, 45 </Text>

          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                console.warn("Clicked [See all history]");
              }}
              title="See all history"
              color="#BD1616"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </CardAction>
        </Card>

        <Card style={HomeStyles.winnerCommentCard}>
          <Text style={HomeStyles.winnersComments}>Winner's comments</Text>
          <Text style={HomeStyles.winnersCommentsText}>
            Don't you want to read our winners comments?
          </Text>

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
        <Card style={HomeStyles.AboutCard}>
          <Text style={HomeStyles.AboutThisApplication}>
            About This Application
          </Text>
          <Text style={HomeStyles.AboutText}>
            Have a look around about our great features!
          </Text>

          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => navigation.navigate("LearnMore")}
              title="Learn More"
              color="#FEB557"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
          </CardAction>
        </Card>
      </View>
      <Footer />
      <View style={HomeStyles.tabContainer}>
        <TouchableOpacity
          style={HomeStyles.tabSelectedButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={HomeStyles.tabIcon}>
            <Icon
              name="home"
              size={20}
              color="#8D2828"
              style={HomeStyles.tabIcon}
            />
          </Text>

          <Text style={HomeStyles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={HomeStyles.tabButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={HomeStyles.tabIcon}>
            <Icon2
              name="coins"
              size={20}
              color="#8D2828"
              style={HomeStyles.tabIcon}
            />
          </Text>
          <Text style={HomeStyles.tabText}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={HomeStyles.tabButton}
          onPress={() => navigation.navigate("MyPage")}
        >
          <Text style={HomeStyles.tabIcon}>
            <Icon2
              name="portrait"
              size={20}
              color="#8D2828"
              style={HomeStyles.tabIcon}
            />
          </Text>
          <Text style={HomeStyles.tabText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={HomeStyles.tabButton}
          onPress={() => navigation.navigate("Shop")}
        >
          <Text style={HomeStyles.tabIcon}>
            <Icon2
              name="shopping-cart"
              size={20}
              color="#8D2828"
              style={HomeStyles.tabIcon}
            />
          </Text>
          <Text style={HomeStyles.tabText}>Shop</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeComponent;
