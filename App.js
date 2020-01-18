import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import LogIn from './components/LogIn.js'
import Header from './components/Header.js'
import AppNavigator from './components/Navigator'
import {NativeRouter,Switch, Route } from "react-router-native"

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={LogIn}/>
          <Route exact path="/home" component={AppNavigator}/>
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
      
  }, 
});
