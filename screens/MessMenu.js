import React from "react";
import { View, Text } from "react-native";
import AppHeader from "../components/Header";

const MessMenu = props => {
  return (
    <View>
      <AppHeader navigation={props.navigation} title="MessMenu" />
      <Text>This is MessMenu Screen</Text>
    </View>
  );
};

export default MessMenu;