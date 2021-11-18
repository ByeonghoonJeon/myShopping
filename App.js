import React from "react";

import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainComponent from "./components/Main/MainComponent";
import HomeComponent from "./components/Home/HomeComponent";

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

const App = () => {
  return <MainScreen />;
};

export default App;
