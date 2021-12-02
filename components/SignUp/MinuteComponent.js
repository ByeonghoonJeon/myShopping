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
        <Picker.Item label="00" value="00" />
        <Picker.Item label="01" value="01" />
        <Picker.Item label="02" value="02" />
        <Picker.Item label="03" value="03" />
        <Picker.Item label="04" value="04" />
        <Picker.Item label="05" value="05" />
        <Picker.Item label="06" value="06" />
        <Picker.Item label="07" value="07" />
        <Picker.Item label="08" value="08" />
        <Picker.Item label="09" value="09" />
        <Picker.Item label="10" value="10" />
        <Picker.Item label="11" value="11" />
        <Picker.Item label="" value="" />
      </Picker>
    </View>
  );
};

export default MinuteComponent;
