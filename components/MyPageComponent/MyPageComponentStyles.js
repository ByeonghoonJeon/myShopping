import { StyleSheet } from "react-native";
const MyPageComponentStyles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#2B2B2B",
    marginTop: 70,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  CardContainer: {
    width: "90%",
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: "center",
  },
  winnerCommentCard: {
    backgroundColor: "rgba(251, 243, 228, 0.85)",
  },

  title: {
    marginRight: "auto",
    marginLeft: "auto",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
  },
  subtitle: {
    color: "rgb(16, 86, 82)",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  text: {
    color: "black",
    marginLeft: "auto",
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
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
export default MyPageComponentStyles;
