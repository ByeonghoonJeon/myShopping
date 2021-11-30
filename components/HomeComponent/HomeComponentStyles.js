import { StyleSheet } from "react-native";
const HomeStyles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#2B2B2B",
    marginTop: 70,
  },
  container: {
    marginBottom: 0,
    marginTop: 30,
    paddingBottom: 20,
  },
  greeting: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  cardSubtitle: {
    color: "grey",
    marginLeft: "auto",
    marginRight: 20,
    marginTop: 20,
  },
  point: {
    marginLeft: "auto",
    marginRight: 20,
    marginBottom: 15,
    paddingBottom: 0,
    fontSize: 30,
  },
});

export default HomeStyles;
