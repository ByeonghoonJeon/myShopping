import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainComponent from "./components/Main/MainComponent";
import DetailsComponent from "./components/Details/DetailsComponent";
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
        <Stack.Screen name="Details" component={DetailsComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return <MainScreen />;
};

export default App;
