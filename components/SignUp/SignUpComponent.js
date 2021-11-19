import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Picker,
} from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import SignUpStyles from "./SignUpStyles";

const SignUpComponent = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedValue, setSelectedValue] = useState("femail");

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

// import React from "react";
// import { View, Button, TextInput, StyleSheet } from "react-native";

// export default class SignUpComponent extends React.Component {
//   state = {
//     username: "",
//     password: "",
//     email: "",
//     phone_number: "",
//   };
//   onChangeText = (key, val) => {
//     this.setState({ [key]: val });
//   };
//   signUp = async () => {
//     const { username, password, email, phone_number } = this.state;
//     try {
//       // here place your signup logic
//       console.log("user successfully signed up!: ", success);
//     } catch (err) {
//       console.log("error signing up: ", err);
//     }
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           autoCapitalize="none"
//           placeholderTextColor="white"
//           onChangeText={(val) => this.onChangeText("username", val)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry={true}
//           autoCapitalize="none"
//           placeholderTextColor="white"
//           onChangeText={(val) => this.onChangeText("password", val)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           autoCapitalize="none"
//           placeholderTextColor="white"
//           onChangeText={(val) => this.onChangeText("email", val)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Phone Number"
//           autoCapitalize="none"
//           placeholderTextColor="white"
//           onChangeText={(val) => this.onChangeText("phone_number", val)}
//         />
//         <Button title="Sign Up" onPress={this.signUp} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   input: {
//     width: 350,
//     height: 55,
//     backgroundColor: "#42A5F5",
//     margin: 10,
//     padding: 8,
//     color: "white",
//     borderRadius: 14,
//     fontSize: 18,
//     fontWeight: "500",
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
