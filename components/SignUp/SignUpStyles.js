import { Dimensions, StyleSheet } from "react-native";
const SignUpStyles = StyleSheet.create({
  container: {
    backgroundColor: "#2B2B2B",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
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
  DatePicker: {
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
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 50,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: "black",
  },
  btnContainer: {
    padding: 30,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  footer: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 30,
  },
});

export default SignUpStyles;
