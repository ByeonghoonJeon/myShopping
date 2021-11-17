import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "./components/MainScreen";
import HomeScreen from "./components/Home/home";

// const { Navigator, Screen } = createStackNavigator();

// const App = () => {
//   <NavigationContainer>
//     <Navigator headerMode="name" initialRouteName="Main">
//       <Screen name="Main" component={MainScreen}></Screen>
//       <Screen name="Home" component={HomeScreen}></Screen>
//     </Navigator>
//   </NavigationContainer>;
// };

export default function App() {
  return <MainScreen />;
}

// export default App;
