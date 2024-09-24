import React, { Component } from "react";
import { View,Image, TextInput,Text} from "react-native";
import styles from "./styles";

export default class EmailInput extends Component{

    
    render(){
        const { isValid, errorMessage } = this.props;
        return(
            <View>
            <View style={[styles.container, !isValid && styles.errorBorder]}>
                <Image
                source={require('/Users/admin/Desktop/QuivioUI/src/assets/icons/email.png')}
                style={[styles.img, !isValid && styles.errorIcon]}
                />
                <TextInput
                placeholder="Email Address"
                style={styles.placeholdertext}
                onChangeText={this.props.onChangeText}
                onBlur={this.props.onBlur}
                />
            </View>
            {!isValid && 
            <View style={{flexDirection:'row'}}>
                <Image source={require('/Users/admin/Desktop/QuivioUI/src/assets/icons/error.png')}
                style={{height:15,width:15,marginVertical: 5,marginHorizontal:10}}/>
                <Text style={styles.errorText}>{errorMessage}</Text>
            </View>}
            </View>
        )
    }
}