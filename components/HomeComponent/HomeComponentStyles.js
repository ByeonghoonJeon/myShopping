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
    width: "90%",

    alignSelf: "center",
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
    color: "#DFD8CA",
    marginLeft: "auto",
    marginRight: 20,
    marginTop: 20,
    fontWeight: "bold",
  },
  point: {
    marginLeft: "auto",
    marginRight: 20,
    paddingBottom: 0,
    marginBottom: 0,
    fontSize: 33,
    color: "white",
    fontWeight: "bold",
  },
  viewDetail: {
    marginLeft: "auto",
    marginRight: 20,
    marginTop: 0,
    paddingTop: 0,
  },
  winningNumbers: {
    color: "rgb(145, 31, 39)",
    fontWeight: "bold",
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
    color: "white",
  },
  myNumber: {
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 15,
    paddingBottom: 0,
    fontSize: 30,
    fontWeight: "bold",
    color: "rgb(255, 171, 76)",
  },
  GetYourNumberCardText: {
    color: "white",
    fontWeight: "bold",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 20,
    textAlign: "center",
  },
  winnersComments: {
    marginTop: 20,
    marginRight: "auto",
    marginLeft: "auto",
    fontSize: 30,
    fontWeight: "bold",
  },
  winnersCommentsText: {
    color: "white",
    fontWeight: "bold",
    marginRight: "auto",
    marginLeft: "auto",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  AboutThisApplication: {
    marginTop: 20,
    marginRight: "auto",
    marginLeft: "auto",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  AboutText: {
    color: "black",
    fontWeight: "bold",
    marginRight: "auto",
    marginLeft: "auto",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  MyPointCard: {
    backgroundColor: "rgba(145, 31, 39, 0.75)",
  },
  WinningNumbersCard: {
    backgroundColor: "rgba(255, 171, 76, 0.8)",
  },
  GetYourNumberCard: {
    backgroundColor: "rgba(16, 86, 82, 0.8)",
  },
  winnerCommentCard: {
    backgroundColor: "rgba(251, 243, 228, 0.5)",
  },
  AboutCard: {
    backgroundColor: "rgba(147, 181, 198, 0.6)",
  },
});

export default HomeStyles;
