import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require("./assets/main.jpg")}
          style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>로또운 분석</Text>
          <Text style={styles.subTitle}>
            사주 분석으로 나만의 번호와 날짜를 받아보세요
          </Text>

          <StatusBar style="auto" />
        </View>
      </View>
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
  mainContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "90%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },
  subTitle: {
    fontSize: 15,
    marginTop: "2%",
    color: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});
