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
    color: "#F9E4C8",
  },
  subTitle: {
    fontSize: 15,
    marginTop: "2%",
    fontWeight: "bold",
    color: "#E02401",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});

export default styles;
