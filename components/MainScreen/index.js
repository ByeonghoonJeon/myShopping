import React from "react";

import MainList from "../MainList/index";
import { Header } from "../Header/index";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import styles from "./styles";

function MainScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <MainList />
      <StatusBar style="auto" />
    </View>
  );
}

export default MainScreen;
