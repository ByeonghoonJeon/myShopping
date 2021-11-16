import React from "react";
import { View, Text, FlatList } from "react-native";
import MainItem from "../MainItem";

import styles from "./styles";
import mains from "./mains";

const MainList = (props) => {
  console.log(mains);
  return (
    <View style={styles.container}>
      <FlatList
        data={mains}
        renderItem={({ item }) => <MainItem main={item} />}
      />
    </View>
  );
};

export default MainList;
