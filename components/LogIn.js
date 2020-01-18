import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button } from 'react-native-elements';
const LogIn = ({history}) => { 
    return (
      <View >
        <View style={styles.viewInput}>
            <Input
            placeholder=' Enter Username'
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            />
        </View>
        <View style={styles.viewInput}>
            <Input   
            secureTextEntry={true}
            placeholder=' Enter Password'
            leftIcon={
                <Icon
                name='key'
                size={24}
                color='black'
                />
            }
            />
        </View>
        <View style={styles.viewInput}>
            <Button
            raised
            icon={
                <Icon
                name="arrow-right"
                size={15}
                color="white"  
                />
            }
            title=" Log In"
            onPress={()=>{
              return(history.push("/home"))}}
            />
        </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:30,
      alignItems: 'stretch',
      
    },
    viewInput: {
      margin:15,
    }
  });
export default LogIn;