// import * as React from "react";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import LoginComponent from "../Login/LoginComponent";
// import SignUpComponent from "../SignUp/SignUpComponent";

// const Tab = createBottomTabNavigator();

// function SignUp() {
//   return <SignUpComponent />;
// }

// function Login() {
//   return <LoginComponent />;
// }
// const MyTabs = ({ navigation }) => {
//   return (
//     <Tab.Navigator
//       initialRouteName="ForgotPassword"
//       screenOptions={{
//         tabBarActiveTintColor: "#e91e63",
//       }}
//     >
//       <Tab.Screen
//         name="SignUp"
//         component={SignUpComponent}
//         options={{
//           tabBarLabel: "SignUp",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Login"
//         component={LoginComponent}
//         options={{
//           tabBarLabel: "Login",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default MyTabs;

import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginComponent from "../Login/LoginComponent";
import SignUpComponent from "../SignUp/SignUpComponent";

function LoginScreen() {
  return <LoginComponent />;
}

function SignUpScreen() {
  return <SignUpComponent />;
}

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        onPress={() => navigation.navigate("Login")}
      />
      <Tab.Screen
        name="Settings"
        component={SignUpScreen}
        onPress={() => navigation.navigate("Login")}
      />
    </Tab.Navigator>
  );
}
