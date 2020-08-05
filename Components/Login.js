import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions ,ImageBackground,Button} from 'react-native'
import Login  from '../Components/Search'
import { createStackNavigator } from 'react-navigation-stack'



class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
     let screenWidth = Dimensions.get('window').width;
     
      return (
        
         <View style = {styles.container}>
         
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#FFFFFF"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#FFFFFF"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
         
     <Button title='Recherc' onPress={() => this.props.navigation.navigate('Search1')}/>
                
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
    container : {
      paddingHorizontal:16,
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
   backgroundColor: '#ADD8E6',
  },
   input: {
      borderRadius: 25,
        width:400,
      margin: 15,
      height: 40,
      borderColor: '#000000',
      borderWidth: 1
   },
   submitButton: {
      borderRadius: 25,
      backgroundColor: '#000000',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})