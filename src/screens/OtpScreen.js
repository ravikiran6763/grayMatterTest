import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Item, Input } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
class OtpScreen extends React.Component {
    state={otp:[]};
    otpDigit = [];

    componentDidMount() {
        this.otpDigit[0]._root.focus();
    }

    render() {
        return (
            <Content padder>
                <Grid style={styles.gridPad}>
                    {this.renderDigits()}
                </Grid>
            </Content>
        );
    }

    renderDigits() {
        const inputs = Array(4).fill(0);
        const txt = inputs.map(
            (i, j) => <Col key={j} style={styles.txtMargin}><Item regular>
                <Input
                    style={[styles.inputRadius, { borderRadius: 10 }]}
                    keyboardType="numeric"
                    onChangeText={v => this.nextInput(j, v)}
                    onKeyPress={e => this.prevInput(e.nativeEvent.key, j)}
                    ref={ref => this.otpDigit[j] = ref}
                />
            </Item></Col>
        );
        return txt;
    }

    nextInput(index, value) {
        if (index < this.otpDigit.length - 1 && value) {
            this.otpDigit[index + 1]._root.focus();
        }
        if (index === this.otpDigit.length - 1) {
            this.otpDigit[index]._root.blur();
        }
        const otp = this.state.otp;
        otp[index] = value;
        this.setState({ otp });
        // this.props.getOtp(otp.join(''));
    }

    prevInput(key, index) {
        if (key === 'Backspace' && index !== 0)
            this.otpDigit[index - 1]._root.focus();
    }

}
const styles = StyleSheet.create({
    gridPad: { 
        padding: 60 
    },
    txtMargin: { 
        margin: 3 
    },
    inputRadius: { 
        textAlign: 'center' 
    }
});

export default OtpScreen;
