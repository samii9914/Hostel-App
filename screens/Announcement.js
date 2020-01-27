import React from "react";
import { View, Text,FlatList } from "react-native";
import AppHeader from "../components/Header";
import Post from "../components/Post";
import { ScrollView } from "react-native-gesture-handler";

const Announcement = props => {
  return (
    <View>
      <AppHeader navigation={props.navigation} title="Announcement" />
      <ScrollView>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </ScrollView>
    </View>
  );
};

export default Announcement;