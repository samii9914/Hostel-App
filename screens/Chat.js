import React from "react";
import { View, Text } from "react-native";
import AppHeader from "../components/Header";

const Chat = props => {
  return (
    <View>
      <AppHeader navigation={props.navigation} title="Chat" />
      <Text>This is Chat Screen</Text>
    </View>
  );
};

export default Chat;