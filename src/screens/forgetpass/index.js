import React, { Component } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Platform, Alert,Modal } from "react-native";
import Images from "../../assets/images";
import styles from "./styles";
import EmailInput from "../../components/emailinput/emailinput";
import Button from "../../components/button/button";
import Toast from 'react-native-toast-message';
import CustomToast from "../../components/customToast";


const defaultMail = 'Rs@gmail.com'


export default class ForgetPassword extends Component {

    state = {
        email: '',
        emailValid: true,
        emailErrorMessage: '',
        isModalVisible: false,

    };

    handleEmailChange = (email) => {
        this.setState({ email });
    };



    validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    validateInputs = () => {
        const { email } = this.state;
        const emailValid = this.validateEmail(email);


        this.setState({
            emailValid: emailValid,

            emailErrorMessage: emailValid ? '' : 'Invalid email address entered',
        });

        return emailValid;
    };

    handleBlurEmail = () => {
        const { email } = this.state;
        const emailValid = this.validateEmail(email);
        this.setState({
            emailValid: emailValid,
            emailErrorMessage: emailValid ? '' : 'Invalid email address entered',
        });
    };

    closeModal =() => {
        this.setState ({isModalVisible:false})
        // const { navigation } = this.props;
        //     navigation.navigate('LoginPage');
    }

    handleButtonPress = () => {

        const { email } = this.state;
        if (this.validateInputs() && defaultMail != email) {
            Toast.show({
                text1: 'Email not found. Contact admin',
                type: 'error',
                position: 'top',
                topOffset: 60,
                visibilityTime: 3000,
            });
        }
        else if (this.validateInputs()) {
            const { navigation } = this.props;
            navigation.navigate('ResetPassword');
            this.setState({isModalVisible:true})
        }

    };


    handleNav = () => {
        const { navigation } = this.props;
        navigation.navigate('LoginPage')
    }


    render() {
        const { emailValid, emailErrorMessage ,isModalVisible} = this.state;
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <SafeAreaView style={styles.Maincontainer}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={this.handleNav}>
                            <Image source={Images.backarrow}
                                style={styles.img} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container2}>


                        <View style={styles.TextView}>
                            <Text style={styles.Title1}>Forgot Password</Text>
                            <Text style={styles.Title2}>Reset your password with just a few clicks</Text>

                            <EmailInput
                                onChangeText={this.handleEmailChange}
                                onBlur={this.handleBlurEmail}
                                isValid={emailValid}
                                errorMessage={emailErrorMessage} />

                        </View>
                        <View style={styles.ButtomDiv}>
                            <Button title={'Send Link'} onPress={this.handleButtonPress} />
                        </View>
                    </View>
                </SafeAreaView>

                <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="slide"
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image source={Images.LinkSent} style={{ height: 60, width: 60 }} />
                            <Text style={styles.modalTitle}>Link Sent</Text>
                            <Text style={styles.modalMessage}>
                            The link to reset your password has been sent on your email address.
                            </Text>
                            <Button title="Okay" onPress={this.closeModal} />
                        </View>
                    </View>
                </Modal>
                <Toast config={{error :({ text1 }) => <CustomToast text1 = {text1}/>}}
                 ref={(ref) => Toast.setRef(ref)} />
            </KeyboardAvoidingView>
        )
    }
}