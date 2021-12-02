import React, { useState } from "react";
import { View, Picker } from "react-native";
import SignUpStyles from "./SignUpStyles";
const TimeComponent = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("JAN");
  return (
    <View style={SignUpStyles.MonthPicker}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="TIME" value="null" />
        <Picker.Item label="AM12" value="00" />
        <Picker.Item label="AM 1" value="01" />
        <Picker.Item label="AM 2" value="02" />
        <Picker.Item label="AM 3" value="03" />
        <Picker.Item label="AM 4" value="04" />
        <Picker.Item label="AM 5" value="05" />
        <Picker.Item label="AM 6" value="06" />
        <Picker.Item label="AM 7" value="07" />
        <Picker.Item label="AM 8" value="08" />
        <Picker.Item label="AM 9" value="09" />
        <Picker.Item label="AM10" value="10" />
        <Picker.Item label="AM11" value="11" />
        <Picker.Item label="PM 1" value="13" />
        <Picker.Item label="PM 2" value="14" />
        <Picker.Item label="PM 3" value="15" />
        <Picker.Item label="PM 4" value="16" />
        <Picker.Item label="PM 5" value="17" />
        <Picker.Item label="PM 6" value="18" />
        <Picker.Item label="PM 7" value="19" />
        <Picker.Item label="PM 8" value="20" />
        <Picker.Item label="PM 9" value="21" />
        <Picker.Item label="PM10" value="22" />
        <Picker.Item label="PM11" value="23" />
        <Picker.Item label="PM12" value="00" />
      </Picker>
    </View>
  );
};

export default TimeComponent;
