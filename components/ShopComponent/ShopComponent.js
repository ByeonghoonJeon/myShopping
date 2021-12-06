import React from "react";
import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import { PricingCard } from "react-native-elements";
import ShopComponentStyles from "./ShopComponentStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
const ShopComponent = ({ navigation }) => {
  return (
    <ScrollView style={ShopComponentStyles.container}>
      <View style={ShopComponentStyles.cardView}>
        <PricingCard
          color="#4f9deb"
          title="FREE"
          price="$0"
          info={["2 sets of free lucky numbers"]}
          button={{ title: "GET STARTED", icon: "flight-takeoff" }}
        />
        <PricingCard
          color="#4f9deb"
          title="LUCKY DEAL 70% OFF"
          price="$60"
          info={[
            "50 sets of lucky numbers X 4 weeks",
            "Day to Buy Lottery X 4 weeks",
          ]}
          button={{ title: "GET STARTED", icon: "flight-takeoff" }}
        />
        <PricingCard
          color="#4f9deb"
          title="BEST DEAL 20% OFF"
          price="$40"
          info={["50 sets of lucky numbers", "Day to Buy Lottery"]}
          button={{ title: "GET STARTED", icon: "flight-takeoff" }}
        />
        <PricingCard
          color="#4f9deb"
          title="HOT DEAL 10% OFF"
          price="$19"
          info={["20 sets of lucky numbers", "Day to Buy Lottery"]}
          button={{ title: "GET STARTED", icon: "flight-takeoff" }}
        />
        <PricingCard
          color="#4f9deb"
          title="STARTER"
          price="$10"
          info={["10 sets of lucky numbers"]}
          button={{ title: "GET STARTED", icon: "flight-takeoff" }}
        />
      </View>
      <View style={ShopComponentStyles.tabContainer}>
        <TouchableOpacity
          style={ShopComponentStyles.tabButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={ShopComponentStyles.tabIcon}>
            <Icon
              name="home"
              size={20}
              color="#8D2828"
              style={ShopComponentStyles.tabIcon}
            />
          </Text>

          <Text style={ShopComponentStyles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ShopComponentStyles.tabButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={ShopComponentStyles.tabIcon}>
            <Icon2
              name="coins"
              size={20}
              color="#8D2828"
              style={ShopComponentStyles.tabIcon}
            />
          </Text>
          <Text style={ShopComponentStyles.tabText}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ShopComponentStyles.tabButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={ShopComponentStyles.tabIcon}>
            <Icon2
              name="portrait"
              size={20}
              color="#8D2828"
              style={ShopComponentStyles.tabIcon}
            />
          </Text>
          <Text style={ShopComponentStyles.tabText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ShopComponentStyles.tabSelectedButton}
          onPress={() => navigation.navigate("Shop")}
        >
          <Text style={ShopComponentStyles.tabIcon}>
            <Icon2
              name="shopping-cart"
              size={20}
              color="#8D2828"
              style={ShopComponentStyles.tabIcon}
            />
          </Text>
          <Text style={ShopComponentStyles.tabText}>Shop</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ShopComponent;
