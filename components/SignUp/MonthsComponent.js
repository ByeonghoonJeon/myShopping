import React, { useState } from "react";
import { View, Picker } from "react-native";
import SignUpStyles from "./SignUpStyles";
const MonthsComponent = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("JAN");
  return (
    <View style={SignUpStyles.MonthPicker}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="JAN" value="01" />
        <Picker.Item label="FEB" value="02" />
        <Picker.Item label="MAR" value="03" />
        <Picker.Item label="APR" value="04" />
        <Picker.Item label="MAY" value="05" />
        <Picker.Item label="JUN" value="06" />
        <Picker.Item label="JUL" value="07" />
        <Picker.Item label="AUG" value="08" />
        <Picker.Item label="SEP" value="09" />
        <Picker.Item label="OCT" value="10" />
        <Picker.Item label="NOV" value="11" />
        <Picker.Item label="DEC" value="12" />
      </Picker>
    </View>
  );
};

export default MonthsComponent;
