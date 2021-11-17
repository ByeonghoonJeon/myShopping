import React from "react";

import MainList from "../MainList/index";
import Header from "../Header/index";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styles from "./styles";

// import HomeComponent from "../Home/home";

const HomeComponent = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="To Main"></Button>
    </View>
  );
};

function MainComponent({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <MainList />
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MainScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },

          headerTransparent: true,
          headerTitle: "",
          headerShadowVisible: false,
        }}
        initialRouteName="Main"
      >
        <Stack.Screen name="Main" component={MainComponent} />
        <Stack.Screen name="Home" component={HomeComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainScreen;
