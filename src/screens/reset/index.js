import React, { Component } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Modal } from "react-native";
import Toast from 'react-native-toast-message';
import Images from "../../assets/images";
import styles from "./styles";
import PasswordInput from "../../components/passwordinput/passwordinput";
import Button from "../../components/button/button";
import CustomToast from "../../components/customToast";

export default class ResetPassword extends Component {
    state = {
        password: '',
        confirmPassword: '',
        passwordValid: true,
        confirmPasswordValid: true,
        isModalVisible: false,
        isPasswordVisible: false,
        isConfirmPasswordVisible: false,
        passwordErrorMessage: '',
        confirmPasswordErrorMessage: '',
        passwordCriteria: {
            length: false,
            specialChar: false,
            number: false,
            upperLowerCase: false,
        },
    };

    handlePasswordChange = (password) => {
        this.setState({ password }, () => {
            this.validateInputs();
            this.validatePasswordCriteria(password);
        });
    };

    handleConfirmPasswordChange = (confirmPassword) => {
        this.setState({ confirmPassword }, this.validateInputs);
    };

    validatePasswordCriteria = (password) => {
        const passwordCriteria = {
            length: password.length >= 8,
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
            number: /\d/.test(password),
            upperLowerCase: /[a-z]/.test(password) && /[A-Z]/.test(password),
        };

        this.setState({ passwordCriteria });
    };

    validatePassword = (password) => {
        const { length, specialChar, number, upperLowerCase } = this.state.passwordCriteria;
        return length && specialChar && number && upperLowerCase;
    };

    validateInputs = () => {
        const { password, confirmPassword } = this.state;
        const passwordValid = this.validatePassword(password);
        const confirmPasswordValid = password === confirmPassword;

        this.setState({
            passwordValid,
            confirmPasswordValid,
            passwordErrorMessage: passwordValid ? '' : 'Invalid password entered',
            confirmPasswordErrorMessage: confirmPasswordValid ? '' : 'Passwords do not match',
        });

        if (!confirmPasswordValid) {
            Toast.show({
                type: 'error',
                text1: 'Password Mismatch',
                position: 'top',
                topOffset: 60,
                visibilityTime: 3000,
            });
        }

        return passwordValid && confirmPasswordValid;
    };

    handleBlurPassword = () => {
        const { password } = this.state;
        this.setState({
            passwordValid: this.validatePassword(password),
        });
    }

    closeModal = () => {
        this.setState({ isModalVisible: false });
        const { navigation } = this.props;
        navigation.navigate('LoginPage');
    };

    PasswordVisibility = () => {
        this.setState(prevState => ({
            isPasswordVisible: !prevState.isPasswordVisible,
        }));
    };

    ConfirmPasswordVisibility = () => {
        this.setState(prevState => ({
            isConfirmPasswordVisible: !prevState.isConfirmPasswordVisible,
        }));
    };

    handleButtonPress = () => {
        if (this.validateInputs()) {
            this.setState({ isModalVisible: true });
        }
    };

    renderPasswordCriteria = () => {
        const { password, passwordCriteria } = this.state;

        if (password.length > 0 ) { // Only show criteria if typing started
            return (
                
                <View>
                    <View style={styles.criteriaRow}>
                        <Image source={passwordCriteria.length ? Images.GreenTick : Images.Cross} style={styles.criteriaIcon} />
                        <Text style={passwordCriteria.length ? styles.validCriteria : styles.invalidCriteria}>
                            8 characters or above
                        </Text>
                    </View>
                    <View style={styles.criteriaRow}>
                        <Image source={passwordCriteria.specialChar ? Images.GreenTick : Images.Cross} style={styles.criteriaIcon} />
                        <Text style={passwordCriteria.specialChar ? styles.validCriteria : styles.invalidCriteria}>
                            1 or more special characters
                        </Text>
                    </View>
                    <View style={styles.criteriaRow}>
                        <Image source={passwordCriteria.number ? Images.GreenTick : Images.Cross} style={styles.criteriaIcon} />
                        <Text style={passwordCriteria.number ? styles.validCriteria : styles.invalidCriteria}>
                            1 or more numbers
                        </Text>
                    </View>
                    <View style={styles.criteriaRow}>
                        <Image source={passwordCriteria.upperLowerCase ? Images.GreenTick : Images.Cross} style={styles.criteriaIcon} />
                        <Text style={passwordCriteria.upperLowerCase ? styles.validCriteria : styles.invalidCriteria}>
                            Upper and lowercase
                        </Text>
                    </View>
                </View>
            );
        }
        return null; // Don't render if no input
    };

    render() {
        const { passwordValid, confirmPasswordValid, isModalVisible, isPasswordVisible, isConfirmPasswordVisible, passwordErrorMessage, confirmPasswordErrorMessage } = this.state;
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
                topOffset={100}
            >
                <View style={styles.Maincontainer}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={this.handleNav}>
                            <Image source={Images.Logo2} style={styles.img} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container2}>
                        <View style={styles.TextView}>
                            <Text style={styles.Title1}>Reset Password</Text>
                            <Text style={styles.Title2}>Enter in your new password.</Text>

                            <PasswordInput
                                pass={'New Password'}
                                onChangeText={this.handlePasswordChange}
                                onBlur={this.handleBlurPassword}
                                isValid={passwordValid}
                                isPasswordVisible={isPasswordVisible}
                                onPress={this.PasswordVisibility}
                                errorMessage={passwordErrorMessage}
                            />

                            {/* Render live password criteria */}
                            {this.renderPasswordCriteria()}

                            <PasswordInput
                                pass={'Confirm Password'}
                                onChangeText={this.handleConfirmPasswordChange}
                                onBlur={this.validateInputs}
                                isValid={confirmPasswordValid}
                                isPasswordVisible={isConfirmPasswordVisible}
                                onPress={this.ConfirmPasswordVisibility}
                                errorMessage={confirmPasswordErrorMessage}
                            />
                        </View>
                        <View style={styles.ButtomDiv}>
                            <Button title={'Continue'} onPress={this.handleButtonPress} />
                        </View>
                    </View>
                </View>
                <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="slide"
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image source={Images.UpdatePass} style={{ height: 60, width: 60 }} />
                            <Text style={styles.modalTitle}>Password Updated</Text>
                            <Text style={styles.modalMessage}>
                                Your new password has been updated successfully.
                            </Text>
                            <Button title="Back to Login" onPress={this.closeModal} />
                        </View>
                    </View>
                </Modal>
                <Toast
                    config={{ error: ({ text1 }) => <CustomToast text1={text1} /> }}
                    ref={(ref) => Toast.setRef(ref)} />
            </KeyboardAvoidingView>
        );
    }
}
