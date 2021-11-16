import { Dimensions, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "25%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#EEEEEE",
  },
  subTitle: {
    fontSize: 15,
    marginTop: "2%",
    fontWeight: "bold",
    color: "#BBBFCA",
  },
  tagLineUnderBar: {
    textDecorationLine: "underline",
    color: "#BBBFCA",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});

export default styles;
