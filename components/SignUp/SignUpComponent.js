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

const SignUpComponent = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedValue, setSelectedValue] = useState("female");

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
            marginTop: 10,
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
        <View style={SignUpStyles.GenderPicker}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Solar" value="solar" />
            <Picker.Item label="Lunar" value="lunar" />
          </Picker>
        </View>
        <View style={SignUpStyles.pickerContainer}>
          <YearsComponent />
          <MonthsComponent />
          <DatesComponent />
        </View>

        <TouchableOpacity
          style={SignUpStyles.loginBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={SignUpStyles.loginText}>
            <Icon name="sign-in" size={20} color="#fff" /> Sign Up
          </Text>
        </TouchableOpacity>
        <Text style={SignUpStyles.footer}>Start your own experience here</Text>
      </View>
    </ScrollView>
  );
};

export default SignUpComponent;
