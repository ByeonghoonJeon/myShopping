import { StyleSheet } from "react-native";
const ForgotPasswordStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 10,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },

  singupBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BD1616",
    top: "10%",
    marginTop: 50,
  },

  SignUpText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  sendBtn: {
    width: "30%",
    marginBottom: 10,
    backgroundColor: "#8D2828",
    padding: 10,
    alignSelf: "flex-end",
    borderRadius: 25,
    marginRight: "15%",
  },

  sendBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
});

export default ForgotPasswordStyles;
