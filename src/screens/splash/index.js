import React, { Component } from "react";
import { View,Text, ImageBackground } from "react-native";
import splash from "../../assets/images/Splash.png"
import styles from "./styles";

export default class Splash extends Component{

    handleHome = () => {
            const { navigation } = this.props;
            navigation.navigate('Tutorial')
    };

    componentDidMount = () => {
        setTimeout(() => {
            this.handleHome()
        }, 1500);
    }

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={splash}
                style={styles.Img}/>
            </View>
        )
    }
}