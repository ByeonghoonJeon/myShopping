import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ImageBackground,
  Picker,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import ProfileAdjustStyles from "./ProfileAdjustComponentStyles";
import YearsComponent from "../SignUp/YearsComponent";
import MonthsComponent from "../SignUp/MonthsComponent";
import DatesComponent from "../SignUp/DatesComponent";
import TimeComponent from "../SignUp/TimeComponent";
import MinuteComponent from "../SignUp/MinuteComponent";
import SolarLunarComponent from "../SignUp/SolarLunarPickerComponent";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileAdjustComponent = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("female");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={ProfileAdjustStyles.scrollContainer}>
      <ImageBackground
        source={require("../../assets/adjust.jpg")}
        style={ProfileAdjustStyles.image}
      />
      <StatusBar style="auto" />
      <View style={ProfileAdjustStyles.container}>
        <View style={ProfileAdjustStyles.GenderPicker}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Male" value="male" />
          </Picker>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            backgroundColor: "black",
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "white",
            }}
          />
          <View>
            <Text
              style={{
                width: 200,
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Birth date and Time
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
        </View>

        <View style={ProfileAdjustStyles.pickerContainer}>
          <YearsComponent />
          <MonthsComponent />
          <DatesComponent />
        </View>
        <View style={ProfileAdjustStyles.pickerContainer}>
          <SolarLunarComponent />
          <TimeComponent />
          <MinuteComponent />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={ProfileAdjustStyles.saveBtn}
            onPress={() => navigation.navigate("MyPage")}
          >
            <Text style={ProfileAdjustStyles.saveText}>
              <Icon name="check-square-o" size={20} color="#fff" /> Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileAdjustComponent;
