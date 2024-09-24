import React, { Component } from "react";
import { View, Image, TextInput, StyleSheet, TouchableOpacity ,Text} from "react-native";
import styles from "./styles";

export default class PasswordInput extends Component {
    constructor(props) {
        super(props);
    }

   
    render() {
        const { isValid, isPasswordVisible ,errorMessage } = this.props;
        return (
            <View>
            <View style={[styles.container, !isValid && styles.errorBorder]}>
                <View style={styles.container2}>
                    <Image
                        source={require('/Users/admin/Desktop/QuivioUI/src/assets/icons/pass.png')}
                        style={[styles.img, !isValid && styles.errorIcon]}
                    />
                    <TextInput
                        placeholder={this.props.pass}
                        style={styles.placeholdertext}
                        secureTextEntry= {isPasswordVisible}
                        onChangeText={this.props.onChangeText}
                        onBlur={this.props.onBlur}
                    />
                    <TouchableOpacity onPress={this.props.onPress}>
                    <Image
                        source={
                            isPasswordVisible

                            ? require('/Users/admin/Desktop/QuivioUI/src/assets/images/hide.png')
                            : require('/Users/admin/Desktop/QuivioUI/src/assets/icons/eye.png')
                        }
                        style={styles.img}
                    />
                    </TouchableOpacity>
                </View>

               
            </View>
             {!isValid && 
            (<View style={{flexDirection:'row'}}> 
            <Image source={require('/Users/admin/Desktop/QuivioUI/src/assets/icons/error.png')}
            style={{height:15,width:15,marginVertical: 5,marginHorizontal:10}}/>
            <Text style={styles.errorText}>{errorMessage}</Text> 
            </View>)
             }
             </View>
        )
    }
}
