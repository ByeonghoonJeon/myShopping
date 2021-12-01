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
import LoginStyles from "./LoginStyles";

const LoginComponent = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={LoginStyles.container}>
      <ImageBackground
        source={require("../../assets/Login.jpg")}
        style={LoginStyles.image}
      />
      <StatusBar style="auto" />
      <View style={LoginStyles.inputView}>
        <TextInput
          style={LoginStyles.TextInput}
          placeholder="Please input your email here"
          placeholderTextColor="grey"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={LoginStyles.inputView}>
        <TextInput
          style={LoginStyles.TextInput}
          placeholder="Your password here"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={LoginStyles.forgot_button}>
          Forgot your password? Click here!
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={LoginStyles.loginBtn}
      >
        <Text style={LoginStyles.loginText}>
          <Icon name="sign-in" size={20} color="#fff" /> Login
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 30,
          marginRight: 30,
          marginTop: 10,
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
              width: 50,
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            또는
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
      </View>
      <TouchableOpacity
        style={LoginStyles.singupBtn}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={LoginStyles.loginText}>
          <Icon name="user-plus" size={20} color="#fff" /> Free try {"\n"}(New
          member's promotion)
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginComponent;
