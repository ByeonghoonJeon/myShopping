import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainComponent from "./components/Main/MainComponent";
import DetailsComponent from "./components/Details/DetailsComponent";
import LoginComponent from "./components/Login/LoginComponent";
import SignUpComponent from "./components/SignUp/SignUpComponent";

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
        <Stack.Screen
          name="Details"
          component={DetailsComponent}
          options={{
            headerStyle: { backgroundColor: "#8D2828" },
            headerTintColor: "#fff",
            headerTitle: "사주 로또가 뭐에요?",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginComponent}
          options={{
            headerStyle: { backgroundColor: "#8D2828" },
            headerTintColor: "#fff",
            headerTitle: "로그인 하기",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpComponent}
          options={{
            headerStyle: { backgroundColor: "#8D2828" },
            headerTintColor: "#fff",
            headerTitle: "처음으로 등록하기",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return <MainScreen />;
};

export default App;
