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
import DatePicker from "react-native-datepicker";

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
          placeholder="비밀번호 설정"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={SignUpStyles.inputView}>
        <TextInput
          style={SignUpStyles.TextInput}
          placeholder="비밀번호 확인"
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
          <Picker.Item label="여성" value="female" />
          <Picker.Item label="남성" value="male" />
        </Picker>
      </View>
      <View>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {
            this.setState({ date: date });
          }}
        />
      </View>

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
const styles = StyleSheet.create({});

export default SignUpComponent;
