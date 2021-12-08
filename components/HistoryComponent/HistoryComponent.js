import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";

import { HISTORY } from "./History.js";
import * as Animatable from "react-native-animatable";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: HISTORY,
    };
  }

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInRightBig" duration={1000}>
          <RenderItem
            item={this.state.history[0]}
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate("Numbers", { id: 0 })}
            keyExtractor={(item) => item.id.toString()}
          />
          <RenderItem
            item={this.state.history[1]}
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate("Numbers", { id: 1 })}
            keyExtractor={(item) => item.id.toString()}
          />
          <RenderItem
            item={this.state.history[2]}
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate("Numbers", { id: 2 })}
            keyExtractor={(item) => item.id.toString()}
          />
          <RenderItem
            item={this.state.history[3]}
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate("Numbers", { id: 3 })}
            keyExtractor={(item) => item.id.toString()}
          />
          <RenderItem
            item={this.state.history[4]}
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate("Numbers", { id: 4 })}
            keyExtractor={(item) => item.id.toString()}
          />
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Home;
