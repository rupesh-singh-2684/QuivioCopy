import React, { Component } from "react";
import { SafeAreaView,View,Text, Image ,TouchableOpacity,KeyboardAvoidingView, Alert,Modal} from "react-native";
import Images from "../../assets/images";
import styles from "./styles";
import PhoneInput from 'react-native-phone-number-input';
import Button from "../../components/button/button";
import Toast from "react-native-toast-message";
import CustomToast from "../../components/customToast";


var locked = false
export default class AddPhone extends Component{
    state = {
        countryCode: 'US',
        phoneNumber: '',
        phoneNumberError: '',
        isModalVisible: false,
    };

    onSelect = (country) => {
        this.setState({ countryCode: country.cca2 });
    };

    validatePhoneNumber = () => {
        const { phoneNumber } = this.state;
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
            this.setState({ phoneNumberError: 'Phone number must be 10 digits and numeric only.' });
            Toast.show({
                text1: 'User exists. Try a different number.',
                type: 'error',
                position: 'top',
                topOffset: 60,
                visibilityTime: 3000,
            });
            return false;
        }
        
        this.setState({ phoneNumberError: '' });
        return true;
    };

    closeModal =() => {
        const { navigation } = this.props;
        this.setState ({isModalVisible:false})
        navigation.navigate('Home')
    }
    closeModalcontinue =() => {
        const { navigation } = this.props;
        this.setState ({isModalVisible:false})
        navigation.navigate('AddPhone')
    } 

    handleNav =()=>{
       
       {
        this.setState({isModalVisible:true})
        return;
        }
      
    }
    onSendCodePress = () => {
        if (this.validatePhoneNumber()) {
            console.log('Phone number is valid. Proceed with sending code.');
            const { navigation } = this.props;
            navigation.navigate('Otp')
        } else {
            console.log('Invalid phone number.');
        }
    };
    render(){
        const { phoneNumberError ,isModalVisible} = this.state;
        return(
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 ,backgroundColor:'#E6EDF3'}}
            >
            <SafeAreaView style={styles.Maincontainer}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.handleNav}>
                    <Image source={Images.backarrow}
                    style ={styles.img}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.TextView}>
                <Text style={styles.Title1}>Add Phone Number</Text>
                <Text style={styles.Title2}>To initiate the two-factor authentication,{'\n'}provide your phone number below.</Text>
                </View>
                <View style={styles.inputBox}>
                    
                    <PhoneInput
                        defaultValue={this.state.phoneNumber}
                        defaultCode={this.state.countryCode}
                        layout='first'
                        onChangeCountry={this.onSelect}
                        onChangeText={(text) => this.setState({ phoneNumber: text })}
                        containerStyle={styles.phoneInputContainer}
                        textContainerStyle={styles.textInputContainer}
                        codeTextStyle={styles.codeText}
                        textInputStyle={styles.phoneText}
                        flagButtonStyle={styles.flagButton}
                    />
                   
                </View>
                {phoneNumberError ? <Text style={styles.errorText}>{phoneNumberError}</Text> : null}
                <View style={styles.ButtomDiv}>
                <Button title={'Send Code'} onPress={this.onSendCodePress}/>
                </View>
            </SafeAreaView>
            <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="slide"
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image source={Images.Exit} style={styles.ModalImg} />
                            <Text style={styles.modalTitle}>Exit 2FA?</Text>
                            <Text style={styles.modalMessage}>
                            Are you sure you want to exit 2FA, You will need to redo it again.
                            </Text>
                            <View style={{flexDirection:'row'}}>
                            <Button title="No, Continue" onPress={this.closeModalcontinue} />
                            <Button title="Yes, Exit" onPress={this.closeModal} />
                            </View>
                        </View>
                    </View>
                </Modal>
            <Toast config={{error :({text1}) => <CustomToast text1= {text1}/>}} 
            ref={(ref) => Toast.setRef(ref)} />
            </KeyboardAvoidingView>
        )
    }
}