import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";
import { Button, Item, Input, Icon, Toast } from "native-base";
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import * as Constants from "../screens/AppConstants";
// import { Text, Input,  } from 'react-native-elements';
import axios from "axios";
import { Context as AuthContext } from '../context/AuthContext';



const SignupScreen = props => {
  // console.log(props);
  const { state, signup } = useContext(AuthContext);
  const [phoneNumber, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.loginLogoImg}
        resizeMode="contain"
        source={require("../../assets/images/GrayMatter-compressed.png")}
      />

      <View style={styles.v3}>
        <Item style={[styles.intxt, phoneNumber.length < 10 ? styles.textinvalid : styles.textvalid]}>
          {
            phoneNumber.length < 10 ? 
            <FontAwesome
              name="phone"
              size={18}
              style={{
                margin: 20,
                color: "red"
              }}
            /> : 
            <FontAwesome
                name="phone"
                size={18}
                style={{
                  margin: 20,
                  color: "black"
                }}
              />
          }

          <Input
            placeholder="Phone Number"
            placeholderTextColor="#BDBDBD"
            maxLength={10}
            keyboardType="numeric"
            style={[styles.phoneInput]}
            value={phoneNumber}
            onChangeText={newValue => setPhone(newValue)}
          />

          {
            phoneNumber.length < 10 ?
              <FontAwesome
                name="chevron-circle-right"
                size={35}
                color="#e2e2e2"
                style={
                  { marginRight: 10 }
                }
              />
              :
              <FontAwesome
                name="chevron-circle-right"
                size={35}
                color="#00C7C7"
                style={{
                  marginRight: 10
                }}
                //  () => _sendOTP(phoneNumber)
                onPress={ () => props.navigation.navigate('OTP', { phoneNumber})}
                // onPress={ () => _sendOTP(num)}

              />
          }
        </Item>
        {
          phoneNumber.length < 10 ? 
          <View style={styles.ErrContainer}>
            <MaterialIcons 
              name="error" 
              size={18} 
              color="red" 
              />
            <Text style={styles.phoneError}>
            
              Please Enter 10 digit number
              </Text>
          </View> : null
        }
        <View style={styles.textContainer}>
          <Text style={styles.otpText}> OTP WILL BE SENT TO THIS NUMBER</Text>
        </View>

      </View>



    </View>

  );
};




SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  phoneError: {
    color: "red",
    alignItems: "flex-start",
    position:"absolute",
    marginTop:0,
    marginLeft:23
  },
  ErrContainer: {
    marginLeft: 35,
    fontSize: 8
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginLogoImg: {
    width: "80%",
    height: "25%",

  },
  v3: {
    alignItems: "flex-start",
    marginTop: 20
  },
  intxt: {
    backgroundColor: "white",
    borderTopColor: "#00C7C7",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    borderRadius: 5,
    fontSize: 12
  },
  phoneInput: {
    fontSize: 16
  },
  mobilePhone: {
    borderColor: "red",
    borderTopColor: "red",
    marginLeft: 10
  },
  textContainer: {
    justifyContent: "flex-start",
    width: "100%",
    marginLeft: 20,
    marginTop: 0


  },
  otpText: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 10,
    marginTop: 8
  },
  textvalid: {
    borderWidth: 2,
    borderColor: '#00C7C7',
  },
  textinvalid: {
    borderColor: 'red',
  },


});

export default SignupScreen;
