import { Dimensions, StyleSheet } from "react-native";
const SignUpStyles = StyleSheet.create({
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

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginTop: 20,
    alignItems: "center",
    textAlign: "center",
    alignSelf: "center",
  },

  GenderPicker: {
    height: 50,
    width: "40%",
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 25,
    color: "#fff",
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 20,
  },
  SolarLunarPicker: {
    height: 50,
    width: "33%",
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 25,
    color: "#fff",
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
  YearPicker: {
    height: 50,
    width: "33%",
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 25,
    color: "#fff",
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
  MonthPicker: {
    height: 50,
    width: "33%",
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 25,
    color: "#fff",
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  DatePicker: {
    height: 50,
    width: "33%",
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 25,
    color: "#fff",
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
  pickerContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
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
  checkBoxText: {
    color: "white",
    marginTop: 20,
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  PersonalInfoUseText: {
    color: "white",
    marginTop: 20,
    marginLeft: 5,
  },
  footer: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 30,
    marginBottom: 50,
  },
});

export default SignUpStyles;
