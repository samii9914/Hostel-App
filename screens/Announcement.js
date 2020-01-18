import React from "react";
import { View, Text } from "react-native";
import AppHeader from "../components/Header";

const Announcement = props => {
  return (
    <View>
      <AppHeader navigation={props.navigation} title="Announcement" />
      <Text>This is Announcement Screen</Text>
    </View>
  );
};

export default Announcement;