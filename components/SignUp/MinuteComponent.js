import React, { useState } from "react";
import { View, Picker } from "react-native";
import SignUpStyles from "./SignUpStyles";
const MinuteComponent = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("JAN");
  return (
    <View style={SignUpStyles.DatePicker}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="MIN." value="null" />
        <Picker.Item label="BETWEEN 00 ~ 09" value="01" />
        <Picker.Item label="BETWEEN 10 ~ 19" value="02" />
        <Picker.Item label="BETWEEN 20 ~ 29" value="03" />
        <Picker.Item label="BETWEEN 30 ~ 39" value="04" />
        <Picker.Item label="BETWEEN 40 ~ 49" value="05" />
        <Picker.Item label="BETWEEN 50 ~ 59" value="06" />
      </Picker>
    </View>
  );
};

export default MinuteComponent;
