import React from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import FirstPage from "./components/FirstPage/index";

export default function App() {
  return (
    <View style={styles.container}>
      <FirstPage
        name={"사주 로또 분석"}
        tagLine={"내 사주로 분석하는 "}
        tagLineUnderBar={"나만의 번호"}
        image={require("./assets/main4.jpg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
