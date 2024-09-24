import React, { Component } from "react";
import { View,Image, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default class Button extends Component{
    
    render(){
        return(
           <TouchableOpacity 
                style={styles.img}
                onPress={this.props.onPress}
            >
                <Text style={styles.buttontext}>{this.props.title}</Text>
           </TouchableOpacity>
        )
    }
}