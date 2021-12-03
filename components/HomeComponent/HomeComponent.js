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
import MyTabs from "../BottomTabComponent/BottomTabComponent";

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

        <Card style={HomeStyles.MyPointCard}>
          <Text style={HomeStyles.cardSubtitle}>My Point </Text>
          <Text style={HomeStyles.point}>3,200 P</Text>
          <CardButton
            onPress={() => {
              console.warn("Clicked [View Details]");
            }}
            title="View Details"
            color="#FEB557"
            style={HomeStyles.viewDetail}
          />

          <CardAction separator={true} inColumn={false}>
            <CardButton
              onPress={() => {
                console.warn("Clicked [Rewards]");
              }}
              title="Rewards"
              color="#FEB557"
              style={{ marginLeft: "auto" }}
            />
            <CardButton
              onPress={() => {
                console.warn("Clicked [Learn More]");
              }}
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
      <MyTabs />
    </ScrollView>
  );
};

export default HomeComponent;
