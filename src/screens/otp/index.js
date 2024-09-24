import React, { Component } from "react";
import { SafeAreaView,View,Text, Image ,TouchableOpacity,KeyboardAvoidingView, Alert, TextInput,Modal} from "react-native";
import Images from "../../assets/images";
import styles from "./styles";
import Button from "../../components/button/button";
import Toast from "react-native-toast-message";
import CustomToast from "../../components/customToast";



const defaultOtp = 123456; 
export default class Otp extends Component{
    state = {
        otp: ['', '', '', '', '', ''],
        isModalVisible:false,
        otpError: ''
    };

    handleOtpChange = (text, index) => {
        const { otp } = this.state;
        const value = text.replace(/[^0-9]/g, ''); 
        otp[index] = value.slice(-1); 
        this.setState({ otp }, () => {
            if (value && index < 5) {
                this[`input${index + 1}`].focus(); 
            }
        });
    };
    handleKeyPress = (key, index) => {
        if (key === 'Backspace' && index > 0) {
            this[`input${index - 1}`].focus();
        }
    };
    handleHome =()=>{
        const{navigation}=this.props;
        navigation.navigate('Home');
    };
    onConfirmLogin = () => {

        const newOtp = this.state.otp.join('')
        if(defaultOtp == newOtp){
            
            this.setState({isModalVisible: true})
        }
        else 
        (Toast.show({
            text1: 'Wrong Otp',
            type: 'error',
            position: 'top',
            topOffset: 60,
            visibilityTime: 3000,
        }));
        return false;
    };

    handleBack =() =>{
        const { navigation , OtpError, otpError} = this.props;
        navigation.navigate('AddPhone')
    }
    closeModal =() => {
        const { navigation } = this.props;
        this.setState ({isModalVisible:false})
        navigation.navigate('TwoFA')
    }
    handleNav =()=>{
       
       {
        this.setState({isModalVisible:true})
        return;
        }
      
    }
    render(){
        const {  isModalVisible} = this.state;
        return(
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 ,backgroundColor:'#E6EDF3'}}
            >
            <SafeAreaView style={styles.Maincontainer}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.handleBack}>
                    <Image source={Images.backarrow}
                    style ={styles.img}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.TextView}>
                <Text style={styles.Title1}>Verify Account Access</Text>
                <Text style={styles.Title2}>Enter the verification code sent to ,{'\n'}+1-788-895-5435.</Text>
                </View>
                <View style={styles.inputBox}>
                {this.state.otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            style={styles.otpInput}
                            keyboardType="numeric"
                            maxLength={1}
                            value={digit}
                            onChangeText={(text) => this.handleOtpChange(text, index)}
                            onKeyPress={({ nativeEvent: { key } }) => this.handleKeyPress(key, index)}
                            ref={(input) => { this[`input${index}`] = input }}
                            textAlign="center"
                        />
                    ))}
                </View>
                {/* {otpError ? <Text style={styles.errorText}>{otpError}</Text> : null} */}
                <View style={styles.ButtomDiv}>
                <Button title={'Send Code'} onPress={this.onConfirmLogin}/>
                </View>
            </SafeAreaView>
            <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="slide"
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image source={Images.AccountVerified} style={styles.ModalImg} />
                            <Text style={styles.modalTitle}>Account Verified!</Text>
                            <Text style={styles.modalMessage}>
                            Your account has been verified successfully.
                            </Text>
                            <View style={{flexDirection:'row'}}>
                            <Button title="Back to Home" onPress={this.handleHome} />
                            </View>
                        </View>
                    </View>
                </Modal>
            <Toast 
            config={{ error: ({ text1 }) => <CustomToast text1 = {text1}/>}} 
            ref={(ref) => Toast.setRef(ref)} />
            </KeyboardAvoidingView>
        )
    }
}