import React, { Component } from "react";
import { View, Text, ScrollView, FlatList, StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";
import { WINNINGNUMBERS } from "../WinningNumbers/numberList.js";
import * as Animatable from "react-native-animatable";

const Circle = (props) => {
  return (
    <View
      style={{
        ...styles.circle,
        backgroundColor: props.bgColor || "white",
      }}
    >
      <Text
        style={{
          margin: 4,
          fontSize: 19,

          fontWeight: "bold",
          textAlign: "center",
          color: props.color || "black",
        }}
      >
        {props.number}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 35,
    height: 35,
    borderRadius: 35,
    backgroundColor: "white",
    margin: 5,
  },
});
function RenderItem({ item }) {
  if (item) {
    return (
      <View>
        <Card
          containerStyle={{
            backgroundColor: "#2B2B2B",
            borderColor: "#2B2B2B",
            shadowColor: "black",
          }}
        >
          <Card.FeaturedTitle style={{ textAlign: "center" }}>
            제 {item.round}회차 당첨번호
          </Card.FeaturedTitle>
          <Card.FeaturedSubtitle style={{ marginLeft: "auto" }}>
            {item.date}
          </Card.FeaturedSubtitle>

          <Card.Divider />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Animatable.View animation="fadeInRightBig" duration={1000}>
              <Circle number={item.number1} />
            </Animatable.View>
            <Animatable.View animation="fadeInRightBig" duration={1200}>
              <Circle number={item.number2} />
            </Animatable.View>
            <Animatable.View animation="fadeInRightBig" duration={1400}>
              <Circle number={item.number3} />
            </Animatable.View>
            <Animatable.View animation="fadeInRightBig" duration={1500}>
              <Circle number={item.number4} />
            </Animatable.View>
            <Animatable.View animation="fadeInRightBig" duration={1600}>
              <Circle number={item.number5} />
            </Animatable.View>
            <Animatable.View animation="fadeInRightBig" duration={1700}>
              <Circle number={item.number6} />
            </Animatable.View>
            <Animatable.View animation="fadeInRightBig" duration={1800}>
              <Circle
                number={item.bonusNumber}
                color="white"
                bgColor="#CE1212"
              />
            </Animatable.View>
          </View>
        </Card>
        <Button
          icon={<FontAwesomeIcon icon={iconName} color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: "#CE1212",
          }}
          title="  전체 번호 확인하기"
          onPress={onPress}
        />
      </View>
    );
  }
  return <View />;
}

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winningNumbers: WINNINGNUMBERS,
    };
  }

  static navigationOptions = {
    title: "Numbers",
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#232323" }}>
        <Animatable.View animation="fadeInRightBig" duration={1000}>
          <RenderItem
            item={this.state.winningNumbers[this.props.route.params.id]}
            navigation={this.props.navigation}
            keyExtractor={(item) => item.id.toString()}
          />
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Numbers;
