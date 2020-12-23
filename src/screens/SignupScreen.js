import React, { useState, useContext } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from "react-native";
import { Button, Item, Input, Icon } from "native-base";

// import { Text, Input, Button, Image } from 'react-native-elements';
// import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { Feather, FontAwesome } from '@expo/vector-icons';



const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <View style={styles.v2}>
        <Image
          style={styles.loginLogoImg}
          resizeMode="contain"
          source={require("../../assets/images/GrayMatter-compressed.png")}
        />
      </View>
      <View style={styles.v3}>
        <Item style={styles.intxt}>
          <Feather 
            name="phone" 
            size={18} 
            color="black" 
            style={{
              margin:20
            }}
          />
          <Input
            placeholder="Phone Number"
            placeholderTextColor="#BDBDBD"
            maxLength={10}
            // onChangeText={phone => this.setState({ phone })}
            // value={this.state.phone}
            keyboardType="numeric"
            style={styles.fontSize16}
          />
          <FontAwesome
            name="chevron-circle-right"
            size={35}
            color="#00C7C7"
          />
        </Item>

        {/* <Item
      style={{
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        // borderRadius: 5,
        fontSize: 12,
        borderBottomColor: "transparent"
      }}
    >
      <Button style={styles.b1} onPress={() => this.login()}>
        <Text style={styles.t1}>Login</Text>
      </Button>
    </Item> */}
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
  container: {
    flex: 1,
    // backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center"
  },
  loginLogoImg: {
    width: 350
  },
  v2: { alignItems: "center", marginTop: 10 },
  v3: { alignItems: "center" },
  intxt: {
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 5,
    fontSize: 12
  },
  f18: { fontSize: 18, marginLeft: 10 },
  fontSize16: { 
    fontSize: 16,
    paddingLeft: 10
    // marginLeft: 10,
   },
  b1: {
    width: "100%",
    backgroundColor: "#69A13C",
    borderRadius: 5,
    height: 50,
    flex: 1,
    justifyContent: "center"
  },
  t1: { color: "#fff" },


});

export default SignupScreen;
