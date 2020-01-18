import React from "react";
import { View, Text } from "react-native";
import AppHeader from "../components/Header";

const Complaint = props => {
  return (
    <View>
      <AppHeader navigation={props.navigation} title="Complaint" />
      <Text>This is Complaint Screen</Text>
    </View>
  );
};

export default Complaint;