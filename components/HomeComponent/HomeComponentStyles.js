import { StyleSheet } from "react-native";
const HomeStyles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#2B2B2B",
  },
  container: {
    alignItems: "flex-start",
    marginTop: 100,
    marginLeft: 20,
  },
  greeting: {
    color: "white",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});

export default HomeStyles;
