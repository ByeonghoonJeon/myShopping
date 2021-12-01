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
    paddingBottom: 0,
    marginBottom: 0,
    fontSize: 33,
  },
  viewDetail: {
    marginLeft: "auto",
    marginRight: 20,
    marginTop: 0,
    paddingTop: 0,
  },
  winningNumbers: {
    color: "grey",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 20,
    textAlign: "center",
  },
  numbers: {
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 15,
    paddingBottom: 0,
    fontSize: 30,
    fontWeight: "bold",
  },
  winnersComments: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: "auto",
    marginLeft: "auto",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default HomeStyles;
