import { StyleSheet } from "react-native";

const FooterStyles = StyleSheet.create({
  container: {
    bottom: 5,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "black",
  },

  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  text: {
    color: "#E0E0EC",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default FooterStyles;
