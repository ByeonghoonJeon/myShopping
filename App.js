import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainComponent from "./components/Main/MainComponent";
import LearnMoreComponent from "./components/LearnMoreComponent/LearnMoreComponent";
import LoginComponent from "./components/Login/LoginComponent";
import SignUpComponent from "./components/SignUp/SignUpComponent";
import ForgotPasswordComponent from "./components/ForgotPassword/ForgotPasswordComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import MyPageComponent from "./components/MyPageComponent/MyPageComponent";

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
          name="LearnMore"
          component={LearnMoreComponent}
          options={{
            headerStyle: { backgroundColor: "#8D2828" },
            headerTintColor: "#fff",
            headerTitle: "Learn More",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginComponent}
          options={{
            headerStyle: { backgroundColor: "#8D2828" },
            headerTintColor: "#fff",
            headerTitle: "Login",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpComponent}
          options={{
            headerStyle: { backgroundColor: "#8D2828" },
            headerTintColor: "#fff",
            headerTitle: "Sign Up",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{
            headerStyle: { backgroundColor: "#8D2828" },
            headerTintColor: "#fff",
            headerTitle: "Home",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordComponent}
          options={{
            headerStyle: { backgroundColor: "#8D2828" },
            headerTintColor: "#fff",
            headerTitle: "Forgot Password",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="MyPage"
          component={MyPageComponent}
          options={{
            headerStyle: { backgroundColor: "#8D2828" },
            headerTintColor: "#fff",
            headerTitle: "My Page",
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
