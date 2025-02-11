import React, { Component } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Modal } from "react-native";
import Toast from 'react-native-toast-message';
import Images from "../../../../assets/images";
import styles from "./styles";
import PasswordInput from "../../../../components/passwordinput/passwordinput";
import Button from "../../../../components/button/button";
import EmailInput from "../../../../components/emailinput/emailinput";
// import CustomToast from "../../components/customToast";

export default class SetupAccount extends Component {
constructor (props){
super(props);
this.state={
    emailValid:true
}
}

    closeModal = () => {
        this.setState({ isModalVisible: false });
        const { navigation } = this.props;
        navigation.navigate('LoginPage');
    };
    handleButtonPress =() => {

    }
    render() {
        const {emailValid}=this.state
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
                            <Text style={styles.Title1}>Let's Set up your account</Text>
                            <Text style={styles.Title2}>what is the name of your organization.</Text>

                            <EmailInput
                            pass={'Organization name'}
                            isValid={emailValid}
                            img={require('/Users/admin/Desktop/QuivioUI/src/assets/icons/image.png')}
                            />
                             <Text style={styles.Title2}>e.g : Papabear, Papa_Bear_Anderson.</Text>
                        </View>
                        <View style={styles.ButtomDiv}>
                            <Button title={'Continue'} onPress={this.handleButtonPress} />
                        </View>
                       
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
