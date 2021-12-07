import { StyleSheet } from "react-native";
const HomeStyles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#2B2B2B",
    marginTop: 10,
  },
  container: {
    marginBottom: 0,
    marginTop: 70,
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
    color: "rgb(16, 86, 82)",
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
    backgroundColor: "rgba(255, 171, 76, 0.7)",
  },
  GetYourNumberCard: {
    backgroundColor: "rgba(16, 86, 82, 0.7)",
  },
  winnerCommentCard: {
    backgroundColor: "rgba(251, 243, 228, 0.85)",
  },
  AboutCard: {
    backgroundColor: "rgba(147, 181, 198, 0.85)",
    marginBottom: 0,
    paddingBottom: 0,
  },
  tabContainer: {
    width: "100%",
    height: 70,
    backgroundColor: "rgba(234, 234, 234,0.8)",
    padding: 10,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tabButton: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: "22%",
    padding: 5,
    margin: 5,
    textAlign: "center",
    borderRadius: 20,
    borderColor: "rgba(234, 234, 234,0.7)",
    borderWidth: 2,
  },
  tabSelectedButton: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: "22%",
    padding: 5,
    backgroundColor: "rgba(234, 234, 234,0.7)",
    margin: 5,
    textAlign: "center",
    borderRadius: 20,
    borderColor: "#8D2828",
    borderWidth: 2,
  },
  tabText: {
    textAlign: "center",
    fontSize: 14,
    color: "#8D2828",
    marginTop: 3,
    padding: 0,
    fontWeight: "bold",
  },
  tabIcon: {
    justifyContent: "center",
  },
});

export default HomeStyles;
