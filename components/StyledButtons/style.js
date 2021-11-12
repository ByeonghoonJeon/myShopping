import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  primaryButton: {
    marginBottom: 15,
    marginTop: "100%",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryButton: {
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  primaryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
  secondaryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#BD1616",
    textTransform: "uppercase",
  },
});

export default styles;
