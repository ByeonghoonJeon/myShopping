import React, { useState } from "react";
import { View, Picker } from "react-native";
import SignUpStyles from "./SignUpStyles";
const SolarLunarComponent = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("JAN");
  return (
    <View style={SignUpStyles.SolarLunarPicker}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="SOL" value="solar" />
        <Picker.Item label="LUN" value="lunar" />
      </Picker>
    </View>
  );
};

export default SolarLunarComponent;
