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
import HomeStyles from "./HomeComponentStyles";
import Footer from "../Footer/FooterComponent";

const HomeComponent = ({ navigation }) => {
  return (
    <ScrollView style={HomeStyles.scrollContainer}>
      <ImageBackground
        source={require("../../assets/Home.jpg")}
        style={HomeStyles.image}
      />
      <View style={HomeStyles.container}>
        <Text style={HomeStyles.greeting}>
          Welcome "USER NAME", {" \n"}How do you feel today?
        </Text>

        <Card>
          <Text style={HomeStyles.cardSubtitle}>My Point </Text>
          <Text style={HomeStyles.point}>3,200 P</Text>

          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                console.warn("Hey");
              }}
              title="Rewards"
              color="#FEB557"
              style={{ marginLeft: "auto" }}
            />
            <CardButton
              onPress={() => {
                console.warn("Hey");
              }}
              title="Learn More"
              color="#FEB557"
            />
            <CardButton
              onPress={() => {
                console.warn("Hey");
              }}
              title="View Details"
              color="#FEB557"
              style={{ marginRight: 15 }}
            />
          </CardAction>
        </Card>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default HomeComponent;
