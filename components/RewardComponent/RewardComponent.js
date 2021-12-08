import React from "react";
import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import { PricingCard } from "react-native-elements";
import RewardComponentStyles from "./RewardComponentStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
const RewardComponent = ({ navigation }) => {
  return (
    <ScrollView style={RewardComponentStyles.scrollContainer}>
      <View style={RewardComponentStyles.cardView}>
        <PricingCard
          color="#8D2828"
          title="4 WEEKS FREE"
          price="500 P"
          info={[
            "50 sets of lucky numbers X 4 weeks",
            "Day to Buy Lottery X 4 weeks",
          ]}
          button={{ title: "CLAIM REWARD", icon: "flight-takeoff" }}
        />
        <PricingCard
          color="#34BE82"
          title="A WEEK FREE"
          price="150 P"
          info={["50 sets of lucky numbers", "Day to Buy Lottery"]}
          button={{
            title: "CLAIM REWARD",
            icon: "flight-takeoff",
          }}
        />
      </View>
      <View style={RewardComponentStyles.tabContainer}>
        <TouchableOpacity
          style={RewardComponentStyles.tabButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={RewardComponentStyles.tabIcon}>
            <Icon
              name="home"
              size={20}
              color="#8D2828"
              style={RewardComponentStyles.tabIcon}
            />
          </Text>

          <Text style={RewardComponentStyles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={RewardComponentStyles.tabButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={RewardComponentStyles.tabIcon}>
            <Icon2
              name="coins"
              size={20}
              color="#8D2828"
              style={RewardComponentStyles.tabIcon}
            />
          </Text>
          <Text style={RewardComponentStyles.tabText}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={RewardComponentStyles.tabButton}
          onPress={() => navigation.navigate("MyPage")}
        >
          <Text style={RewardComponentStyles.tabIcon}>
            <Icon2
              name="portrait"
              size={20}
              color="#8D2828"
              style={RewardComponentStyles.tabIcon}
            />
          </Text>
          <Text style={RewardComponentStyles.tabText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={RewardComponentStyles.tabSelectedButton}
          onPress={() => navigation.navigate("Shop")}
        >
          <Text style={RewardComponentStyles.tabIcon}>
            <Icon2
              name="shopping-cart"
              size={20}
              color="#8D2828"
              style={RewardComponentStyles.tabIcon}
            />
          </Text>
          <Text style={RewardComponentStyles.tabText}>Shop</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RewardComponent;
