import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Picker,
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SignUpStyles from "./SignUpStyles";

const SignUpComponent = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedValue, setSelectedValue] = useState("female");

  return (
    <View style={SignUpStyles.container}>
      <ImageBackground
        source={require("../../assets/signUp.jpg")}
        style={SignUpStyles.image}
      />
      <StatusBar style="auto" />
      <View style={SignUpStyles.inputView}>
        <TextInput
          style={SignUpStyles.TextInput}
          placeholder="사용할 이메일을 입력하세요"
          placeholderTextColor="grey"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={SignUpStyles.inputView}>
        <TextInput
          style={SignUpStyles.TextInput}
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={SignUpStyles.inputView}>
        <TextInput
          style={SignUpStyles.TextInput}
          placeholder="Password Verification"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={SignUpStyles.GenderPicker}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Male" value="male" />
        </Picker>
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
  );
};

export default SignUpComponent;
