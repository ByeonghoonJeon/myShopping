import { StyleSheet } from "react-native";
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
