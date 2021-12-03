import { StyleSheet } from "react-native";
const ShopComponentStyles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#2B2B2B",
  },

  cardView: {
    marginTop: 100,
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
export default ShopComponentStyles;
