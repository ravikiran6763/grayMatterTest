import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Content, Item, Input, View, Toast } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
import Spacer from '../components/Spacer';
import * as Constants from "../screens/AppConstants";
import axios from "axios";
import { Button } from "react-native-paper";

class OtpScreen extends React.Component {


    state = { 
        otp: [],
        disabled: false
     };
    otpDigit = [];
    componentDidMount() {
        this.otpDigit[0]._root.focus();
    }

    render() {
        const { params } = this.props.navigation.state;
        console.log(params.phoneNumber);
        console.log(params.OTPVal);

        return (
            <Content>
                <Text h2> Enter OTP Code</Text>
                <Text h4> Pease verify your 4 digit OTP number </Text>
                <Text h4 style={{ marginRight: 20 }}>sent to {params.phoneNumber}</Text>
                <Grid style={styles.gridPad}>
                    {this.renderDigits()}
                </Grid>
                <View style={styles.resendContainer}>
                    <Text style={styles.otpErr}>Didn't receive code?</Text>
                    <Text style={styles.resendLink}>Resend</Text>

                </View>
                <Spacer />
                <Spacer />
                <View style={styles.buttonContainer}>
                   
                    <Button
                        style={styles.verifyButton}
                        mode="contained"
                        
                    >
                        Verify OTP
                  </Button>
                </View>

            </Content>

        );
    }

    _sendOTP = async ( ) => {
        // 
        const phoneno = params.phoneNumber;
        const config = {
            method: "post",
            url: Constants.Baseurl.URL + Constants.Api.sendotp,
            data: phoneno
        };
        axios(config).then(async res => {
            const data = await res.data;

        });

    };


    renderDigits() {
        const inputs = Array(4).fill(0);
        const txt = inputs.map(
            (i, j) => <Col key={j} style={styles.txtMargin}>
                <Item regular>
                    <Input
                        style={[styles.inputRadius, { borderRadius: 10 }]}
                        autoFocus={true}
                        keyboardType="numeric"
                        placeholder="."
                        placeholderTextColor="blue"
                        maxLength={1}
                        onChangeText={v => this.nextInput(j, v)}
                        onKeyPress={e => this.prevInput(e.nativeEvent.key, j)}
                        ref={ref => this.otpDigit[j] = ref}
                        
                    />
                </Item>
            </Col>
        );
        return txt;
    }

    nextInput(index, value) {
        console.log(index);
        console.log(value);

        if (index < this.otpDigit.length - 1 && value) {
            this.otpDigit[index + 1]._root.focus();
        }
        if (index === this.otpDigit.length - 1) {
            this.otpDigit[index]._root.blur();
        }
        const otp = this.state.otp;
        otp[index] = value;
        this.setState({ otp });
        // const joinOtp = this.props.getOtp(otp.join(''));
        // console.log(joinOtp)
    }

    prevInput(key, index) {
        if (key === 'Backspace' && index !== 0) {
            this.otpDigit[index - 1]._root.focus();

        }

    }


}
const styles = StyleSheet.create({
    gridPad: {
        padding: 60,
    },
    txtMargin: {
        margin: 5,
    },
    inputRadius: {
        textAlign: 'center',

    },
    resendContainer: {
        marginLeft: 20
    },
    otpErr: {
        fontSize: 20
    },
    resendLink: {
        fontSize: 20,
        color: '#C76700',
        position: "absolute",
        marginLeft: 180
    },
    buttonContainer: {
        marginLeft: 20,
        width: "60%"
    },
    verifyButton: {
        backgroundColor: "#C76700",
        marginTop: 0,
        width: "75%",
        borderRadius: 3,
        paddingVertical: 3
    }

});

export default OtpScreen;
