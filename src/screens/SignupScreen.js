import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";
import { Button, Item, Input, Icon } from "native-base";
import { Feather, FontAwesome } from '@expo/vector-icons';
// import { Text, Input,  } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';



const SignupScreen = props => {
  console.log(props);
  const { state, signup } = useContext(AuthContext);
  const [phoneNumber, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      

      <Image
        style={styles.loginLogoImg}
        resizeMode="contain"
        source={require("../../assets/images/GrayMatter-compressed.png")}
      />

      <View style={styles.v3}>
        <Item style={[styles.intxt, phoneNumber.length < 10 ? styles.textinvalid : styles.textvalid]}>
          <Feather
            name="phone"
            size={18}
            color="black"
            style={{
              margin: 20
            }}
          />
          <Input
            placeholder="Phone Number"
            placeholderTextColor="#BDBDBD"
            maxLength={10}
            keyboardType="numeric"
            style={[styles.phoneInput] }
            value={phoneNumber}
            onChangeText={newValue => setPhone(newValue)}
          />


          {
            phoneNumber.length < 10 ? 
            <FontAwesome
            name="chevron-circle-right"
            size={35}
            color="#e2e2e2"
            
          />
            : 
            <FontAwesome
            name="chevron-circle-right"
            size={35}
            color="#00C7C7"
            
            onPress={() => { props.navigation.navigate('OTP', { phoneNumber }) }}
          />
          }

          

        </Item>
        {
          phoneNumber.length < 10 ? <View style={styles.ErrContainer}><Text style={styles.phoneError}>Please Enter 10 digit number</Text></View> : null
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
    alignItems: "flex-start"
  },
  ErrContainer: {
    marginLeft:35,
    fontSize:8
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
    borderTopColor:"#00C7C7",
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
