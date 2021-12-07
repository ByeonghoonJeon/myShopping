import { Dimensions, StyleSheet } from "react-native";
const ProfileAdjustStyles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#2B2B2B",
    height: "100%",
    justifyContent: "center",
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

  pickerContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
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
  saveBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#8D2828",
  },

  saveText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ProfileAdjustStyles;
