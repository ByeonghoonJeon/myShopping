import React from "react";
import { Text, ScrollView, ImageBackground } from "react-native";
import { Card, Button } from "react-native-elements";
import Footer from "../Footer/FooterComponent";

import * as Animatable from "react-native-animatable";
import LearnMoreStyles from "./LearnMoreStyles";

const LearnMoreComponent = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#2B2B2B" }}>
      <ImageBackground
        source={require("../../assets/LearnMore.jpg")}
        style={LearnMoreStyles.image}
      />
      <Animatable.View animation="fadeInRightBig" duration={1000}>
        <Card
          containerStyle={{
            backgroundColor: "rgba(25, 26, 25, 0.75)",
            borderColor: "#232323",
            shadowColor: "black",
            marginTop: 80,
          }}
        >
          <Card.FeaturedTitle style={{ textAlign: "center", color: "#FFC107" }}>
            사주를 바탕으로 추천하는 로또 번호
          </Card.FeaturedTitle>
          <Card.Divider />
          <Text
            style={{
              marginBottom: 10,
              color: "#FFC107",
              fontWeight: "bold",
            }}
          >
            로또 1등 확률은 824만 분의 1? {"\n"}사주 로또에서 확률을 30배
            높혀보세요.
          </Text>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            사주 분석으로 나한테 로또운이 들어오는 날짜에 로또를 구매해 보세요.
            나만을 위해 주어지는 번호와 날짜로 당첨 확률을 약 30배 더 높이세요!
            {"\n"}
            {"\n"}
            1등 확률 : 1/250,000 {"\n"}2등 확률 : 1/45,300{"\n"}3등 확률 :
            1/1,200
          </Text>
          <Card.Divider />
          <Text
            style={{ marginBottom: 10, color: "#FFC107", fontWeight: "bold" }}
          >
            1. 로또 사는 날짜, 언제가 좋을까요?
          </Text>
          <Card.Image source={require("../../assets/date.jpg")}></Card.Image>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {"  "}
            횡재수, 로또운, 편재운이 들어오는 날짜에 로또를 구매해 보세요.
            생년월일시를 바탕으로 나한테 언제 로또운이 들어오는지 정확한 날짜와
            시간을 알아가세요!
          </Text>
          <Card.Divider />
          <Text
            style={{ marginBottom: 10, color: "#FFC107", fontWeight: "bold" }}
          >
            2. 로또 번호, 아무거나 찍지 마세요!
          </Text>
          <Card.Image source={require("../../assets/aim.jpg")}></Card.Image>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {"  "}내 사주를 바탕으로 나만의 번호를 받아보세요. 나의 사주와,
            로또운이 들어오는 날짜, 시간 등을 조합하여 만들어진 나만을 위한
            최적의 번호를 가져가세요!
          </Text>
          <Card.Divider />
          <Text
            style={{ marginBottom: 10, color: "#FFC107", fontWeight: "bold" }}
          >
            3. 단돈 5천원으로 받아가는 나만의 번호
          </Text>
          <Card.Image
            source={require("../../assets/discount.jpg")}
          ></Card.Image>
          <Text
            style={{
              marginTop: 20,
              marginBottom: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {"  "}아무런 의미 없는 번호를 비싼 가격에 받고 계신가요? 이제는
            나만의 번호를 저렴한 가격에 가져가세요! 일주일에 5천 원으로 나만을
            위한 번호를 가져갈 수 있습니다.
          </Text>
          <Card.Divider />
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: "#8D2828",
            }}
            title="  나만의 번호 가져가기"
            onPress={() => navigation.navigate("Login")}
          />
        </Card>
      </Animatable.View>
      <Footer />
    </ScrollView>
  );
};

export default LearnMoreComponent;
