import React, { Component } from "react";
import { SafeAreaView, View, Text, Image, ImageBackground, KeyboardAvoidingView, Platform, Alert, Modal, Dimensions} from "react-native";
import Images from "../../assets/images";
import styles from "./StylesLogin";
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

export default class Login extends Component {
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
       const height =  Dimensions.get('window').height;
        const { emailValid, passwordValid, emailErrorMessage,isModalVisible ,isPasswordVisible,passwordErrorMessage } = this.state;
        return (
            <View style={{flex:1}}>
                <ImageBackground style={{flex:0.45,backgroundColor:'red'}} source={Images.HalfScreen}>
                    <View>
                    <Image source={Images.Logo}
                            style={styles.Img} />
                        <Text style={styles.Title1}>
                            QUIVIO
                        </Text>
                        <Text style={styles.Title2}>
                            Your Personal CarWash Assistant
                        </Text>
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
                </ImageBackground>
                <View style={{flex:0.55,backgroundColor:'blue'}}> 
                    
                </View>
            </View>
        )
    }
}
