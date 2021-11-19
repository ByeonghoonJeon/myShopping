import { StyleSheet } from "react-native";
const SignUpStyles = StyleSheet.create({
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
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: "center",
  },

  GenderPicker: {
    height: 50,
    width: "70%",
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 25,
    color: "#fff",
    alignSelf: "center",
    justifyContent: "center",
    padding: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "#fff",
    textDecorationLine: "underline",
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#8D2828",
  },
  singupBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#BD1616",
  },

  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default SignUpStyles;
