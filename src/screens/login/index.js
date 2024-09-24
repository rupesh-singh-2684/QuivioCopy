import React, { Component } from "react";
import { SafeAreaView, View, Text, Image, ImageBackground, KeyboardAvoidingView, Platform, Alert, Modal} from "react-native";
import Images from "../../assets/images";
import styles from "./styles";
// import { FlatList } from "react-native";
import Button from "../../components/button/button";
import PasswordInput from "../../components/passwordinput/passwordinput";
import EmailInput from "../../components/emailinput/emailinput";
import AutoScroll from "@homielab/react-native-auto-scroll";
import Toast from 'react-native-toast-message';
import CustomToast from "../../components/customToast";

// const arr = [
//     {
//         iconname: Images.graph,
//         text1: 'Aesthetical',
//         text2: 'Graphics',
//     },
//     {
//         iconname: Images.time,
//         text1: 'Real Time',
//         text2: 'statistics',
//     },
//     {
//         iconname: Images.tube,
//         text1: 'Track eco',
//         text2: 'Usage',
//     },

// ]
var locked = false
var attempts = 0
const defaultMail = 'Rs@gmail.com'
const defaultPass = 'Rupesh@1234'

export default class LoginPage extends Component {
    state = {
        email: '',
        password: '',
        emailValid: true,
        passwordValid: true,
        emailErrorMessage: '',
        passwordErrorMessage: '',
        isModalVisible: false,
        isPasswordVisible: true,
    };

    handleEmailChange = (email) => {
        this.setState({ email });
    };

    handlePasswordChange = (password) => {
        this.setState({ password });
    };

    validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=(?:.*\d){4,})(?=.*[a-zA-Z]).{8,}$/;
        return passwordRegex.test(password);
      };

    validateInputs = () => {
        const { email, password } = this.state;
        const emailValid = this.validateEmail(email);
        const passwordValid = this.validatePassword(password);

        this.setState({
            emailValid: emailValid,
            passwordValid: passwordValid,
            emailErrorMessage: emailValid ? '' : 'Invalid email address entered',
            passwordErrorMessage: passwordValid ? '' : 'Invalid password entered',
        });

        return emailValid && passwordValid;
    };

    handleBlurEmail = () => {
        const { email } = this.state;
        const emailValid = this.validateEmail(email);
        this.setState({
            emailValid: emailValid,
            emailErrorMessage: emailValid ? '' : 'Invalid email address entered',
        });
    };

    handleBlurPassword = () => {
        const { password } = this.state;
        const passwordValid = this.validatePassword(password);
        this.setState({ 
            passwordValid: passwordValid,
            passwordErrorMessage: passwordValid ? '' : 'Invalid password entered',
    });
    }   
    PasswordVisibility = () => {
        this.setState(prevState => ({
            isPasswordVisible: !prevState.isPasswordVisible,
        }));
    };

    closeModal =() => {
        this.setState ({isModalVisible:false})
    }

    handleButtonPress = () => {
        const { email,password } = this.state;
        if (locked) {
            this.setState({isModalVisible:true})
            return;
        }
        else if (this.validateInputs() && defaultMail === email && defaultPass === password) {
            const { navigation } = this.props;
            navigation.navigate('BottomTab');
        }
        else {
            Toast.show({
                text1: 'Invalid credentials. Please try again.',
                type: 'error',
                position: 'top',
                topOffset: 60,
                visibilityTime: 3000,
            });
            attempts++;
            if (attempts >= 3) {
                locked = "true"
            }
        }
    };
    handleNav = () => {
        const { navigation } = this.props;
        navigation.navigate('ForgetPage')
    }
    // renderItem = ({ item }) => {
    //     return (
    //         <View style={styles.renderItem}>

    //             <>

    //                 <Image
    //                     source={item.iconname}
    //                     style={{ height: 20, width: 20, marginTop: 10 }} />
    //                 <View style={{ marginStart: 10 }}>
    //                     <Text style={{ color: 'white' }}>
    //                         {item.text1}
    //                     </Text>

    //                     <Text style={{ color: 'white' }}>
    //                         {item.text2}
    //                     </Text>
    //                 </View>
    //             </>

    //         </View>
    //     )
    // }
    render() {
        const { emailValid, passwordValid, emailErrorMessage,isModalVisible ,isPasswordVisible,passwordErrorMessage } = this.state;
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={180}
                style={styles.keyboardView}>
                {/* <View style={{ flex: 1 }}> */}
                <View style={styles.view1}>
                    <ImageBackground source={Images.HalfScreen}
                        style={styles.BgImg}
                    />
                    <View style={styles.container2}>
                        <Image source={Images.Logo}
                            style={styles.Img} />

                        <Text style={styles.Title1}>
                            QUIVIO
                        </Text>
                        <Text style={styles.Title2}>
                            Your Personal CarWash Assistant
                        </Text>
                        {/* <FlatList
                            data={arr}
                            horizontal={true}
                            showsHorizontalScrollIndicator={true}
                            renderItem={this.renderItem}
                        /> */}
                        <AutoScroll endPaddingWidth={0}>
                            <View style={styles.listContainer}>
                                <Image source={Images.graph} style={styles.listIcon} />
                                <Text style={styles.listText}>Aesthetical{'\n'}Graphics</Text>

                                <Image source={Images.time} style={styles.listIcon} />
                                <Text style={styles.listText}>Real time{'\n'}statistics</Text>

                                <Image source={Images.tube} style={styles.listIcon} />
                                <Text style={styles.listText}>Track equipment{'\n'}usage</Text>
                            </View>
                        </AutoScroll>
                    </View>
                </View>
                <View style={styles.view2}>
                    <View style={styles.signinview2}>
                    <View style={styles.signinView}>
                        <Text style={styles.textHead2}>Sign in</Text>
                        <Text style={styles.text2}>with your valid credentials</Text>
                        <EmailInput
                            onChangeText={this.handleEmailChange}
                            onBlur={this.handleBlurEmail}
                            isValid={emailValid}
                            errorMessage={emailErrorMessage}
                        />
                        <PasswordInput
                            pass={'Password'}
                            onChangeText={this.handlePasswordChange}
                            onBlur={this.handleBlurPassword}
                            isValid={passwordValid}
                            isPasswordVisible={isPasswordVisible}
                            onPress={this.PasswordVisibility}
                            errorMessage={passwordErrorMessage}
                        />
                        <View style={styles.forgetdiv}>
                            <Text onPress={this.handleNav}>Forget Password</Text>
                        </View>
                        <Button title={'Primary'} onPress={this.handleButtonPress} />
                    </View>
                    </View>
                </View>
                {/* </View> */}
                <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="slide"
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image source={Images.AccountLocked} style={styles.ModalImg} />
                            <Text style={styles.modalTitle}>Account Locked</Text>
                            <Text style={styles.modalMessage}>
                                Your account has been locked due to too many failed login attempts. Please try again after some time.
                            </Text>
                            <Button title="Okay" onPress={this.closeModal} />
                        </View>
                    </View>
                </Modal>
                <Toast config={{ error: ({ text1 }) => <CustomToast text1 = {text1}/>}} 
                ref={(ref) => Toast.setRef(ref)} />
            </KeyboardAvoidingView>
        )
    }
}