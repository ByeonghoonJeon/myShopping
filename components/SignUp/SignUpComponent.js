import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import SignUpStyles from "./SignUpStyles";

const SignUpComponent = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={SignUpStyles.container}>
      <ImageBackground
        source={require("../../assets/main3.jpg")}
        style={SignUpStyles.image}
      />
      <StatusBar style="auto" />
      <View style={SignUpStyles.inputView}>
        <TextInput
          style={SignUpStyles.TextInput}
          placeholder="이곳에 이메일을 입력하세요"
          placeholderTextColor="grey"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={SignUpStyles.inputView}>
        <TextInput
          style={SignUpStyles.TextInput}
          placeholder="비밀번호"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={SignUpStyles.forgot_button}>
          비밀번호를 잊으셨으면 여기를 클릭하세요
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={SignUpStyles.loginBtn}>
        <Text style={SignUpStyles.loginText}>
          <Icon name="sign-in" size={20} color="#fff" /> 로그인
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
      <TouchableOpacity style={SignUpStyles.singupBtn}>
        <Text style={SignUpStyles.loginText}>
          <Icon name="user-plus" size={20} color="#fff" /> 무료 체험하기
          (신규등록 이벤트)
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpComponent;
