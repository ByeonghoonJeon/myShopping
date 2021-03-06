import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Picker,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SignUpStyles from "./SignUpStyles";
import YearsComponent from "./YearsComponent";
import MonthsComponent from "./MonthsComponent";
import DatesComponent from "./DatesComponent";
import TimeComponent from "./TimeComponent";
import MinuteComponent from "./MinuteComponent";
import SolarLunarComponent from "./SolarLunarPickerComponent";
import CheckBox from "expo-checkbox";

const SignUpComponent = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedValue, setSelectedValue] = useState("female");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <ScrollView style={SignUpStyles.scrollContainer}>
      <ImageBackground
        source={require("../../assets/signUp.jpg")}
        style={SignUpStyles.image}
      />
      <StatusBar style="auto" />
      <View style={SignUpStyles.container}>
        <TextInput
          style={SignUpStyles.inputView}
          placeholder="사용할 이메일을 입력하세요"
          placeholderTextColor="grey"
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          style={SignUpStyles.inputView}
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />

        <TextInput
          style={SignUpStyles.inputView}
          placeholder="Password Verification"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />

        <View style={SignUpStyles.GenderPicker}>
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

        <View style={SignUpStyles.pickerContainer}>
          <YearsComponent />
          <MonthsComponent />
          <DatesComponent />
        </View>
        <View style={SignUpStyles.pickerContainer}>
          <SolarLunarComponent />
          <TimeComponent />
          <MinuteComponent />
        </View>
        <Text style={SignUpStyles.PersonalInfoUseText}>
          {"  "}By checking the box below, you are agreeing to provide your
          personal information above which is necessary to provide the service
          to you. Also you are agreeing with following below. {"\n "}1. The
          information you are providing can be utilized and stored for the
          marketing purposes and analyses. {"\n "} 2. The information you are
          providing can be provided to the 3rd party.
        </Text>
        <View style={SignUpStyles.pickerContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            style={{ marginTop: 20 }}
          />
          <Text style={SignUpStyles.checkBoxText}>Yes, I agree.</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={SignUpStyles.loginBtn}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={SignUpStyles.loginText}>
              <Icon name="sign-in" size={20} color="#fff" /> Sign Up
            </Text>
          </TouchableOpacity>
          <Text style={SignUpStyles.footer}>
            Start your own experience here
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpComponent;
