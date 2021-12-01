import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ForgotPasswordStyles from "./ForgotPasswordStyles";

const ForgotPasswordComponent = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={ForgotPasswordStyles.container}>
      <ImageBackground
        source={require("../../assets/Forgot.jpg")}
        style={ForgotPasswordStyles.image}
      />
      <StatusBar style="auto" />

      <View style={ForgotPasswordStyles.inputView}>
        <TextInput
          style={ForgotPasswordStyles.TextInput}
          placeholder="Input your registered e-mail address"
          placeholderTextColor="grey"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <TouchableOpacity style={ForgotPasswordStyles.sendBtn}>
        <Text style={ForgotPasswordStyles.sendBtnText}>Send code</Text>
      </TouchableOpacity>

      <View style={ForgotPasswordStyles.inputView}>
        <TextInput
          style={ForgotPasswordStyles.TextInput}
          placeholder="Input verification code"
          placeholderTextColor="grey"
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={ForgotPasswordStyles.sendBtn}>
        <Text style={ForgotPasswordStyles.sendBtnText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={ForgotPasswordStyles.singupBtn}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={ForgotPasswordStyles.SignUpText}>
          <Icon name="user-plus" size={20} color="#fff" /> Or Sign Up for Free
          Trial
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordComponent;
